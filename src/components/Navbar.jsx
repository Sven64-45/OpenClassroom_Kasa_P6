import React from 'react';
import Logo from '../assets/logokasa.png';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Navbar.scss';

function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar">
      <h1 className="logo">
        <img src={Logo} alt="Logo" />
      </h1>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'navbar-link active' : 'navbar-link'}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className={
                location.pathname === '/About' ? 'navbar-link about active' : 'navbar-link about'
              }>
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
