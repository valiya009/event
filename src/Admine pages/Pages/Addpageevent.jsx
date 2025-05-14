import React, { useState } from 'react';
import './PostEvent.css';

const PostEvent = () => {
  const [formData, setFormData] = useState({
    image: null,
    title: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    price: '',
    category: '',
    location: '',
    description: ''
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0]; 
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="post-event-container">
      <div className="post-event-header">
        <i className="fas fa-lock"></i>
        <h2>Post Event</h2>
      </div>

      <form onSubmit={handleSubmit} className="post-event-form">
        <div className="file-upload">
          <input
            type="file"
            id="eventImage"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input"
            placeholder="title"
          />
          <label htmlFor="eventImage" className="file-label">
            <span>Choose file</span>
            <span className="file-name">
              {formData.image ? formData.image.name : "No file chosen"}
            </span>
          </label>
          <button type="button" className="choose-pic-btn">
            CHOOSE PIC
          </button>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="placeholder"
            placeholder="Title*"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) =>
                setFormData({ ...formData, startDate: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              value={formData.endDate}
              onChange={(e) =>
                setFormData({ ...formData, endDate: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="time"
              value={formData.startTime}
              onChange={(e) =>
                setFormData({ ...formData, startTime: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              value={formData.endTime}
              onChange={(e) =>
                setFormData({ ...formData, endTime: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="">Select Category</option>
            <option value="sports">Sports</option>
            <option value="music">Music</option>
            <option value="cultural">Cultural</option>
          </select>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostEvent;