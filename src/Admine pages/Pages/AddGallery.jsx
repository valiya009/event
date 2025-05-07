import React, { useState } from 'react';
import './AddGallery.css';

const AddGallery = () => {
  const [formData, setFormData] = useState({
    image: null,
    galleryName: ''
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <i className="fas fa-lock"></i>
        <h2>Add Gallery</h2>
      </div>

      <form onSubmit={handleSubmit} className="gallery-form">
        <div className="file-upload">
          <input
            type="file"
            id="galleryImage"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input"
          />
          <label htmlFor="galleryImage" className="file-label">
            <span>Choose file</span>
            <span className="file-name">
              {formData.image ? formData.image.name : 'No file chosen'}
            </span>
          </label>
          <button type="button" className="choose-pic-btn">CHOOSE PIC</button>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Gallery name*"
            value={formData.galleryName}
            onChange={(e) => setFormData({ ...formData, galleryName: e.target.value })}
          />
        </div>

        <button type="submit" className="post-btn">POST</button>
      </form>
    </div>
  );
};

export default AddGallery;