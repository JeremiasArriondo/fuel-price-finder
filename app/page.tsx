import Image from 'next/image';
import map from '../public/map.svg'
import MapClientWrapper from './components/MapClientWrapper';

export default async function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
            <div className="fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]">
                <Image alt="World Map" src={map} fill={true} quality={100} />
            </div>
            <main className="flex flex-col items-center flex-1 px-4 sm:px-20 text-center z-10 pt-8 sm:pt-20">
                <div className="bg-white-700 mx-auto my-5 w-[500px] h-[480px]">
                    <MapClientWrapper />
                </div>
            </main>
        </div>
    );
}