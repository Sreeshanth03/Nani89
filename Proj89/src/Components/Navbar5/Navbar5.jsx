import React, { useState } from 'react';
import { IoMenuSharp, IoClose } from "react-icons/io5";
import './Navbar5.css';
import { Button } from 'react-bootstrap';
const Navbar5 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src="../../../public/Logo/WhatsApp Image 2025-07-22 at 19.47.49_b9ab8e91.jpg"
            alt="Logo"
            className="logo-img"
          />
        </div>

        {/* Desktop Navigation Links */}
        {/* <div className="desktop-links" style={{justifyContent:'space-between'}}>
          <a href="#home" style={{textDecoration:"none", color:"white"}}>Home</a>
          <a href="#about" style={{textDecoration:"none", color:"white"}}>About</a>
          <a href="#contact" style={{textDecoration:"none", color:"white"}}>Contact</a>
        </div> */}
        <div className="desktop-links" style={{
  display: "flex",
  gap: "30px",
  marginRight: "60px",
  alignItems: "center",
  justifyContent:'flex-end'
}}>
  <a href="#home" style={{
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "6px"
  }}>Home</a>

  <a href="#about" style={{
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "6px"
  }}>About</a>

  <a href="#contact" style={{
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "6px"
  }}>Contact</a>
</div>


        {/* Mobile Menu Button - ALWAYS VISIBLE */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={30} /> : <IoMenuSharp size={30} />}
        </button>
      </div>

      {/* Mobile Menu Form */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="menu-content">
            <h2>Get it solutions for your Business</h2>
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
                <input type="text" placeholder="Enter your city" required />
              </div>
              {/* <div className="form-group">
                <label>Course*</label>
                <select required>
                  {/* <option value="">Select a course</option>
                  <option value="Full Stack Java">Full Stack Java</option> */}
                {/* </select> */}
              {/* </div> */} 
              <Button type="submit" className="submit-button">
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar5;