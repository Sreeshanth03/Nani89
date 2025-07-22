import React from 'react';
import "./Vision.css";

const Vision = () => {
  return (
    <div className="vision-container">
      <h1 className="vision-title">🎯 Vision & Mission</h1>
      
      <div className="vision-card animate-fade-in">
        <h2 className="vision-heading">Vision</h2>
        <p className="vision-text animate-slide-up">
          To become the go-to innovation partner for forward-thinking organizations 
          seeking AI-first digital transformation.
        </p>
      </div>
      
      <div className="mission-section">
        <h2 className="mission-heading animate-fade-in">Mission</h2>
        
        <ul className="mission-list">
          <li className="mission-item animate-slide-up" style={{ '--delay': '0.1s' }}>
            Deliver high-impact, scalable software through innovation
          </li>
          <li className="mission-item animate-slide-up" style={{ '--delay': '0.2s' }}>
            Empower enterprises to make better decisions with data
          </li>
          <li className="mission-item animate-slide-up" style={{ '--delay': '0.3s' }}>
            Build ethical and responsible AI tools for real-world impact
          </li>
          <li className="mission-item animate-slide-up" style={{ '--delay': '0.4s' }}>
            Bridge human and machine collaboration with design + logic
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Vision;