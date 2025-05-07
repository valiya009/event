import React, { useState } from 'react';
import './Profile.css';
import {Link} from 'react-router-dom'
import chat from '../image/m11.png'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={chat} alt="Profile" />
        </div>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal Detail
        </button>
        <Link to={"/admin/changepassword"}>
        <button 
          className={`tab-btn ${activeTab === 'password' ? 'active' : ''}`}
          onClick={() => setActiveTab('password')}
        >
          Change Password
        </button></Link>
      </div>

      <div className="profile-content">
        {activeTab === 'personal' && (
          <form onSubmit={handleSubmit} className="profile-form">
            <h3>Personal Details</h3>
            
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Email Address:</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <button type="submit" className="update-btn">Update</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;