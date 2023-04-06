import Card from 'react-bootstrap/Card';
import image from '../images/Sherlock.png';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';

const CaseCard = ({mycase}) => {

    const navigate = useNavigate();

    const navigateToLocations = () => {
        navigate("/casedetails", {
            state: {
                mycase: mycase
            }
        });
    };

    return (
        
        <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl" onClick={navigateToLocations}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className="centered">Case no. {mycase.casenumber}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default CaseCard;