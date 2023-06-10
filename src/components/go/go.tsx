import React, { useState, useEffect } from 'react';

export interface Props {
    hash: any;
}

export default function Go({ hash }: Props) {
    const [latest, setLatest] = useState({
        url: '',
        slug: '',
    });

    useEffect(() => {
        const url = '/api/go/' + hash;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                typeof window !== undefined && window.location.replace(data.url);
                setLatest(data);
            } catch (error) {
                typeof window !== undefined && window.location.replace('/404');
            }
        };

        fetchData();
    }, []);
    return (
        <></>
    )
}
