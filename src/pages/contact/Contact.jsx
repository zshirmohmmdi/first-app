import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setFormData(prevState => {
      if (fieldName === 'name') {
        return { ...prevState, name: value };
      } else if (fieldName === 'email') {
        return { ...prevState, email: value };
      } else if (fieldName === 'message') {
        return { ...prevState, message: value };
      }
      return prevState;
    });
  };

  return (
    <div className='contact-container'>
      <div className="contact-content">
        <h1 className='contact-title'>Contact Me</h1>
        <p className='contact-text'>Let's connect and create something amazing together!</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className='contact-input'
              id="name"
              name="name"
              value={formData.name}
              placeholder='Enter your first name and last name'
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className='contact-input'
              id="email"
              name="email"
              value={formData.email}
              placeholder='Enter your email'
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className='contact-input'
              id="message"
              name="message"
              value={formData.message}
              placeholder='Enter your message'
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact; 