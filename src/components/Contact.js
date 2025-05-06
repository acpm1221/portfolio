import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = ({ id }) => {
  return (
    <section id={id} className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        <div className="divider"></div>
        
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-details">
              <h3>Location</h3>
              <p>Surya Nagar</p>
              <p>Ghaziabad, Uttar Pradesh, India</p>
              <p>Pincode: 201011</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-details">
              <h3>Phone</h3>
              <p>+91-8887985516</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>anmol.kumar.fsd@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="socials">
          <h3 className="socials-title">Connect With Me</h3>
          <p className="socials-subtitle">Find me on these platforms</p>
          
          <div className="social-icons">
            <a 
              href="https://github.com/acpm1221" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <FaGithub className="social-icon" />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/anmol-kumar-298769191/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
