import React, { useState } from "react";
import "./Contact.css"  ;
import { Link, useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/admin");
  };

  return (
    <div className="main-container">
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="animate-text">CONTACT US NOW</h2>
          <div className="hero-title">
            <span className="keep animate-keep">KEEP</span>
            <span className="touch animate-touch">IN TOUCH</span>
          </div>
          <div className="breadcrumb animate-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="form-wrapper">
        <div className="password-form-container">
          <div className="form-header">
            <div className="lock-icon">
              <i className="fas fa-lock"></i>
            </div>
            <h3>Change Password</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="password"
                placeholder=" "
                value={formData.currentPassword}
                onChange={(e) =>
                  setFormData({ ...formData, currentPassword: e.target.value })
                }
                required
              />
              <label>Current Password</label>
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder=" "
                value={formData.newPassword}
                onChange={(e) =>
                  setFormData({ ...formData, newPassword: e.target.value })
                }
                required
              />
              <label>New Password</label>
            </div>

            <button type="submit" className="change-btn">
              <span>CHANGE</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
