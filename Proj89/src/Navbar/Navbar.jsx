import React from "react";
import "./Navbar.css";
import { Button } from "react-bootstrap";
import { IoMenuSharp } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div
        className="navbar-flex"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {/* Left: Logo */}
        <div className="navbar-logo">
          <img
            src="../../public/Logo/WhatsApp Image 2025-07-22 at 19.47.49_b9ab8e91.jpg"
            alt="logo"
            width={250}
            height={50}
          />
        </div>

        {/* Right: Content */}
        <div className="navbar-content" >
          <h1>AI-Driven Digital Transformation</h1>
          <h4>
            Harness AI, Data Science & Modern Software to future-proof your
            organization.
          </h4>
          <div className="navbar-buttons" >
            <Button variant="primary">Request Demo</Button>{" "}
            <Button variant="secondary">Explore Solutions</Button>{" "}
            <Button variant="success">Get a Quote</Button>
          </div>
       
        </div>
        {/* Menu bar */}
           <div style={{margin:"top"}}>
                <DropdownButton id="dropdown-basic-button" title={<IoMenuSharp size={40} />}     variant="light">
      <Dropdown.Item href="#/action-1">About</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Our Solutions</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Certified by </Dropdown.Item>
      <Dropdown.Item href="#/action-3">Contact Us </Dropdown.Item>
    </DropdownButton>
{/* <IoMenuSharp  size={60}/> */}


           </div>
      </div>
    </div>
  );
};

export default Navbar;
