import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <div className="desktop-links">
          {/* Add desktop nav links here if needed */}
        </div>
      </div>

      <div className="navbar-flex">
        <div className="navbar-content">
          <div className="navbar-stars">★★★★★</div>
          <h1>
            <strong>Leading AI & IT Solutions for Seamless Digital Transformation</strong>
          </h1>
          <h4>FutureInvo Solutions - Shaping Your Digital Future with AI and IT Excellence</h4>
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
            {/* Add buttons here if needed */}
          </div>
        </div>
      </div>

      <div className="navbar-image-container">
        <img
    src="/portrait-young-professional-man-smiling_604472-8539.avif"
          alt="Professional"
        />
      </div>
    </div>
  );
};

export default Navbar;
