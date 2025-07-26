import React from 'react';
import "./Trust.css";

const Trust = () => {
  // Array of brand names
  const trustedBrands = [
    "Cyber Tech",
    "Gyantrix",
    "Kapil Farm",
    "Aravind Chit Funds",
    "Sushrita Properties",
    "Data Minds",
    // Duplicate for seamless looping
    "Cyber Tech",
    "Gyantrix",
    "Kapil Farm",
    "Aravind Chit Funds",
    "Sushrita Properties",
    "Data Minds"
  ];

  return (
    <div className="trust-section">
      <h2 className="trust-heading">Trusted By Industry Leaders</h2>
      <div className="trust-marquee-container">
        <div className="trust-marquee-track">
          {trustedBrands.map((brand, index) => (
            <div key={index} className="trust-brand-container">
              <span className="trust-brand-name">
                <span className="brand-name-inner">{brand}</span>
              </span>
              {index < trustedBrands.length/2 - 1 && <span className="trust-separator">✦</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trust;