import Card from 'react-bootstrap/Card';
import { useNavigate } from '../../node_modules/react-router-dom/dist/index';

const Location = ({ locationName, cluenumber, image }) => {


    const navigate = useNavigate();

    const navigateToLocationClue = () => {
        navigate("/locationclue", {
            state: {
                cluenumber: cluenumber
            }
        });
    };
    return (
        <Card style={{ width: '18rem' }} onClick={navigateToLocationClue}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{locationName}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Location;