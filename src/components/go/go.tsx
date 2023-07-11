import React, { useState, useEffect } from 'react';

export interface Props {
    hash: any;
}

export default function Go({ hash }: Props) {
    const [latest, setLatest] = useState({
        url: '',
        slug: '',
    });
    const url = '/api/go/' + hash;
    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        if(!data.url) typeof window !== undefined && window.location.replace('/404')
        setLatest(data);
    };
    useEffect(() => {
        fetchData();
    }, [url]);
    useEffect(() => {
        const timer = setTimeout(() => {
            typeof window !== undefined && window.location.replace(latest.url);
        }, 1000);
        return () => clearTimeout(timer);
    }, [latest]);
    return (
        <>
            <div
                style={{
                    textAlign: 'center',
                    fontFamily: 'Roboto, sans-serif',
                }}
            >
                <h1>Redirecting...</h1>
            </div>
        </>
    );
}
