import React from 'react';
import './IPLEvent.css';
import { Link } from 'react-router-dom';

const IPLEvent = () => {
  return (
    <div className="ipl-event-container">
      <div className="event-image">
        <img src="https://i.pinimg.com/originals/a0/c3/a9/a0c3a908b8fbc979bfc9da03038e628a.jpg" alt="IPL Players" />
      </div>
      <div className="event-content">
        <h1>INDIAN PREMIER LEAGUE</h1>
        <p className="price">₹2499</p>
        <p className="subtitle">Indian Premier League</p>
        
        <div className="event-details">
          <h2>When and Where</h2>
          
          <div className="time-section">
            <div className="start-time">
              <h3>Date and Time</h3>
              <p><i className="far fa-calendar"></i> Start Date: 2025-03-15</p>
              <p><i className="far fa-clock"></i> Start Time: 19:32</p>
            </div>
            
            <div className="end-time">
              <h3>Date and Time</h3>
              <p><i className="far fa-calendar"></i> End Date: 2024-05-09</p>
              <p><i className="far fa-clock"></i> End Time: 11:11</p>
            </div>
          </div>
          
          <div className="location">
            <h3>Location</h3>
            <p><i className="fas fa-map-marker-alt"></i> Motera Stadium Ahemdabad</p>
          </div>
        </div>
        <Link to={"/bookticket"}> <button className="book-ticket">Book Ticket</button></Link>
        
       
      </div>
    </div>
  );
};

export default IPLEvent;