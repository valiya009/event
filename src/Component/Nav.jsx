import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Fetures/USerSlice";
import chat from "../assets/m21.jpg";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);

  console.log(user);

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
        {user ? (
          <div className="user-profile">
            <div
              className="user-info"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="user-name">{user.name}</span>
              <img src={chat} alt="Profile" className="profile-pic" />
            </div>

            {showDropdown && (
              <div className="dropdown-menu">
                <Link
                  to="/account"
                  className="dropdown-item"
                  onClick={() => setShowDropdown(false)}
                >
                  Account
                </Link>
                <Link
                  to="/mybookings"
                  className="dropdown-item"
                  onClick={() => setShowDropdown(false)}
                >
                  My Bookings
                </Link>
                <button
                  onClick={() => {
                    dispatch(logout());
                    setShowDropdown(false);
                  }}
                  className="dropdown-item logout-btn"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="login-button">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
