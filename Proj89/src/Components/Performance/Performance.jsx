import React from 'react';
import "./Performance.css";

const Performance = () => {
  const metrics = [
    {
      icon: "⚙",
      text: "70+ tech modules delivered",
      color: "#3b82f6",
      delay: "0.1s"
    },
    {
      icon: "🌐",
      text: "35+ live platforms",
      color: "#10b981",
      delay: "0.2s"
    },
    {
      icon: "👨‍💻",
      text: "50+ engineers onboard",
      color: "#8b5cf6",
      delay: "0.3s"
    },
    {
      icon: "🧩",
      text: "20+ AI use cases",
      color: "#ec4899",
      delay: "0.4s"
    },
    {
      icon: "💰",
      text: "Projects from ₹1.5L to ₹1Cr+",
      color: "#f59e0b",
      delay: "0.5s"
    }
  ];

  return (
    <div className="performance-container">
      <h1 className="performance-title">Performance Snapshot</h1>
      <div className="performance-metrics">
        {metrics.map((metric, index) => (
          <div 
            className="metric-card"
            key={index}
            style={{
              '--card-color': metric.color,
              '--delay': metric.delay
            }}
          >
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-text">{metric.text}</div>
            <div className="metric-underline"></div>
            <div className="metric-particles">
              {[...Array(10)].map((_, i) => (
                <div className="particle" key={i}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
