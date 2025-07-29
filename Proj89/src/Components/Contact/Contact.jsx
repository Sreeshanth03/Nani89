import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace with actual backend logic
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>

      <div className="contact-wrapper">
        {/* Contact Info (Left) */}
        <div className="contact-info">
          <p className="contact-item phone">
            📞 Phone: <a href="tel:+917981107131">+91 79811 07131</a>
          </p>
          <p className="contact-item email">
            ✉️ Email: <a href="mailto:info.futureinvo@gmail.com">info.futureinvo@gmail.com</a>
          </p>
        </div>

        {/* Lead Form (Right) */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
          {submitted && <p className="thank-you-message">Thank you! We'll get back to you.</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
