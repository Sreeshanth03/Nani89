  import React from 'react';
  import { FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
  import { useNavigate } from 'react-router-dom';
  import "./Tech.css";

  const Tech = () => {
    const navigate = useNavigate();

    const handleTermsClick = () => {
      navigate('/contact5');
    };

    const handlePrivacyClick = () => {
      navigate('/privacy');
    };

    return (
      <div className="footer-container" id='contact'>
        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <h3>70+</h3>
              <p>tech modules delivered</p>
            </div>
            <div className="stat-item">
              <h3>35+</h3>
              <p>live platforms</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>engineers onboard</p>
            </div>
            <div className="stat-item">
              <h3>20+</h3>
              <p>AI use cases</p>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="address-section">
          <div className="address-container">
            <div className="address-item">
              <h4>Registration address</h4>
              <p>3-45/1 Ashoka Towers, 16th Floor, Nanakramguda, Financial District, Hyderabad</p>
            </div>
            <div className="address-item">
              <h4>Operation address</h4>
              <p>4th Floor, Cyber Heights, Hitec City, Hyderabad</p>
            </div>
            <div className="address-item">
              <h4>Branches</h4>
              <pre></pre>
              <p>Siddipet, Vizianagaram</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom - single row layout */}
        <div className="footer-bottom">
          {/* Copyright - left side */}
          <div className="copyright-info">
            <p>© 2025 Futureinvo Technologies Pvt. Ltd. All Rights Reserved.</p>
          </div>

          {/* Policy Links - middle */}
          <div className="policy-links">
            <a href="#contact">Contact us : +917386879818</a>
            <span className="divider">|</span>
            <a href="#terms" onClick={handleTermsClick}>T&C</a>
            <span className="divider">|</span>
            <a href="#privacy" onClick={handlePrivacyClick}>Privacy policy</a>
          </div>

          {/* Social Links - right side */}
          <div className="social-links">
            <a href="https://instagram.com/futureinvo" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram className="icon instagram" />
            </a>
            <a href="https://linkedin.com/company/futureinvo" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin className="icon linkedin" />
            </a>
            <a href="https://twitter.com/futureinvo" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter className="icon twitter" />
            </a>
            <a href="https://wa.me/917386879818" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaWhatsapp className="icon whatsapp" />
            </a>
            <a href="mailto:info.futureinvo@gmail.com" className="social-icon">
              <FaEnvelope className="icon email" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default Tech;