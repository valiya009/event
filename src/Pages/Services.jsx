import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Pages/Services.css";

const EventOverview = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="event-container" data-aos="fade-up">
      <div className="content-grid" data-aos="zoom-in">
        <div className="about-section" data-aos="fade-right">
          <h2 className="title">
            Harmony Event Management firm & Wedding Planner is a group of
            creative minds who would like to make weddings, birthday & any kind
            of events courteous & a better place for our clients to celebrate
            important moment of their lives...
          </h2>
          <p className="cta-link" data-aos="fade-up">
            Request Early Access to get Started
          </p>
        </div>

        <div className="services-section" data-aos="fade-left">
          <div className="service-item" data-aos="zoom-in">
            <h4 className="service-title">Photography</h4>
            <p className="service-description">
              A team of 5 talented photographers are ready to snap the best
              moments of your ceremony
            </p>
          </div>

          <div className="service-item" data-aos="zoom-in-up">
            <h4 className="service-title">Cinematography or Videography service</h4>
            <p className="service-description">
              Creative full HD 1080p Video, a different space of your ceremony
            </p>
          </div>

          <div className="service-item" data-aos="zoom-in-right">
            <h4 className="service-title">Full Venue Decoration Service</h4>
            <p className="service-description">
              A blend of out-of-box ideas to decorate your precious date
            </p>
          </div>

          <div className="service-item" data-aos="zoom-in-down">
            <h4 className="service-title">Home Decoration</h4>
            <p className="service-description">
              Just call us and get total event solution under one roof..
            </p>
          </div>
        </div>
      </div>

      <div className="cta-banner" data-aos="flip-up">
        <div className="cta-content">
          <p className="cta-small">Request Early Access to get Started</p>
          <p className="cta-large">
            Registered Today & start exploring the endless possibilities.
          </p>
        </div>
        <button className="cta-button">GET STARTED</button>
      </div>
    </div>
  );
};

export default EventOverview;