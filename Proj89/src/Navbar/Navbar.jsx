import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <div className="desktop-links">
  
        </div>
      </div>

      <div className="navbar-flex">
        <div className="navbar-content">
          <div className="navbar-stars">★★★★★</div>
          <h1>
            <strong>Leading AI & IT Solutions for Seamless Digital Transformation</strong>
          </h1>
          <h4>
            Harness AI, Data Science & Modern Software to future-proof your
            organization. At Futureinov Solutions, we empower businesses to grow
            and succeed in the digital world through smart, AI-driven IT
            solutions. Whether it’s building intelligent websites, designing
            stunning user interfaces, creating powerful mobile apps, or
            delivering impactful digital marketing and training we do it all
            with innovation at the core.
          </h4>

          <div className="navbar-buttons">
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
