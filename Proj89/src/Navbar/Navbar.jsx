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
          <h1>AI-Driven Digital Transformation</h1>
          <h4>
            Harness AI, Data Science & Modern Software to future-proof your
            organization.
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