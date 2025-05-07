import React, { useState } from 'react';
import './PostCategory.css';

export default function AdminCategoryPage() {
  const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState(null);

  const categories = [
    { id: 1, name: 'Cricket', image: 'https://via.placeholder.com/50?text=Cricket' },
    { id: 2, name: 'Office Party', image: 'https://via.placeholder.com/50?text=Office' },
    { id: 3, name: 'December events', image: 'https://via.placeholder.com/50?text=Dec' },
  ];

  return (
    <div className="admin-container">
      {/* Post Category Form */}
      <div className="form-section">
        <div className="form-title">
          <span role="img" aria-label="lock">🔒</span> Post Category
        </div>
        <div className="form-controls">
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button className="choose-btn">CHOOSE PIC</button>
        </div>
        <input
          type="text"
          placeholder="Category name*"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="category-input"
        />
        <button className="post-btn">POST</button>
      </div>

      {/* Category List */}
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>image</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, idx) => (
              <tr key={cat.id}>
                <td>{idx + 1}</td>
                <td><img src={cat.image} alt={cat.name} className="category-img" /></td>
                <td>{cat.name}</td>
                <td className="delete-icon">🗑️</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}