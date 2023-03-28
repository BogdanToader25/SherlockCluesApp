import './App.css';
import './index.css';
import NavMenu from './components/NavMenu';
import CasesContainer from './components/CasesContainer';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationsContainer from './components/LocationsContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

    return (
        <div>
            <NavMenu />
            <Router>
                <Routes>
                    <Route path="/" element={<CasesContainer />} />
                    <Route path="/cases" element={<CasesContainer />} />
                    <Route path="/locations" element={<LocationsContainer />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
