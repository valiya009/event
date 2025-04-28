import React, { useState } from 'react';
import '../Pages/Book Ticket.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    matchDate: '',
    ticketType: 'regular',
    quantity: 1,
    stadium: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your booking logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="booking-container">
      <div className="booking-form-wrapper">
        <h2>Book Your Cricket Match Tickets</h2>
        <div className="form-underline"></div>
        
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Full Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <label>Phone Number</label>
          </div>

          <div className="form-row">
            <div className="form-group">
              <select
                name="stadium"
                value={formData.stadium}
                onChange={handleChange}
                required
              >
                <option value="">Select Stadium</option>
                <option value="motera">Narendra Modi Stadium, Motera</option>
                <option value="wankhede">Wankhede Stadium, Mumbai</option>
                <option value="chinnaswamy">M. Chinnaswamy Stadium, Bangalore</option>
                <option value="eden">Eden Gardens, Kolkata</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="date"
                name="matchDate"
                value={formData.matchDate}
                onChange={handleChange}
                required
              />
              <label>Match Date</label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <select
                name="ticketType"
                value={formData.ticketType}
                onChange={handleChange}
                required
              >
                <option value="regular">Regular</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="number"
                name="quantity"
                min="1"
                max="6"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
              <label>Number of Tickets</label>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Book Now
            <span className="btn-shine"></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;