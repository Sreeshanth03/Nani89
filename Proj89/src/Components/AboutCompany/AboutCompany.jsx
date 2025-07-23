import React from 'react'
import "./AboutCompany.css"
import { Form, Button } from 'react-bootstrap';

const AboutCompany = () => {
  return (
    <div className="about-company-container">
      <div className="company-content">
        <h2>"Leading AI & IT Solutions for Seamless Digital Transformation"</h2>
        <h5>Futureinov Solutions – Shaping Your Digital Future with AI and IT Excellence</h5>

        <p>
          At Futureinov Solutions, we empower businesses to grow and succeed in the digital world through smart,
          AI-driven IT solutions. Whether it's building intelligent websites, designing stunning user interfaces,
          creating powerful mobile apps, or delivering impactful digital marketing and training—we do it all
          with innovation at the core. Our mission is to turn your ideas into real, results-driven digital experiences.
          By harnessing the power of artificial intelligence, data science, and modern software, we help future-proof
          your business and drive meaningful transformation. With a team of experienced professionals, we're here
          to guide your journey every step of the way—making your digital goals not just possible, but unstoppable.
        </p>
      </div>
      
      <div className="contact-form">
        <h3>Contact Us</h3>
        <Form>
          {/* Name */}
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label className="form-label">Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" className="form-control" />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="form-label">Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" className="form-control" />
          </Form.Group>

          {/* Gender */}
          <Form.Group className="mb-3" controlId="formGender">
            <Form.Label className="form-label">Gender</Form.Label>
            <Form.Select className="form-select">
              <option>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>

          {/* Country */}
          <Form.Group className="mb-3" controlId="formCountry">
            <Form.Label className="form-label">Country</Form.Label>
            <Form.Control type="text" placeholder="Enter your country" className="form-control" />
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="submit-btn w-100">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default AboutCompany