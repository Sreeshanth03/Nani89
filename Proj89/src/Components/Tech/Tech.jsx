import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import "./Tech.css";

const Tech = () => {
  return (
    <div className="footer-container">
      {/* Marquee Effect */}
      <div className="marquee">
        <div className="marquee-content">
          <span>© 2025 Futureinvo. Smart Tech, Smarter Businesses. &nbsp;</span>
          <span>© 2025 Futureinvo. Smart Tech, Smarter Businesses. &nbsp;</span>
          <span>© 2025 Futureinvo. Smart Tech, Smarter Businesses. &nbsp;</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsapp className="icon whatsapp" />
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram className="icon instagram" />
        </a>
        <a href="mailto:your@email.com" className="social-icon">
          <FaEnvelope className="icon email" />
        </a>
      </div>
    </div>
  );
};

export default Tech;
