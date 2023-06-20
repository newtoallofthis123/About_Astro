import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

export interface Props{
    hash: any
}

export default function Update({ hash }: Props) {
    const [latest, setLatest] = useState({
        name: '',
        content: '',
        author: '',
        date: '',
        hash: '',
    });

    useEffect(() => {
        const url = "/api/updates/" + hash
        console.log(url)
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setLatest(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {latest.name == '' && (
                <h1 className="text-center p-4">Loading...</h1>
            )}
            {latest.name != '' && (
                <div className="m-2 md:mx-20 mt-0 p-2 md:p-10">
                    <h1 className="md:text-4xl text-3xl text-center py-4 pt-0 font-bold">
                        {latest.name}
                    </h1>
                    <h2 className="md:text-2xl font-light text-center text-xl">By {latest.author} on {latest.date}</h2>
                    <div
                        className="text-xl md:pt-8 p-4 md:p-0 leading-10"
                        dangerouslySetInnerHTML={{
                            __html: marked(
                                latest.content,
                                {
                                    headerIds: false,
                                    mangle: false,
                                }
                            ),
                        }}
                    />
                </div>
            )}
        </>
    );
}
