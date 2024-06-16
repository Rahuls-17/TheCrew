// ContactUs.jsx

import React, { useState } from 'react';
import Layout from '../components/Layout';
import "./ContactUs.css"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    contactPreference: 'email',
    purpose: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add your logic to submit the form data here
  };

  return (
    <Layout>
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <p>Fill out the form below to contact us.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Preferred Contact Method:
            <select name="contactPreference" value={formData.contactPreference} onChange={handleChange}>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </label>
          <label>
            Purpose of Contact:
            <textarea name="purpose" value={formData.purpose} onChange={handleChange}></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactUs;
