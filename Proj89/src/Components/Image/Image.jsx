import React from 'react';
import './Image.css';

const Image = () => {
  return (
    <div className="marquee-container">
           <h1> We Are Accredited By</h1>
           <br></br>
      <div className="marquee">
     
        <img src="/Logo/WhatsApp Image 2025-07-22 at 19.21.36_f9d63355.jpg" alt="img1" />
        <img src="/Logo/WhatsApp Image 2025-07-22 at 19.21.37_321dd395.jpg" alt="img2" />
        <img src="/Logo/WhatsApp Image 2025-07-22 at 19.21.37_8888793e.jpg" alt="img3" />
        <img src="/Logo/WhatsApp Image 2025-07-22 at 19.21.37_ac792bd6.jpg" alt="img4" />
        {/* Duplicate for smooth loop */}
        <img src="/Logo/WhatsApp Image 2025-07-22 at 19.21.36_f9d63355.jpg" alt="img1-dup" />
        <img src="/Logo/WhatsApp Image 2025-07-22 at 19.21.37_321dd395.jpg" alt="img2-dup" />
        <img src="/Logo/WhatsApp Image 2025-07-22 at 19.21.37_8888793e.jpg" alt="img3-dup" />
        <img src="/Logo/WhatsApp Image 2025-07-22 at 19.21.37_ac792bd6.jpg" alt="img4-dup" />
      </div>
    </div>
  );
};

export default Image;

