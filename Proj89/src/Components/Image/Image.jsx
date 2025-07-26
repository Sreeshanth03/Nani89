import React from 'react';
import './Image.css';

const Image = () => {
  return (
    <div className="marquee-container">
         <h1 style={{color:"white"}}>Trusted by Startups to Enterprises</h1>
        <h4 style={{color:"white"}}>
          We’ve helped 25+ companies reduce costs, boost efficiency, and scale
          faster using data-driven systems.
        </h4>
           <h1 style={{color:"white"}}> We Are Accredited By</h1>
           <br></br>
      <div className="marquee">
     
      
  <img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.36_f9d63355.jpg" alt="img2" />
<img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_321dd395.jpg" alt="img3" />
<img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_ac792bd6.jpg" alt="img4" />
<img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_8888793e.jpg" alt="img1" />
        {/* Duplicate for smooth loop */}
      
  <img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.36_f9d63355.jpg" alt="img2" />
<img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_321dd395.jpg" alt="img3" />
<img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_ac792bd6.jpg" alt="img4" />
<img src="/Scroll/WhatsApp Image 2025-07-22 at 19.21.37_8888793e.jpg" alt="img1" />
      </div>
    </div>
  );
};

export default Image;

