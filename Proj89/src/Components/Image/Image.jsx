import React from 'react';
import './Image.css';

const Image = () => {
  return (
    <div className="marquee-container">
      <h1 className="marquee-title">Trusted by Startups to Enterprises</h1>
      <h4 className="marquee-subtitle">
        We’ve helped 25+ companies reduce costs, boost efficiency, and scale
        faster using data-driven systems.
      </h4>
      {/* <h1 className="marquee-title">We Are Accredited By</h1> */}
      <br />
      <div className="marquee">
        {/* Logos */}
        <img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.36_f9d63355.jpg" alt="img2" />
        <img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_321dd395.jpg" alt="img3" />
        <img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_ac792bd6.jpg" alt="img4" />
        <img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_8888793e.jpg" alt="img1" />

        {/* Duplicate set for infinite scroll */}
        <img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.36_f9d63355.jpg" alt="img2" />
        <img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_321dd395.jpg" alt="img3" />
        <img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_ac792bd6.jpg" alt="img4" />
        <img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_8888793e.jpg" alt="img1" />
      </div>
    </div>
  );
};

export default Image;
