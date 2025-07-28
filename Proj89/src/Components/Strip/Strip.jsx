import React from 'react';
import './Strip.css';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Strip = () => {
  return (
    <div className="strip-container">
      <div className="left-section">
        <span><FaPhoneAlt className="icon" /> +91 79811 07131</span>
        <span><FaEnvelope className="icon" /> info.futureinvo@gmail.com</span>
      </div>
      <div className="right-section">
        <span>Follow Us:</span>
        <a 
          href="https://wa.me/917981107131" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Strip;
