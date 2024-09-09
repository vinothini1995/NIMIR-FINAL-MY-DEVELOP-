import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/Connectnow.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_maqggai";
const TEMPLATE_ID = "template_f82w6xe";
const USER_ID = "Y8DQKzjEUYuG05aCv";

const Connectnow = () => {
  // Initialize AOS for animations
  React.useEffect(() => {
    Aos.init({ duration: 700, easing: "ease-out-cubic" });
  }, []);



  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = {
      inquiry: formData.get('inquiry'),
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      organization: formData.get('organization'),
      region: formData.get('region'),
      message: formData.get('message'),
    };
  
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Your message has been sent successfully.');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert(`Failed to send message. Error: ${error.text}`);
      });
  };
    

  return (
    <>
      <Header />
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5"
            data-aos="zoom-in-up"
            style={{ maxWidth: 600 }}
          >
            <h6 className="section-title bg-white text-center text-primary px-3">
              Contact Us
            </h6>
            <h1 className="display-6 mb-4">
              If You Have Any Query, Please Feel Free To Contact Us
            </h1>
          </div>
          <div className="row g-0 justify-content-center">
            <div className="col-lg-8" data-aos="zoom-out-down">
              <p className="text-center mb-4">
                Let us tailor a service package that meets your needs. Tell us a little about your business, and we will get back to you with some ideas as soon as possible.
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="radio-options mb-4">
                  <label>
                    <input type="radio" name="inquiry" value="service" required /> Service Solution
                  </label>
                  <label>
                    <input type="radio" name="inquiry" value="sale" /> Sale
                  </label>
                  <label>
                    <input type="radio" name="inquiry" value="inquiries" /> Inquiries
                  </label>
                  <label>
                    <input type="radio" name="inquiry" value="rationals" /> Rationals
                  </label>
                </div>
                <div className="form-group mb-3">
                  <div>
                    <label htmlFor="first_name">First Name:</label>
                    <input type="text" id="first_name" name="first_name" required />
                  </div>
                  <div>
                    <label htmlFor="last_name">Last Name:</label>
                    <input type="text" id="last_name" name="last_name" required />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" required />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <div>
                    <label htmlFor="organization">Organization:</label>
                    <input type="text" id="organization" name="organization" />
                  </div>
                  <div>
                    <label htmlFor="region">Region:</label>
                    <input type="text" id="region" name="region" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary rounded-pill py-3 px-5">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-4" data-aos="fade-right">
              <div className="contact-right">
                <div className="info-section">
                  <h4>Media Inquiries</h4>
                  <p>Visit our media center to find contact details for our media relations team in your region.</p>
                </div>
                <hr />
                <div className="info-section">
                  <h4>Reprints</h4>
                  <p>To request permission to republish an article, or if you have any questions about the usage of content published by NIMIR & Company visit our FAQ page.</p>
                </div>
                <hr />
                <div className="info-section">
                  <h4>Report Security Vulnerabilities</h4>
                  <p>If you see a technical security or privacy vulnerability on any of our websites, please let us know.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl pt-5 px-0" data-aos="flip-left">
        <iframe
          className="w-100 mb-3"
          style={{ height: 450 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49131.3766815375!2d-75.79774045760523!3d39.67871414065983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c77a9ae39789eb%3A0x2ee246f2974c385c!2sNewark%2C%20DE%2C%20USA!5e0!3m2!1sen!2sin!4v1720248946693!5m2!1sen!2sin"
          frameBorder={0}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
          title="Google Maps location of our office"
        />
      </div>
      <Footer />
    </>
  );
};

export default Connectnow;
