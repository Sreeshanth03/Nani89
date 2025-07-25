import React from 'react';
import './PrivacyPolicy.css'; // Make sure to create this CSS file

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-section">
        <h2 className="privacy-heading">Privacy Policy</h2>
        <div className="privacy-content">
          <p>Futureinvo Technologies Pvt. Ltd. ("we," "us," or "our") is committed to protecting your privacy.</p>
          
          <ol className="privacy-list">
            <li>
              <strong>Information Collection</strong>
              <p>We collect personal details such as name, email, phone number during enrollment.</p>
            </li>
            
            <li>
              <strong>Use of Information</strong>
              <p>Used to contact students, provide materials, and issue certificates.</p>
            </li>
            
            <li>
              <strong>Information Sharing</strong>
              <p>We do not share personal data without consent unless legally required.</p>
            </li>
            
            <li>
              <strong>Cookies</strong>
              <p>We use cookies to enhance the user experience. You can disable them in your browser.</p>
            </li>
            
            <li>
              <strong>Data Retention</strong>
              <p>We retain personal data as long as needed for service provision or legal obligations.</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;