import Location from './Location';

const LocationsContainer = () => {

    return (
        <div className="container mx-auto">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Back to cases</span>
            </button>
            <div className="grid grid-cols-4 gap-6">
                <Location locationName={"Farmacie"} clueNumber={1} />
                <Location locationName={"Magazinul de ziare"} clueNumber={2} />
            </div>
        </div>
    )

}

export default LocationsContainer;