// pages/ProjectRequest.js
import { useState } from 'react';
import axios from 'axios';
import './ProjectRequest.css';

function ProjectRequest() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', projectType: '', details: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/projects/request', formData);
      alert('Your request has been submitted!');
      setFormData({ name: '', email: '', company: '', projectType: '', details: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to submit request.');
    }
  };

  return (
    <div className="request-container">
      <div className="form-box">
        <h2>📩 Project Request Form</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
          <select name="projectType" value={formData.projectType} onChange={handleChange} required>
            <option value="">Select Project Type</option>
            <option value="Website">Website</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Other">Other</option>
          </select>
          <textarea name="details" placeholder="Project description..." value={formData.details} onChange={handleChange} required />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default ProjectRequest;
