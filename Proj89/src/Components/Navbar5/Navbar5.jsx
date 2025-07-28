import React, { useState } from 'react';
import { IoMenuSharp, IoClose } from "react-icons/io5";
import './Navbar5.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navbar5 = () => {
    const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setFormSubmitted(false); // reset thank-you on close
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  const HandleAbout=()=>{
     navigate('/About');
  }

  return (
    <div>
      <div className="navbar-container" style={{ display: "flex", justifyContent: 'space-between' }}>
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src="/Logo/Icon.jpg"
            alt="Logo"
            className="logo-img"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="desktop-links">
          <a href="#home" style={{color:"white"}}>Home</a>
          <a href="#about" style={{color:"white"}} onClick={HandleAbout}>About</a>
          <a href="#contact" style={{color:"white"}}>Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={10} /> : <IoMenuSharp size={20} />}
        </button>
      </div>

      {/* Mobile Menu Form */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <button className="close-button" onClick={closeMenu}>
            <IoClose size={24} />
          </button>

          <h4>
            Partner with us to unlock scalable, Efficient, and unstoppable digital transformation.
          </h4>

          {!formSubmitted ? (
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Name*</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input type="email" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label>Mobile No*</label>
                <input type="tel" placeholder="Enter your mobile number" required />
              </div>
              <div className="form-group">
                <label>Comment</label>
                <input type="text" placeholder="Comment" />
              </div>
              <Button type="submit" className="submit-button">
                Submit
              </Button>
            </form>
          ) : (
            <div className="thank-you-message">
              <h3>Thank you! Your response has been submitted.</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar5;
