import MapClientWrapper from './components/MapClientWrapper';

export default async function Page() {
    return (
        <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
            <MapClientWrapper posix={[-34.19853075300752, -60.73530100481986]} />
        </div>
    );
}