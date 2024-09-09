import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-nav">
      <div className="footer-social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
        <div className="footer-nav-links">
          <ul className="footer-nav-list">
            <li><Link to="/connectnow">Sitemap</Link></li>
            <li><Link to="/">Terms</Link></li>
            <li><Link to="/">Privacy Notice</Link></li>  
            <li><Link to="/">Cookie Notice</Link></li>
            <li>©2024 Nimir Corp, All Rights Reserved</li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <h4>Service</h4>
        <ul className="footer-list">
          <li><Link to="/services/EAI">Enterprise AI Consulting Services</Link></li>
          <li><Link to="/services/MLS">Machine Learning Solutions</Link></li>
          <li><Link to="/services/GAS">Generative AI Services</Link></li>
          <li><Link to="/services/CVS">Computer Vision Services</Link></li>
          <li><Link to="/services/CBT">AI Chatbot Development</Link></li>
          <li><Link to="/services/OCR">OCR Services</Link></li>
          <li><Link to="/services/CS">Cybersecurity</Link></li>
          <li><Link to="/services/CBT">Cloud Business Transformation</Link></li>
          <li><Link to="/services/DS">Data Strategy</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Industries</h4>
        <ul className="footer-list">
          <li><Link to="/">Banking & Financial Services</Link></li>
          <li><Link to="/">TeleCommunications</Link></li>
          <li><Link to="/">Public Sector</Link></li>
          <li><Link to="/">Healthcare & Life Science</Link></li>
          <li><Link to="/">Supply Chain</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Insights</h4>
        <ul className="footer-list">
          <li><Link to="/casestudy">Perspectives</Link></li>
          <li><Link to="/whitepapers">Articles & Resources</Link></li>
        </ul>
        <h4>Careers</h4>
        <ul className="footer-list">
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/careers">Job Search</Link></li>
        </ul>
        <h4>Address</h4>
        <p>Newark, Delaware 19702, US</p>
        <p>+1 302-786-5554</p>
      </div>

      
    </footer>
  );
};

export default Footer;
