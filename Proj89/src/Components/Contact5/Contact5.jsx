import React from 'react';
import "./Contact5.css";

const Contact5 = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Terms & Conditions Section */}
        <div className="policy-section terms-section">
          <h2 className="policy-heading">Terms & Conditions</h2>
          <div className="policy-content">
            <p>By accessing and using this website, you agree to comply with and be bound by the following terms and conditions without limitation or qualification.</p>
            
            <ol className="policy-list">
              <li>
                <strong>Ownership of Content</strong>
                <p>All content on this website is the property of Futureinvo Technologies Pvt. Ltd. or its content providers.</p>
              </li>
              
              <li>
                <strong>Intellectual Property</strong>
                <p>Nothing on this website grants any license or right to use any intellectual property of Futureinvo Technologies or third parties without written permission.</p>
              </li>
              
              <li>
                <strong>Use of Site Information</strong>
                <p>The information on this site is for general purposes only and is used at your own risk.</p>
              </li>
              
              <li>
                <strong>Third-Party Links</strong>
                <p>Futureinvo Technologies is not responsible for the content of linked third-party websites.</p>
              </li>
              
              <li>
                <strong>Disclaimer</strong>
                <p>This site is provided "as is" without any warranties. Futureinvo Technologies is not liable for any damages related to site use.</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Privacy Policy Section */}
        {/* <div className="policy-section privacy-section">
          <h2 className="policy-heading">Privacy Policy</h2>
          <div className="policy-content">
            <p>Futureinvo Technologies Pvt. Ltd. ("we," "us," or "our") is committed to protecting your privacy.</p>
            
            <ol className="policy-list">
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
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="contact-info">
          <strong>Contact Us:</strong> info.futureinvo@gmail.com
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Futureinvo Technologies Pvt. Ltd. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Contact5;