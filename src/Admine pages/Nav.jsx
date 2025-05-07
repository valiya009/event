import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';
import chat from './image/m11.png'


const AdminNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <div className="navbar-left">
          <button className="toggle-btn" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>
          <h1>Admin</h1>
        </div>
        <div className="navbar-right">
          <div className="admin-profile">
            <Link to="/admin/profile">
            <img src={chat} alt="Admin" />
          </Link>
          </div>
        </div>
      </nav>

      <div className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-links">
          <Link to="/admin/userlist">
            <i className="fas fa-users"></i>
            User List
          </Link>
          <Link to="/admin/post">
            <i className="fas fa-calendar-alt"></i>
            Event Post
          </Link>
          <Link to="/admin/post event">
            <i className="fas fa-list"></i>
            Post Category
          </Link>
          <Link to="/admin/gallery">
            <i className="fas fa-images"></i>
            Add Gallery
          </Link>
          <Link to="/admin/contacts">
            <i className="fas fa-address-book"></i>
            Contact List
          </Link>
          <Link to="/logout">
            <i className="fas fa-sign-out-alt"></i>
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;