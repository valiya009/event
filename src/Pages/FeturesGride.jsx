import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-header">
        <h2>What is Harmoni Event</h2>
        <div className="header-content">
          <h1>Your Event Will be Beyond your imagination</h1>
          <p>We go opinion trend me message as delight.Whole front do of Plate heard oh ought. His defective nor convinced residence own.</p>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Chatbots</h3>
          <p>We so opinion friend me message as delight. Whole front do of Plate heard oh ought.</p>
        </div>

        <div className="feature-card">
          <h3>Knowledgebase</h3>
          <p>At jointure ladyship an insisted so humanity he.Friendly bachelor entrance to on by.As put impossible own apartments.</p>
        </div>

        <div className="feature-card">
          <h3>Education</h3>
          <p>At jointure ladyship an insisted so humanity he.Friendly bachelor entrance to on by.As put impossible own apartments.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;