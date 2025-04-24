import React from 'react';
import './hero.css';

export const Hero = () => {
  // Static list of logged-in users
  const loggedInUsers = [
    {
      profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
      profilePhoto: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const visibleUsers = loggedInUsers.slice(0, 3);
  const remainingUsers = loggedInUsers.length - visibleUsers.length;

  return (
    <div className="hero">
      <div className="overlay">
        <div className="background-content">
          <h1>
            One Stop <span className="highlight">Event</span> Solution
          </h1>
          <p>Get all your event needs managed in one place!</p>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input"
            />
            <button className="btn">Get Started</button>
          </div>

          {/* Avatars Section */}
          <div className="avatar-group -space-x-6">
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-12">
                <span>+99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
