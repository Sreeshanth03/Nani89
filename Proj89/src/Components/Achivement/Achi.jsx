import React from 'react';
import './Achi.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const achievements = [
  { emoji: "🧑‍🏫", number: 70, suffix: "+", label: "Tech Modules Delivered" },
  { emoji: "🤝", number: 35, suffix: "+", label: "Live PlatForms" },
  { emoji: "⭐", number: 50, suffix: "+", label: "Engineers OnBoard" },
  { emoji: "📘", number: 20, suffix: "+", label: "AI Use Cases" },
];

const Achi = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="achi-wrapper" ref={ref}>
      <div className="achi-stats-card">
        <div className="achi-header">
          <p className="achi-subtitle">ACHIEVEMENT</p>
          <h2 className="achi-title">We Are Increasing Business Success</h2>
        </div>

        <div className="achi-stats-container">
          {achievements.map((item, index) => (
            <div key={index} className="achi-stat">
              <div className="emoji">{item.emoji}</div>
              <div className="number">
                {inView ? (
                  <CountUp end={item.number} duration={2} separator="," />
                ) : (
                  "0"
                )}
                {item.suffix}
              </div>
              <div className="label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achi;
