import React from "react";
import "./Coll.css";

const imagePaths = [
  "/Coll/WhatsApp Image 2025-07-26 at 16.16.59_97253857.jpg",
  "/Coll/WhatsApp Image 2025-07-26 at 16.16.59_9cbfb372.jpg",
  "/Coll/WhatsApp Image 2025-07-26 at 16.17.00_0b2c5689.jpg",
  "/Coll/WhatsApp Image 2025-07-26 at 16.17.00_42691947.jpg",
  "/Coll/WhatsApp Image 2025-07-26 at 16.17.01_b23dbd3f.jpg",
  "/Coll/WhatsApp Image 2025-07-26 at 16.17.01_f0b5281b.jpg",
  "/Coll/WhatsApp Image 2025-07-26 at 16.17.02_3b447984.jpg",
  "/Coll/WhatsApp Image 2025-07-26 at 16.17.03_3faf52d1.jpg",
  "/Coll/WhatsApp Image 2025-07-26 at 16.17.04_7f8e32c2.jpg"
];

const Coll = () => {
  // Duplicate the image list for seamless scrolling
  const fullImageList = [...imagePaths, ...imagePaths];

  return (
    <div className="collaboration-section">
      <h2>We Proudly Collaborate With</h2>
      <div className="marquee">
        <div className="marquee-content">
          {fullImageList.map((src, index) => (
            <img key={index} src={src} alt={`partner-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coll;
