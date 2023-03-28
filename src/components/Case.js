import Card from 'react-bootstrap/Card';
import image from '../images/Sherlock.png';
import {useNavigate } from 'react-router-dom';

const Case = ({caseNumber, caseTitle }) => {

    const navigate = useNavigate();

    const navigateToLocations = () => {
        navigate("/locations")
    }

    return (
        
        <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl" onClick={navigateToLocations}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Case no. {caseNumber}</Card.Title>
                <Card.Text>
                    {caseTitle}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Case;