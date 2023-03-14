import Case from './Case';

function CasesContainer() {
    return (
        <div>
            <Case caseNumber={1} caseTitle={"The Adventures of the Unholy Man" } />
            <Case caseNumber={2} caseTitle={"Another Case Title"} />
        </div>
    )
}

export default CasesContainer;