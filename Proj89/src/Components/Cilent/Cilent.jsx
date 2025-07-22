import React from 'react';
import "./Cilent.css"

const Client = () => {
  const testimonials = [
    {
      quote: "Futureinvo delivered not just code — they delivered insight, performance, and ROI.",
      author: "Shruti Mehta, CTO, Edulus",
      delay: "0.2s"
    },
    {
      quote: "Their AI capabilities changed the way we run analytics. More than a vendor — an innovation partner.",
      author: "Nikhil Jain, Head of Ops, RetailInsights",
      delay: "0.4s"
    }
  ];

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Client Testimonials</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div 
            className="testimonial-card"
            key={index}
            style={{ '--delay': testimonial.delay }}
          >
            <div className="quote-icon">“</div>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-author">{testimonial.author}</div>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
