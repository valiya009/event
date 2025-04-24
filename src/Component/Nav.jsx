import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://jthemes.net/themes/html/harmony-event/assets/images/1.site-logo.png"
          alt="Logo"
          className="img"
        />
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-item">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/ABOUT" className="nav-item">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/EVENT" className="nav-item">
            EVENT
          </Link>
        </li>
        <li>
          <Link to="/GALLRY" className="nav-item">
            GALLRY
          </Link>
        </li>
        <li>
          <Link to="/CONTACT" className="nav-item">
            CONTACT
          </Link>
        </li>
      </ul>

      <div className="navbar-login">
        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
