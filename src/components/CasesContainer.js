import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../images/Sherlock.png';

function CasesContainer() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Case no. 1</Card.Title>
                <Card.Text>
                    The Adventure of the Unholy Man
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CasesContainer;