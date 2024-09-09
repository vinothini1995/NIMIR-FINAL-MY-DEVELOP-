import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/Plugin.css';
import '../pages/ServiceCard.css';
import EAI from '../images/GAI.webp';
import MLS from '../images/ML.jpg';
import GAI from '../images/AI.webp';
import CVS from '../images/CVSimage.webp';
import ACD from '../images/CHAT.jpg';
import OCR from '../images/OCR-Software.jpg';
import CS from '../images/cybermain.jpg';
import CBT from '../images/CCLOUD.jpg';
import DS from '../images/dsmain.jpg';
import TA from '../images/Improve-Talent-Acquisition.png'; // Example image
import RD from '../images/research.jpg'; // Example image
import TR from '../images/training.webp'; // Example image
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Servicesforhome() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div>
      {/* <Header/> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-aos="zoom-in" style={{ maxWidth: 600 }}>
            <h4 className="section-title bg-white text-center text-primary px-3">Our Services</h4>
            {/* <h1 className="display-6 mb-4">We Focus On Making The Best In All Sectors</h1> */}
          </div>
          <div className="row g-4">
            {[
              { img: EAI, title: 'Enterprise AI Consulting', path: '/services/EAI' },
              { img: MLS, title: 'Machine Learning Solutions', path: '/services/MLS' },
              { img: GAI, title: 'Generative AI Services', path: '/services/GAS' },
              { img: CVS, title: 'Computer Vision Services', path: '/services/CVS' },
              { img: ACD, title: 'AI Chatbot Development', path: '/services/ACD' },
              { img: OCR, title: 'OCR Services', path: '/services/OCR' },
              { img: CS, title: 'Cybersecurity', path: '/services/CS' },
              { img: CBT, title: 'Cloud Business Transformation', path: '/services/CBT' },
              { img: DS, title: 'DataStrategy', path: '/services/DS' },
            ].map((service, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" key={index}>
                <Link to={service.path ? service.path : '#'} className="service-item card text-decoration-none">
                  <div className="card-image">
                    <img className="img-fluid rounded mb-4" src={service.img} alt={service.title} />
                  </div>
                  <div className="card-body">
                    <h5 className="heading">{service.title}</h5>
                    <div className="learn-more-icon">
                      <FontAwesomeIcon icon={faArrowRight} /> Learn More
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            {/* New Non-Clickable Cards */}
            {[
              {
                img: TA,
                title: 'Talent Acquisition',
                content:'We identify, attract, and hire qualified individuals to fill specific roles within your IT organization. It is a strategic function that focuses on finding the right talent to meet current and future staffing needs. We go beyond traditional recruitment by encompassing a holistic approach that includes sourcing, screening, evaluating, and selecting candidates who align with the organization  culture, values, skill requirements and provide detailed score cards',
              },
              {
                img: RD,
                title: 'Research and Development',
                content:'Our R&D efforts focus on developing new products, services, or processes that meet customer needs, address market gaps, or improve existing offerings. This includes conducting market research, prototyping, testing, and refining ideas before bringing them to the market.',
              },
              {
                img: TR,
                title: 'Training',
                content:'Training initiatives focus on enhancing the knowledge, skills, and capabilities of individuals within an organization. It aims to improve employee performance, foster growth, and align workforce skills with organizational goals.',
              },
            ].map((service, index) => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-aos="fade-up" key={index}>
                <div className="service-item card">
                  <div className="card-image">
                    <img className="img-fluid rounded mb-4" src={service.img} alt={service.title} />
                  </div>
                  <div className="card-body">
                    <h5 className="heading">{service.title}</h5>
                    <p style={{textAlign:'justify'}}>{service.content}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicesforhome;
