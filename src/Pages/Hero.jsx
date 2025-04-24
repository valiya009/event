import React from 'react';
import './hero.css';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="background-content">
          <h1>
            One Stop <span className="highlight">Event</span> Solution
          </h1>
          <p>Get all your event needs managed in one place!</p>
          <div className="input-box">
            <input type="text" placeholder="Enter Your Email" className="input" />
            <button className="btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
