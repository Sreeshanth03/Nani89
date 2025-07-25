import React from 'react';
import { Card } from 'react-bootstrap';
import './Business.css';

const Bussiness = () => {
  const cardData = [
    { emoji: '✅', text: '92% client retention across B2B partnerships' },
    { emoji: '⏱️', text: '35% faster deployment using DevOps best practices' },
    { emoji: '💡', text: '41% productivity increase through automation' },
    { emoji: '📉', text: '60% cost savings via AI-based process optimization' },
    { emoji: '🌍', text: 'Global delivery: Serving clients in 3 continents' },
    { emoji: '📊', text: '25+ Successful Projects – Proven track record across diverse industries' },
    { emoji: '🔄', text: 'End-to-End Services – From design to development to digital marketing' },
    { emoji: '🧠', text: 'AI + Data Science Expertise – Turning data into business value' },
    // { emoji: '👥', text: 'Dedicated Expert Teams – Personalized support at every stage of your journey' },
  ];

  return (
    <div id="home">
      <div className="section-header">
        {/* <h1>Trusted by Startups to Enterprises</h1>
        <h4>
          We’ve helped 25+ companies reduce costs, boost efficiency, and scale
          faster using data-driven systems.
        </h4> */}
      </div>

      <div className="stats-section">
        <h1>Business Stats That Matter</h1>
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card className="card" key={index} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <span className="emoji">{card.emoji}</span>
              {card.text}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bussiness;
