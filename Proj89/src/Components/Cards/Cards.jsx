import React from 'react';
import './Cards.css';
import { Card } from 'react-bootstrap';

const Cards = () => {
  return (
    <div className="cards-wrapper">
      <h1 className="cards-title">🔍 Solutions We Offer</h1>
      <div className="cards-grid">

        {/* 1. AI Solutions */}
        <Card className="cards-item">
          <Card.Body>
            <Card.Title>🤖 Artificial Intelligence (AI) Solutions</Card.Title>
            <ul>
              <li>AI-powered Chatbots (LeadGen, HR, Customer Support)</li>
              <li>Image & Video Intelligence</li>
              <li>AI OCR & Document Intelligence</li>
           
            </ul>
         
          </Card.Body>
        </Card>

        {/* 2. Data Science */}
        <Card className="cards-item">
          <Card.Body>
            <Card.Title>📊 Data Science & Big Data Analytics</Card.Title>
            <ul>
              <li>Data Warehousing & ETL Pipelines</li>
              <li>Real-Time Analytics Dashboards</li>
              <li>Predictive & Prescriptive Models</li>
        </ul>
          </Card.Body>
        </Card>

        {/* 3. Machine Learning */}
        <Card className="cards-item">
          <Card.Body>
            <Card.Title>🧠 Machine Learning & Deep Learning</Card.Title>
            <ul>
              <li>Forecasting & Time-Series Analysis</li>
              <li>Fraud Detection</li>
              <li>Recommendation Systems</li>
         
            </ul>
          
          </Card.Body>
        </Card>

        {/* 4. Full-Stack Web */}
        <Card className="cards-item">
          <Card.Body>
            <Card.Title>🌐 Full-Stack Web & SaaS Development</Card.Title>
            <ul>
              <li>Scalable SaaS Platforms (ERP, CRM, LMS)</li>
              <li>B2B/B2C Portals with Custom Roles</li>
              <li>API-first Backend (REST, GraphQL)</li>
         
            </ul>
         
          </Card.Body>
        </Card>

        {/* 5. Mobile App Development */}
        <Card className="cards-item">
          <Card.Body>
            <Card.Title>📱 Mobile App Development</Card.Title>
            <ul>
              <li>Android, iOS, Cross-Platform (Flutter/React Native)</li>
              <li>AI-Integrated UX (Voice, Camera, Suggestions)</li>
              <li>Push Notification Systems</li>
        
            </ul>
         
          </Card.Body>
        </Card>

        {/* 6. Cloud & DevOps */}
        <Card className="cards-item">
          <Card.Body>
            <Card.Title>☁ Cloud Services & DevOps Automation</Card.Title>
            <ul>
              <li>AWS | Azure | GCP Architecture</li>
              <li>Dockerization & Kubernetes</li>
              <li>Serverless (Lambda, Cloud Run)</li>
      
            </ul>
        
          </Card.Body>
        </Card>

        {/* 7. Cybersecurity */}
        <Card className="cards-item">
          <Card.Body>
            <Card.Title>🔐 Cybersecurity & Compliance</Card.Title>
            <ul>
              <li>Security Audits & Pen Testing</li>
              <li>Zero Trust Architecture</li>
              <li>End-to-End Encryption</li>
           
            </ul>
         
          </Card.Body>
        </Card>

        {/* 8. GPT/LLM Services */}
        <Card className="cards-item">
          <Card.Body>
            <Card.Title>🧠 GPT/LLM-Based Services</Card.Title>
            <ul>
              <li>Internal BI Assistants (GPT)</li>
              <li>Resume Screening & HR Automation</li>
              <li>E-commerce Copywriting Bots</li>
       
            </ul>
  
          </Card.Body>
        </Card>
        <Card className="cards-item">
  <Card.Body>
    <Card.Title>🚀 Digital Transformation Consulting</Card.Title>
    <ul>
      <li>Legacy System Modernization</li>
      <li>Process Automation Roadmapping</li>
      <li>Change Management Strategy</li>
    
    </ul>
  </Card.Body>
</Card>

      </div>
    </div>
  );
};

export default Cards;
