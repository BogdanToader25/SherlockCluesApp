import CaseCard from './CaseCard';
import cases from '../data/Cases.json';

function CasesContainer() {

    return (     
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-6">             
                {cases.cases.map((mycase) => {
                    return <CaseCard mycase={mycase} key={mycase.casetitle} />
                })}
            </div>
        </div>
    )
}

export default CasesContainer;