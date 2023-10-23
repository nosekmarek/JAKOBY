import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


//Styles imports
// import './styles/index.css';
// import './styles/simple-grid.css'
// import './styles/test-style1.sass'
import './styles/test-style2.sass'
//Correct CSSs
import './styles/Variables.sass'
import './styles/SiteHeader.sass'
import './styles/ProjectList.sass'
import './styles/Project.sass'
import './styles/Links.sass'




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
                    <Route path='/project/:id' element={< Projectpage />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
