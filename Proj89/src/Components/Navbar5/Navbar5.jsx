import React, { useState } from 'react';
import { IoMenuSharp, IoClose } from "react-icons/io5";
import './Navbar5.css';
import { Button } from 'react-bootstrap';

const Navbar5 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div >
      <div className="navbar-container" style={{display:"flex",justifyContent:'space-between'}}>
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src="../../../public/Logo/WhatsApp Image 2025-07-22 at 19.47.49_b9ab8e91.jpg"
            alt="Logo"
            className="logo-img"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="desktop-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={30} /> : <IoMenuSharp size={30} />}
        </button>
      </div>

      {/* Mobile Menu Form */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <button className="close-button" onClick={closeMenu}>
            <IoClose size={24} />
          </button>
          <h2>Get IT solutions for your Business</h2>
          <form>
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
              <input type="text" placeholder="Enter your city" />
            </div>
            <Button type="submit" className="submit-button">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar5;