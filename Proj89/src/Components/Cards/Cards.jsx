import React, { useState } from 'react';
import './Cards.css';
import { Card, Modal, Button } from 'react-bootstrap';

const services = [
  {
    icon: "🤖",
    title: "Artificial Intelligence (AI) Solutions",
    points: [
      "AI-powered Chatbots (LeadGen, HR, Customer Support)",
      "Image & Video Intelligence",
      "AI OCR & Document Intelligence"
    ]
  },
  {
    icon: "📊",
    title: "Data Science & Big Data Analytics",
    points: [
      "Data Warehousing & ETL Pipelines",
      "Real-Time Analytics Dashboards",
      "Predictive & Prescriptive Models"
    ]
  },
  {
    icon: "🧠",
    title: "Machine Learning & Deep Learning",
    points: [
      "Forecasting & Time-Series Analysis",
      "Fraud Detection",
      "Recommendation Systems"
    ]
  },
  {
    icon: "🌐",
    title: "Full-Stack Web & SaaS Development",
    points: [
      "Scalable SaaS Platforms (ERP, CRM, LMS)",
      "B2B/B2C Portals with Custom Roles",
      "API-first Backend (REST, GraphQL)"
    ]
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    points: [
      "Android, iOS, Cross-Platform (Flutter/React Native)",
      "AI-Integrated UX (Voice, Camera, Suggestions)",
      "Push Notification Systems"
    ]
  },
  {
    icon: "☁️",
    title: "Cloud Services & DevOps Automation",
    points: [
      "AWS | Azure | GCP Architecture",
      "Dockerization & Kubernetes",
      "Serverless (Lambda, Cloud Run)"
    ]
  },
  {
    icon: "🔐",
    title: "Cybersecurity & Compliance",
    points: [
      "Security Audits & Pen Testing",
      "Zero Trust Architecture",
      "End-to-End Encryption"
    ]
  },
  {
    icon: "🧠",
    title: "GPT/LLM-Based Services",
    points: [
      "Internal BI Assistants (GPT)",
      "Resume Screening & HR Automation",
      "E-commerce Copywriting Bots"
    ]
  },
  {
    icon: "🚀",
    title: "Digital Transformation Consulting",
    points: [
      "Legacy System Modernization",
      "Process Automation Roadmapping",
      "Change Management Strategy"
    ]
  }
];

const Cards = () => {
  const [show, setShow] = useState(false);
  const [activeTitle, setActiveTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (title) => {
    setActiveTitle(title);
    setShow(true);
  };

  return (
    <div className="cards-wrapper">
      <h1 className="cards-title">🔍 <strong>Solutions We Offer</strong></h1>
      <div className="cards-grid">
        {services.map((service, index) => (
          <Card
            key={index}
            className="cards-item"
            onClick={() => handleShow(service.title)}
          >
            <Card.Body>
              <span className="card-emoji">{service.icon}</span>
              <div className="card-title-text">{service.title}</div>
              <ul>
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Popup Form */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Lead Capture Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Interested in:</strong> {activeTitle}</p>
          <input type="text" placeholder="Your Name" className="form-control mb-2" />
          <input type="email" placeholder="Your Email" className="form-control mb-2" />
          <textarea placeholder="Your Message" className="form-control mb-2" rows="3"></textarea>
          <Button variant="primary" onClick={handleClose}>Submit</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Cards;
