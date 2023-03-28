import Card from 'react-bootstrap/Card';
import image from '../images/Sherlock.png';

const Location = ({locationName, clueNumber }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{locationName}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default Location;