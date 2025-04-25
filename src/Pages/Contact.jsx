import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-header">
          <h2>CONTACT US NOW</h2>
          <div className="header-highlight">
            <span className="keep">KEEP</span>
            <span className="in-touch">IN TOUCH</span>
          </div>
          <div className="nav-links">
            <a href="/">Home</a>
            <span className="separator">|</span>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
      <div className="form-container">
        <div className="contact-form">
          <div className="form-icon">
            <i className="fas fa-lock"></i>
            <div className="us">Contact Us</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="name *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email *"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="phone *"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="message *"
                required
              ></textarea>
            </div>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
