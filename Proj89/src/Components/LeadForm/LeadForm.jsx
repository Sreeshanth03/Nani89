import React, { useState } from 'react';
import './LeadForm.css';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    name: '',
    email: '',
    phone: '',
    comments: '',
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cv') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Submit logic here
    alert('Application submitted successfully!');
  };

  return (
    <div className="lead-form-container">
      <h2>Apply for Job</h2>
      <form onSubmit={handleSubmit} className="lead-form">
        <label>
          Job You’re Looking For:
          <input type="text" name="jobTitle" required onChange={handleChange} />
        </label>

        <label>
          Name:
          <input type="text" name="name" required onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" required onChange={handleChange} />
        </label>

        <label>
          Phone:
          <input type="tel" name="phone" required onChange={handleChange} />
        </label>

        <label>
          Attach CV:
          <input type="file" name="cv" required accept=".pdf,.doc,.docx" onChange={handleChange} />
        </label>

        <label>
          Comments:
          <textarea name="comments" rows="4" required onChange={handleChange}></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeadForm;
