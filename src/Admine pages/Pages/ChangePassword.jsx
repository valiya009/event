import React, { useState } from 'react';
import './ChangePassword.css';
import chat from '../image/m11.png'
import { useNavigate } from 'react-router-dom';


const ChangePassword = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });   

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/admin');
  };

  return (
    <div className="password-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={chat} alt="Profile" />
        </div>
      </div>

      <div className="password-tabs">
        <button className="tab-btn">Personal Detail</button>
        <button className="tab-btn active">Change Password</button>
      </div>

      <div className="password-content">
        <form onSubmit={handleSubmit} className="password-form">
          <h3>Change Password</h3>
          
          <div className="form-group">
            <label>Old Password:</label>
            <input
              type="password"
              value={formData.oldPassword}
              onChange={(e) => setFormData({ ...formData, oldPassword: e.target.value })}
              className="password-input"
            />
          </div>

          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              value={formData.newPassword}
              onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
              className="password-input"
            />
          </div>

          <div className="form-group">
            <label>Conform New Password:</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="password-input"
            />
          </div>

          <button type="submit" className="update-btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;