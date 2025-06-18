import { useState } from 'react';
import axios from 'axios';
import './RegisterTrainer.css';

function RegisterTrainer() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', platform: '', motivation: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/trainers/register', formData);
      alert('Trainer registered successfully!');
      setFormData({ name: '', email: '', phone: '', platform: '', motivation: '' });
    } catch (error) {
      alert('Registration failed!');
    }
  };

  return (
    <div className="register-container">
      <div className="form-box">
        <h2>Trainer Registration</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <select name="platform" value={formData.platform} onChange={handleChange} required>
            <option value="">Select Platform</option>
            <option value="Zoom">Zoom</option>
            <option value="Telegram">Telegram</option>
          </select>
          <textarea name="motivation" placeholder="Why do you want to join?" value={formData.motivation} onChange={handleChange} required />
          <button type="submit">🚀 Register Now</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterTrainer;
