import React from 'react';
import './CricketEvents.css';

const CricketEvents = () => {
  const cricketEvents = [
    {
      id: 1,
      name: "INDIAN PREMIER LEAGUE",
      date: "2025-03-15",
      time: "19:32",
      location: "Motera Stadium Ahemdabad",
      price: "Rs. 2499",
      image: "/images/ipl.jpg"
    },
    {
      id: 2,
      name: "WOMEN PREMIER LEAGUE",
      date: "2025-02-22",
      time: "07:30",
      location: "Wankhede Cricket Stadium Mumbai",
      price: "Rs. 599",
      image: "/images/wpl.jpg"
    },
    {
      id: 3,
      name: "GOKULDHAM PREMIER LEAGUE",
      date: "2024-10-10",
      time: "08:00",
      location: "GokulDham Society Mumbai",
      price: "Rs. 200",
      image: "/images/gpl.jpg"
    },
    {
      id: 4,
      name: "CRICKET GROUND",
      date: "2024-12-02",
      time: "00:00",
      location: "Ahmedabad",
      price: "Rs. 5000",
      image: "/images/ground.jpg"
    }
  ];

  return (
    <div className="cricket-events-container">
      <h1>क्रिकेट इवेंट्स</h1>
      <div className="events-grid">
        {cricketEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-details">
              <h2>{event.name}</h2>
              <p className="event-date">
                <span>तारीख:</span> {event.date}
              </p>
              <p className="event-time">
                <span>समय:</span> {event.time}
              </p>
              <p className="event-location">
                <span>स्थान:</span> {event.location}
              </p>
              <p className="event-price">
                <span>टिकट मूल्य:</span> {event.price}
              </p>
              <button className="book-ticket">टिकट बुक करें →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CricketEvents;