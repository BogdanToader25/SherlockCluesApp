import Location from './Location';
import BankImage from '../images/Bank.PNG';
import CarriagesImage from '../images/CarriagesDepot.PNG';
import ChemistImage from '../images/Chemist.PNG';
import DocksImage from '../images/Docks.PNG';
import HotelImage from '../images/Hotel.PNG';
import LocksmithImage from '../images/Locksmith.PNG';
import MuseumImage from '../images/Museum.PNG';
import NewsImage from '../images/NewsAgent.PNG';
import ParkImage from '../images/Park.PNG';
import PawnImage from '../images/PawnBroker.PNG';
import ScotlandYardImage from '../images/ScotlandYard.PNG';
import TabacconistImage from '../images/Tabacconist.PNG';
import TavernImage from '../images/Tavern.PNG';
import TheaterImage from '../images/Theater.PNG';

const LocationsContainer = ({mycase }) => {

    return (
        <div className="container mx-auto">            
            <div className="grid grid-cols-3 gap-6">
                <Location locationName={"Banca"} clueNumber={mycase.clueNumber} image={BankImage} mycase={mycase} />
                <Location locationName={"Depoul de Trasuri"} clueNumber={mycase.clueNumber} image={CarriagesImage} mycase={mycase} />
                <Location locationName={"Farmacie"} clueNumber={mycase.clueNumber} image={ChemistImage} mycase={mycase} />
                <Location locationName={"Docuri"} clueNumber={mycase.clueNumber} image={DocksImage} mycase={mycase} />
                <Location locationName={"Hotel"} clueNumber={mycase.clueNumber} image={HotelImage} mycase={mycase} />
                <Location locationName={"Lacatuserie"} clueNumber={mycase.clueNumber} image={LocksmithImage} mycase={mycase} />
                <Location locationName={"Muzeu"} clueNumber={mycase.clueNumber} image={MuseumImage} mycase={mycase} />
                <Location locationName={"Magazinul de Ziare"} clueNumber={mycase.clueNumber} image={NewsImage} mycase={mycase} />
                <Location locationName={"Parc"} clueNumber={mycase.clueNumber} image={ParkImage} mycase={mycase} />
                <Location locationName={"Magazin de Amanet"} clueNumber={mycase.clueNumber} image={PawnImage} mycase={mycase} />
                <Location locationName={"Scotland Yard"} clueNumber={mycase.clueNumber} image={ScotlandYardImage} mycase={mycase} />
                <Location locationName={"Tutungerie"} clueNumber={mycase.clueNumber} image={TabacconistImage} mycase={mycase} />
                <Location locationName={"Taverna"} clueNumber={mycase.clueNumber} image={TavernImage} mycase={mycase} />
                <Location locationName={"Teatru"} clueNumber={mycase.clueNumber} image={TheaterImage} mycase={mycase} />
            </div>
        </div>
    )

}

export default LocationsContainer;