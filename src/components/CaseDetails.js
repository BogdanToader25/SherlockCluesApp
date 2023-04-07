import { useLocation } from 'react-router-dom';
import LocationsContainer from './LocationsContainer'

const CaseDetails = () => {

    const location = useLocation();

    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden relative">
            {/*<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-3 rounded inline-flex">*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">*/}
            {/*        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />*/}
            {/*    </svg>*/}
            {/*    <span>Back to cases</span>*/}
            {/*</button>*/}
            <div className="text-start m-20 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        {location.state.mycase.casetitle}
                    </span>

                </h2>
                <p className="text-xl mt-4 text-gray-400">
                    {location.state.mycase.casedescription}
                </p>
            </div>

            <LocationsContainer mycase={location.state.mycase} />
        </div>
    )

}

export default CaseDetails;