import CaseCard from './CaseCard';
import cases from '../data/Cases.json';

function CasesContainer() {

    return (     
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-4 lg:gap-6 sm:grid-cols-1 sm:gap-2">             
                {cases.cases.map((mycase) => {
                    return <CaseCard mycase={mycase} key={mycase.casetitle} />
                })}
            </div>
        </div>
    )
}

export default CasesContainer;