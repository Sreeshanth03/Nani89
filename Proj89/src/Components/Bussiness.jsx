import React from 'react'
import { Card } from 'react-bootstrap'
import "./Business.css"

const Bussiness = () => {
  return (
    <div >
      {/* Trusted by Startups to Enterprises */}
      <div >

        <h1>Trusted by Startups to Enterprises</h1>
        <h4>We’ve helped 25+ companies reduce costs, boost efficiency, and scale faster using data-driven systems.</h4>
      </div>

      {/* Business Stats That Matter */}
      <div>
        <h1>Business Stats That Matter</h1>
        <div className="card-container">
          <Card>✅ 92% client retention across B2B partnerships</Card>
          <Card>⏱ 35% faster deployment using DevOps best practices</Card>
          <Card>💡 41% productivity increase through automation</Card>
          <Card>📉 60% cost savings via AI-based process optimization</Card>
          <Card>🌍 Global delivery: Serving clients in 3 continents</Card>
        </div>
      </div>

      {/* Solutions We Offer */}
      <div  >
        <h1>🔍 Solutions We Offer</h1>
        <div>
        <div className="card-container" >
          <Card>
            <h1>🤖 Artificial Intelligence (AI) Solutions</h1>
            <ul>
              <li>AI-powered Chatbots (LeadGen, HR, Customer Support)</li>
              <li>Image & Video Intelligence</li>
              <li>AI OCR & Document Intelligence</li>
              <li>Conversational AI with GPT/LangChain</li>
              <li>Intelligent Process Automation (IPA)</li>
            </ul>
            <h4>💼 Use Case: Built a chatbot for a financial firm, handling 80% of customer queries — reducing support tickets by 65%.</h4>
          </Card>

          <Card>
            <h1>📊 Data Science & Big Data Analytics</h1>
            <ul>
              <li>Data Warehousing & ETL Pipelines</li>
              <li>Real-Time Analytics Dashboards</li>
              <li>Predictive & Prescriptive Models</li>
              <li>Sentiment & Behavior Analytics</li>
              <li>Customer Segmentation Engines</li>
            </ul>
            <h4>💼 Use Case: Helped reduce customer attrition by 38% using churn prediction model.</h4>
          </Card>

          <Card>
            <h1>🧠 Machine Learning & Deep Learning</h1>
            <ul>
              <li>Forecasting & Time-Series Analysis</li>
              <li>Fraud Detection</li>
              <li>Recommendation Systems</li>
              <li>Computer Vision & OCR</li>
              <li>NLP (Summarization, Translation, Semantic Search)</li>
            </ul>
            <h4>💼 Use Case: Built an ML recommender system increasing CTR by 28% for a shopping app.</h4>
          </Card>

          <Card>
            <h1>🌐 Full-Stack Web & SaaS Development</h1>
            <ul>
              <li>Scalable SaaS Platforms (ERP, CRM, LMS)</li>
              <li>B2B/B2C Portals with Custom Roles</li>
              <li>API-first Backend (REST, GraphQL)</li>
              <li>Admin & Analytics Panels</li>
              <li>DevSecOps Integration</li>
            </ul>
            <h4>💼 Use Case: Delivered a React + Node CRM that saved 200+ hours/month for a logistics firm.</h4>
          </Card>

          <Card>
            <h1>📱 Mobile App Development</h1>
            <ul>
              <li>Android, iOS, Cross-Platform (Flutter/React Native)</li>
              <li>AI-Integrated UX (Voice, Camera, Suggestions)</li>
              <li>Push Notification Systems</li>
              <li>Offline Mode + Cloud Sync</li>
              <li>Secured Mobile Payments</li>
            </ul>
            <h4>💼 Use Case: Built AI-based health app for remote villages with poor internet access.</h4>
          </Card>

          <Card>
            <h1>☁ Cloud Services & DevOps Automation</h1>
            <ul>
              <li>AWS | Azure | GCP Architecture</li>
              <li>Dockerization & Kubernetes</li>
              <li>Serverless (Lambda, Cloud Run)</li>
              <li>CI/CD & GitOps</li>
              <li>Infrastructure as Code (Terraform)</li>
            </ul>
            <h4>💼 Use Case: Reduced cloud bill by 52% using AWS Spot Instance automation.</h4>
          </Card>

          <Card>
            <h1>🔐 Cybersecurity & Compliance</h1>
            <ul>
              <li>Security Audits & Pen Testing</li>
              <li>Zero Trust Architecture</li>
              <li>End-to-End Encryption</li>
              <li>GDPR, HIPAA, ISO Compliance</li>
              <li>Identity & Access Management (IAM)</li>
            </ul>
            <h4>💼 Use Case: Secured fintech app with OAuth 2.0, 2FA & encryption — passed audit in 2 weeks.</h4>
          </Card>

          <Card>
            <h1>🧠 GPT/LLM-Based Services</h1>
            <ul>
              <li>Internal BI Assistants (GPT)</li>
              <li>Resume Screening & HR Automation</li>
              <li>E-commerce Copywriting Bots</li>
              <li>Prompt Engineering & Fine-Tuning</li>
              <li>RAG from Legal/Private Docs</li>
            </ul>
            <h4>💼 Use Case: Trained GPT bot for law firm that auto-summarizes contracts — saving 12+ hours/week.</h4>
          </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bussiness
