import React from "react";
import { Link } from "react-router-dom";
import "./Aboute.css";

const Background = () => {
  return (
    <>
      <div className="background">
        <div className="overlay">
          <div className="box-detail">
            <h2>ALL YOU NEED TO</h2>
            <p className="know-text">KNOW</p>
            <div className="about-text">
              <h1>ABOUT</h1>
            </div>
            <h1 className="harmoni-text">HARMONI</h1>
          </div>
          <nav className="navigation">
            <Link to="/" className="nav-item">
              HOME
            </Link>
            <span className="separator">|</span>
            <Link to="/about" className="nav-item">
              ABOUT
            </Link>
          </nav>
        </div>
      </div>

      <div className="mission-vision-container">
        <div className="company-info">
          <p className="subtitle">We are harmoni</p>
          <h1 className="title">No.1 Events Management</h1>
          <button className="get-started-btn">Get Started!</button>
        </div>

        <div className="info-section">
          <div className="mission-section">
            <h2>
              our mission <span className="underline"></span>
            </h2>
            <p>
              Lorem ipsum dollor site amet the best consectuer adipiscing elites
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat insignia the consectuer adipiscing elit.
            </p>
            <p className="italic-text">Lorem ipsum dollor site amet the best</p>
          </div>

          <div className="vision-section">
            <h2>
              our vision <span className="underline"></span>
            </h2>
            <p>
              Lorem ipsum dollor site amet the best consectuer adipiscing elites
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat insignia the consectuer adipiscing elit.
            </p>
            <p className="italic-text">Lorem ipsum dollor site amet the best</p>
          </div>
        </div>
      </div>

      {/* Study With Us Section */}
      <div className="study-container">
        <div className="study-grid">
          {Array(8)
            .fill()
            .map((_, index) => (
              <div key={index} className="study-card">
                <div className="study-content">
                  <h3>study with us</h3>
                  <p>Visit Our World class Facility</p>
                  <p>for bSouth African Scientist</p>
                  <p>and Spectrum</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Background;
