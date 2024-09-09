import React, { useEffect } from 'react';
import './Plugin.css';
import About1 from '../images/AIFRONT.png';
import Aos from 'aos';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
    <Header/>
      {/* Internal CSS Styles */}
      <style jsx>{`
        .partners-section {
          text-align: center;
          margin-top: 50px;
        }

        .partners-logos {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 100px;
          margin-top: 20px;
        }

        .partners-logos img {
          width: 100px; /* Adjust the size as needed */
          height: auto;
          margin: 10px;
        }

        @media (min-width: 768px) {
          .partners-logos img {
            width: 120px; /* Adjust the size for larger screens */
          }
        }
      `}</style>

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-aos="flip-left">
              <div className="img-border">
                <img className="img-fluid" src={About1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-aos="zoom-in-left">
              <div className="h-100">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  About Us
                </h6>
                <h1 className="display-6 mb-4">
                  <span className="text-primary" data-aos="zoom-in-left">"NIMIR" </span> MEANS "ARISE" NIMIR IS A TAMIL WORD
                </h1>
                <p data-aos="zoom-in-left" style={{ textAlign: 'justify' }}>
                  We are a team of experienced professionals dedicated to providing comprehensive IT consulting services to businesses of all sizes and industries. With a deep understanding of technology trends and industry best practices, we help our clients leverage the power of IT to achieve their strategic objectives and overcome complex challenges
                </p>
                <p className="mb-4" data-aos="zoom-in-left" style={{ textAlign: 'justify' }}>
                  <h6>Setting the tone, sharing the ambition, changing tomorrow.</h6>
                  If you collaborate with NIMIR then you are working with a team who strive to provide solutions that help you do business faster, better, and smarter than ever before.
                </p>
                <p className="mb-4" data-aos="zoom-in-left" style={{ textAlign: 'justify' }}>
                  <h6>Our Commitment
                  </h6>
                  At NIMIR, We are passionate about the transformative power of AI and dedicated to making it accessible and beneficial for all. We continually invest in research and development to stay ahead of the curve and deliver the most effective AI solutions.
                </p>
                <a className="btn btn-primary rounded-pill py-3 px-5" href="" data-aos="zoom-in-left">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      {/* About End */}
      <Footer/>
    </>
  )
}

export default About;
