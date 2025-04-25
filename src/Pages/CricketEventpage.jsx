import React from 'react';
import './CricketEvents.css';


const CricketEvents = () => {
  const cricketEvents = [
    {
      id: 1,
      name: "INDIAN PREMIER LEAGUE",
      date: "2025-03-15",
      time: "19:32",
      location: "Motera Stadium Ahmedabad",
      price: "Rs. 2499",
      image:
        "https://i.pinimg.com/originals/c4/78/74/c47874b6d9ee4a82ce1e42c99c6b88b2.png",
    },
    {
      id: 2,
      name: "WOMEN PREMIER LEAGUE",
      date: "2025-02-22",
      time: "07:30",
      location: "Wankhede Cricket Stadium Mumbai",
      price: "Rs. 599",
      image: "https://circleofcricket.com/post_image/post_image_fb49420.jpg",
    },
    {
      id: 3,
      name: "GOKULDHAM PREMIER LEAGUE",
      date: "2024-10-10",
      time: "08:00",
      location: "Gokuldham Society Mumbai",
      price: "Rs. 200",
      image:
        "http://4.bp.blogspot.com/-eTv3OKVzlBk/U5Lduph1t0I/AAAAAAAAcLA/zuxIirOkJek/w1200-h630-p-k-no-nu/GPL+3+Coming+Soon+in+Tarak+Mehta+2014+1.jpg",
    },
    {
      id: 4,
      name: "CRICKET GROUND",
      date: "2024-12-02",
      time: "00:00",
      location: "Ahmedabad",
      price: "Rs. 5000",
      image:
        "https://www.sportzcraazy.com/wp-content/uploads/2018/12/la-tr-baseball-sydney-cricket-ground-australia-20140302-photos.jpg",
    },
  ];

  return (
    <div className="cricket-events-container">
      <h1>Cricket Events</h1>
      <div className="events-grid">
        {cricketEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-details">
              <h2>{event.name}</h2>
              <p className="event-date">
                <span>Date:</span> {event.date}
              </p>
              <p className="event-time">
                <span>Time:</span> {event.time}
              </p>
              <p className="event-location">
                <span>Location:</span> {event.location}
              </p>
              <p className="event-price">
                <span>Ticket Price:</span> {event.price}
              </p>
              <button className="book-ticket">Book Ticket →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CricketEvents;
