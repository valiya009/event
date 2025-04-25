import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://www.oeiras.pt/documents/20124/0/CMO-3109230523.jpg/76f8f233-0626-103f-d8db-a73f200e4aed?t=1684944963656",
      title: "Corporate Conference 2023",
      description: "Annual tech conference with industry leaders",
      date: "June 15, 2023",
      location: "Grand Hotel, New York",
    },
    {
      id: 2,
      url: "https://paunveiled.com/wp-content/uploads/2022/12/different-types-of-wedding-ceremonies-catholic.jpg",
      title: "Wedding Ceremony",
      description: "Luxury wedding planning and execution",
      date: "July 22, 2023",
      location: "Beachfront Resort, Miami",
    },
    {
      id: 3,
      url: "https://www.icmp.ac.uk/sites/default/files/styles/page_background/public/slider-image/festival_1.jpg?itok=znbQfiko",
      title: "Music Festival",
      description: "Summer music festival featuring top artists",
      date: "August 5, 2023",
      location: "Central Park, Chicago",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/originals/ce/ef/d4/ceefd4edaf32cd654759df91cddebad0.png",
      title: "Product Launch",
      description: "New technology product launch event",
      date: "September 10, 2023",
      location: "Tech Center, San Francisco",
    },
    {
      id: 5,
      url: "https://www.frontstream.com/hs-fs/hubfs/Imported_Blog_Media/Fotolia_127359744_Subscription_Monthly_M.jpg?width=500&height=510&name=Fotolia_127359744_Subscription_Monthly_M.jpg",
      title: "Charity Gala",
      description: "Annual fundraising event for children",
      date: "October 1, 2023",
      location: "Royal Palace, London",
    },
    {
      id: 6,
      url: "https://4.bp.blogspot.com/-tKrYXRpvlPM/VOeBl5e2DgI/AAAAAAABFxg/pNC_BzuEXNo/s1600/Celebrate%2BYour%2BDay%2C%2Bthe%2BVintage%2BWay%2C%2BBridal%2BFair%2B2015%2C%2BThe%2BSaujana%2BHotel%2BKL%2B9.jpg",
      title: "Fashion Show",
      description: "Spring collection showcase",
      date: "March 15, 2024",
      location: "Fashion Center, Paris",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      // ... existing code ...
      <div className="gallery-header">
        <h1>
          {"Our Event Gallery".split("").map((letter, index) => (
            <span key={index}>{letter === " " ? "\u00A0" : letter}</span>
          ))}
        </h1>
        <p>Showcasing our finest moments and successful events</p>
      </div>
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.url} alt={image.title} />
            <div className="image-overlay">
              <h3>{image.title}</h3>
              <p>{image.date}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="modal-details">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <div className="event-info">
                <p>
                  <strong>Date:</strong> {selectedImage.date}
                </p>
                <p>
                  <strong>Location:</strong> {selectedImage.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
