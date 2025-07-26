import React from "react";
import "./Industries.css";

const Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "Diagnostic AI, Telemedicine Apps",
      icon: "🏥",
      color: "linear-gradient(135deg, #3b82f6, #6366f1)",
      delay: "0.1s"
    },
    {
      title: "Logistics",
      description: "Route Optimization, Fleet Dashboards",
      icon: "🚚",
      color: "linear-gradient(135deg, #10b981, #059669)",
      delay: "0.2s"
    },
    {
      title: "Fintech",
      description: "KYC OCR, Fraud Detection",
      icon: "💳",
      color: "linear-gradient(135deg, #f59e0b, #d97706)",
      delay: "0.3s"
    },
    {
      title: "EdTech",
      description: "Adaptive Learning, Analytics",
      icon: "🎓",
      color: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      delay: "0.4s"
    },
    {
      title: "Government",
      description: "Citizen Portals, E-Governance",
      icon: "🏛️",
      color: "linear-gradient(135deg, #ec4899, #db2777)",
      delay: "0.5s"
    },
    {
      title: "BPO",
      description: "CRM Tools, Support Automation",
      icon: "📞",
      color: "linear-gradient(135deg, #06b6d4, #0284c7)",
      delay: "0.6s"
    },
    {
      title: "Ecommerce",
      description: "AI Shopping, Inventory Dashboards",
      icon: "🛒",
      color: "linear-gradient(135deg, #f43f5e, #be123c)",
      delay: "0.7s"
    },
    {
      title: "NGOs",
      description: "Awareness Portals, Donor Analytics",
      icon: "🤝",
      color: "linear-gradient(135deg, #84cc16, #65a30d)",
      delay: "0.8s"
    }
  ];

  return (
    <div className="industries-container" id="about">
      <h4 className="industries-title">Industries We Empower</h4>
      <div className="industries-grid">
        {industries.map((industry, index) => (
          <div 
            className="industry-card"
            key={index}
            style={{
              '--bg-color': industry.color,
              '--animation-delay': industry.delay
            }}
          >
            <div className="card-content-wrapper">
              <div className="card-icon">{industry.icon}</div>
              <div className="card-content">
                <h3 className="card-title">{industry.title}</h3>
                <p className="card-description">{industry.description}</p>
              </div>
            </div>
            <div className="card-wave"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
