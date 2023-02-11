import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../img/site/logos/jlslotgame2.png';

const NavBar = () => {

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  }

  const handleHideNavbarMini = () => {
    setShowLinks(false);
  }

  return(
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <Link to="/" className='navbar-link'>
        <div className="navbar-logo"><img src={logo} alt="Logo JL slotgame" /></div>
      </Link>
      <ul className="navbar-links">
        <li className="navbar-item slideInDown-1" onClick={handleHideNavbarMini}>
          <Link to="/" className='navbar-link'>Accueil</Link>
        </li>
        <li className="navbar-item slideInDown-2" onClick={handleHideNavbarMini}>
          <Link to="/bank" className='navbar-link'>Banque</Link>
        </li>
        <li className="navbar-item slideInDown-4" onClick={handleHideNavbarMini}>
          <Link to="/scores" className='navbar-link'>Scores</Link>
        </li>
      </ul>
      <button className="navbar-burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  )
}

export default NavBar;