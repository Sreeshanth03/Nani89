import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <div className="contact-details">
        <p className="contact-item phone">📞 Phone: <a href="tel:+917981107131">+91 79811 07131</a></p>
        <p className="contact-item email">✉️ Email: <a href="mailto:info.futureinvo@gmail.com">info.futureinvo@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Contact;

