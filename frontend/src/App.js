import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//Page&Layouts imports
import Homepage from './pages/Homepage';
import Projectpage from './pages/Projectpage';
import SiteHeader from './components/SiteHeader';

function App() {
    return (
        <Router>
            <div className='container'>
                <SiteHeader/>
                <Routes>
                    <Route exact path='/' element={< Homepage />}/>
                    {/* <Route path='/project/:id' element={< Projectpage />}/> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
