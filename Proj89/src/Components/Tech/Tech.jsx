import React from 'react';
import {
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Tech.css';

const Tech = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => navigate('/About');
  const handleJobClick = () => navigate('/LeadForm');
  const handleContactClick = () => navigate('/Contact');
  const handleTermsClick = () => navigate('/contact5');
  const handlePrivacyClick = () => navigate('/privacy');

  return (
    <div className="footer-container" id="contact">
      {/* Top Header */}
      <div className="footer-top-header">
        <div className="footer-address">
          📍 <strong>Address:</strong> Hitec City, Hyderabad.
        </div>
        <div className="footer-phone">
          📞 <strong>Phone:</strong> +91 79811 07131
        </div>
        <div className="footer-email">
          ✉️ <strong>Email:</strong> info@futureinvo.com
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        {/* Left Column */}
        <div className="footer-left">
          <img
            src="/Icons/WhatsApp Image 2025-07-22 at 19.47.48_1dae13e4.jpg"
            alt="Future Invo Logo"
            className="footer-logo"
            width={800}
            height={800}
          />
          <p className="footer-tagline">
            Join us to gain industry insights and hands-on experience for success in the digital world.
          </p>
          <div className="footer-social">
            <p>Follow Us</p>
            <a href="#" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="social-icon" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>

        {/* Middle Column with structured layout */}
        <div className="footer-middle">
          <div className="address-block">
            <h4 style={{ marginLeft: "-120px" }}>Registered Address</h4>
            <p>3-45/1 Ashoka Towers, 16th Floor,<br />Nanakramguda, Financial District, Hyderabad</p>
            <h4 style={{ marginLeft: "-120px" }}>Operational Address</h4>
            <p>4th Floor, Cyber Heights,<br />Hitec City, Hyderabad</p>
          </div>
          <div className="address-block">
            <h4 style={{ marginLeft: "-220px" }}>Branches</h4>
            <p>Siddipet<br />Vizianagaram</p>
            <h4 style={{ marginLeft: "-155px" }}>Upcoming Branches</h4>
            <p>Bangalore<br />Vizag<br />Rajahmundry</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-right">
          <h4 style={{ marginLeft: "-220px" }}>QUICK LINKS</h4>
          <ul className="quick-links">
            <li onClick={handleAboutClick}>About us</li>
            <li onClick={handleJobClick}>Apply for Job</li>
            <li onClick={handleContactClick}>Contact us</li>
            <li onClick={handleTermsClick}>Terms & Conditions</li>
            <li onClick={handlePrivacyClick}>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Futureinvo Technologies Pvt. Ltd. | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Tech;
