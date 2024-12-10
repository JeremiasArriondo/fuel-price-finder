'use client';

import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import { LatLngExpression, LatLngTuple } from 'leaflet';

const Map = dynamic(() =>  import('@/app/components/Map'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
});

export default function MapClientWrapper() {

    const Map = useMemo(() => dynamic(
        () => import('@/app/components/Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])
    
    const [posix, setPosix] = useState<LatLngExpression | LatLngTuple>([4.79029, -75.69003]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setPosix([latitude, longitude]);
                },
                (error) => {
                    console.error(error);
                    setPosix([4.79029, -75.69003]);
                }
            );
        } else {
            console.warn('Geolocation is not supported by this browser.');
        }
    }, []);
    
    return <Map posix={posix} />;
}
