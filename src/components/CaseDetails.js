import { useLocation } from 'react-router-dom';

const CaseDetails = () => {

    const location = useLocation();

    return (
        <div>
            <div>
                {location.state.mycase.casetitle}
            </div>
            <div>
                {location.state.mycase.casedescription }
            </div>
        </div>

    )

}

export default CaseDetails;