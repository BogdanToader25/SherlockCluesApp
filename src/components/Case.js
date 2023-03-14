import Card from 'react-bootstrap/Card';
import image from '../images/Sherlock.png';

const Case = ({caseNumber, caseTitle }) => {



    return (
        <Card style={{ width: '18rem' }}>
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