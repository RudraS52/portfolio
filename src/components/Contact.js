import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_rwopncn', 'template_sqzuf8h', formData, 'ws-ZuRI-8BVSZz8oH')
      .then((result) => {
        console.log(result.text);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>📬 Contact Me</h2>
      <p>If you’re interested in working together or have any questions, feel free to reach out!</p>

      {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://github.com/RudraS52" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
       <a href="https://www.linkedin.com/in/web-developer-rp-singh/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
       </div>
    </section>
  );
};

export default Contact;
