
import About from './About';
import './App.css';
import Home from './Home';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";

import Shop from './Shop';
import Team from './Team';
import Contact from './Contact';

function App() {
  return (
   
      <Router>
      <nav className='nav'>
        <Link className='link' to="/">First page</Link>
        <Link className='link' to="/about">About</Link>
        <Link  className='link' to="/home">Home</Link>
        <Link className='link' to="/shop">Shop</Link>
        <Link className='link' to="/contact">Contact</Link>
        <Link className='link' to="/team">Team</Link>
      </nav>
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
 
  );
}

export default App;
