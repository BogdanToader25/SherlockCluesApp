import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CaseDetails = () => {

    const location = useLocation();

    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden relative">
            <div className="text-start m-20 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        {location.state.mycase.casetitle}
                    </span>

                </h2>
                <p className="text-xl mt-4 text-gray-400">
                    {location.state.mycase.casedescription}
                </p>

            </div>

            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-6">
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Farmacy</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Bank</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Carriages Depot</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Chemist</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Docks</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Hotel</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Locksmith</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Museum</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">News Agent</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Park</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Pawn Broker</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Scotland Yard</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Tabacconist</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Tavern</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="flex justify-center p-6 bg-gray-100 border-2 border-gray-300 rounded-xl">
                        <Card.Body>
                            <Card.Title className="centered">Theater</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div >
        </div>
    )

}

export default CaseDetails;