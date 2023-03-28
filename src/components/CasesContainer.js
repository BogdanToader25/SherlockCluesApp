import Case from './Case';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CasesContainer() {
    return (     
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-6">
                <Case caseNumber={1} caseTitle={"The Adventures of the Unholy Man"} />
                <Case caseNumber={2} caseTitle={"Another Case Title"} />
            </div>
        </div>
    )
}

export default CasesContainer;