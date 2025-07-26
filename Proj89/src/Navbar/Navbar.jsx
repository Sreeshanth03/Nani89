import React from "react";
import "./Navbar.css";
import { Button } from "react-bootstrap";
import { IoMenuSharp } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-flex">
        <div className="navbar-content">
          <h1>"Leading AI & IT Solutions for Seamless Digital Transformation"</h1>
          {/* <h1>AI-Driven Digital Transformation</h1> */}
<h4
  style={{
    fontSize: "0.95rem",         // Smaller text
    lineHeight: "1.6",           // Better spacing between lines
    color: "#e0e0e0",            // Light gray for readability
    maxWidth: "850px",           // Restrict width
    margin: "0 auto 2rem",       // Centered with bottom spacing
    textAlign: "center",         // Center-align text
    padding: "0 1rem"            // Horizontal padding for mobile
  }}
>
  Harness AI, Data Science & Modern Software to future-proof your
  organization. At Futureinov Solutions, we empower businesses to grow
  and succeed in the digital world through smart, AI-driven IT
  solutions. Whether it’s building intelligent websites, designing
  stunning user interfaces, creating powerful mobile apps, or
  delivering impactful digital marketing and training—we do it all
  with innovation at the core. Our mission is to turn your ideas into
  real, results-driven digital experiences. We help future-proof your
  business and drive meaningful transformation. With a team of
  experienced professionals, we’re here to guide your journey every
  step of the way—making your digital goals not just possible, but
  unstoppable.
</h4>

          <div className="navbar-buttons">
            <Button variant="primary">Request Demo</Button>{" "}
            <Button variant="secondary">Explore Solutions</Button>{" "}
            <Button variant="success">Get a Quote</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;