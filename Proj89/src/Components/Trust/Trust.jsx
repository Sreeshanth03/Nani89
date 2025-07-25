import React from 'react';
import "./Trust.css";

const Trust = () => {
  // Array of image paths for easier management
  const trustLogos = [
    "../../../public/Trust/WhatsApp Image 2025-07-24 at 11.35.22_1f8acd88.jpg",
    "../../../public/Trust/WhatsApp Image 2025-07-24 at 11.35.22_31988384.jpg",
    "../../../public/Trust/WhatsApp Image 2025-07-24 at 11.35.22_d45fd779.jpg",
    "../../../public/Trust/WhatsApp Image 2025-07-24 at 11.35.22_fa79449d.jpg",
    // Duplicate for seamless looping
    "../../../public/Trust/WhatsApp Image 2025-07-24 at 11.35.22_1f8acd88.jpg",
    "../../../public/Trust/WhatsApp Image 2025-07-24 at 11.35.22_31988384.jpg",
    "../../../public/Trust/WhatsApp Image 2025-07-24 at 11.35.22_d45fd779.jpg",
    "../../../public/Trust/WhatsApp Image 2025-07-24 at 11.35.22_fa79449d.jpg",
  ];

  return (
    <div className="trust-section">
      <h2 className="trust-heading">Brands That Trust Us</h2>
      <div className="trust-marquee-container">
        <div className="trust-marquee-track">
          {trustLogos.map((logo, index) => (
            <div key={index} className="trust-logo-container">
              <img 
                src={logo} 
                alt="Trusted brand logo" 
                className="trust-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trust;