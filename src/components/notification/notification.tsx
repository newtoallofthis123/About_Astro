import React, { useState, useEffect } from 'react';
import { dateHash } from '../../utils/utils';

export default function Notification() {
    const [notification, setNotification] = useState(false);
    const [latest, setLatest] = useState({
        tag: '',
        title: '',
        description: '',
        hash: '',
        link: '',
        theme: ''
    });

    useEffect(() => {
        const url = '/api/notification';
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data[0].hash >= dateHash()) {
                    setNotification(true);
                }
                setLatest(data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {latest.title != '' && notification && (
                <div
                    className={
                        'hidden md:flex md:flex-row px-4 py-2 cursor-pointer bg-' +
                        latest.theme +
                        '-300'
                    }
                >
                    <div
                        onClick={() => {
                            typeof window !== 'undefined' &&
                                window.open(latest.link);
                        }}
                        className="w-5/6"
                    >
                        <h1 className="text-2xl font-semibold">
                            {latest.title}
                        </h1>
                        <p className="text-lg py-2">{latest.description}</p>
                    </div>
                    <div className="w-1/6 flex justify-center items-center">
                        <button
                            onClick={() => {
                                setNotification(false);
                            }}
                            name='close'
                        >
                            Close <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
