'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() =>  import('@/app/components/Map'), {
    loading: () => <p>A map is loading</p>,
    ssr: false,
});

export default function MapClientWrapper({ posix }: { posix: [number, number] }) {
    return <Map posix={posix} />;
}
