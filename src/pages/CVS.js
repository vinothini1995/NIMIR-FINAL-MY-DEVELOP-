import React from 'react';
import styled, { keyframes } from 'styled-components';
import CVSBackgroundvdo from '../components/CVSBackgroundvdo';
import Header from '../components/Header';
import cvsimage from '../images/ComputerVision1.png';
import Footer from '../components/Footer';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  padding: 10px;
  position: relative;

  @media (min-width: 768px) and (max-width: 1024px) {
    justify-content: space-around;
    gap: 15px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
  }
`;
const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease, font-size 0.3s ease; /* Add transition for smooth animation */

  h3 {
    margin-top: 0;
    font-size: 1.2em;
    color: #2d87ff; /* Heading color */
    transition: font-size 0.3s ease, color 0.3s ease; /* Transition for heading */
  }

  p {
    margin-bottom: 0;
    font-size: 0.9em;
    text-align: justify;
    color: #eeb624; /* Text color */
    transition: font-size 0.3s ease, color 0.3s ease; /* Transition for paragraph */
  }

  &:hover {
    transform: scale(1.05); /* Slightly increase the size */
    background-color: #2d87ff; /* Change background color on hover */
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increase shadow */
    
    h3 {
      color: #fff; /* Change heading color on hover */
      font-size: 1.4em; /* Increase font size on hover */
    }

    p {
      color: white; /* Change text color on hover */
      font-size: 1em; /* Increase font size on hover */
    }
  }

  /* Example media query for tablets */
  @media (max-width: 1024px) {
    width: 150px; /* Adjust width for medium screens */
  }

  /* Example media query for mobile devices */
  @media (max-width: 768px) {
    width: 100%; /* Full width on small screens */
    max-width: 350px; /* Set a maximum width to maintain layout */
  }
`;


const Introduction = styled.div`
  padding: 20px;
  text-align: center;
  margin: 20px 0;
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AdditionalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px;
  background-color: white; /* Background color white */
  text-align: left;
  
  img {
    max-width: 49%;
    height: auto;
    border-radius: 10px;
  }

  .text-content {
    max-width: 50%;
    animation: ${slideIn} 1s ease-out;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 15px;

    img {
      max-width: 100%;
      margin-bottom: 15px;
    }

    .text-content {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 20px 10px;

    img {
      max-width: 100%;
      margin-bottom: 10px;
    }

    .text-content {
      max-width: 100%;
    }
  }
`;

const CVS = () => {
  const cardsData = [
    {
      heading: 'Image Recognition',
      content: 'Utilizing AI to identify and categorize objects in images with high accuracy and speed. This technology finds applications in various sectors including healthcare, security, and automotive.',
    },
    {
      heading: 'Product Inception',
      content: 'A comprehensive approach to bringing innovative products to life, from concept to market. This includes everything from initial design to final product release, leveraging cutting-edge technologies.',
    },
    {
      heading: 'Augmented Reality',
      content: 'Blending virtual objects with the real world, enhancing user experiences in various domains such as retail, education, and entertainment. AR creates interactive and immersive experiences.',
    },
    {
      heading: 'Traffic & Crowd Analysis',
      content: 'Analyzing traffic patterns and crowd behavior using advanced algorithms to improve safety and efficiency. This technology is used in smart cities for traffic management and event planning.',
    },
    {
      heading: 'Document Analysis',
      content: 'Automating the extraction and processing of information from documents to streamline workflows. This includes OCR (Optical Character Recognition) and data extraction for various industries.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'white' }}> {/* Background color white */}
      <Header />
      <Introduction style={{ backgroundColor: '#2d87ff' }}>
        <h1 style={{ color: 'white' }}>Computer Vision Solutions (CVS)</h1> {/* Heading color #2d87ff */}
        <h6 style={{ color: '#eeb624',fontSize: '20px' }}>
          Computer Vision Solutions harness the power of AI to analyze and interpret visual data. From recognizing objects in images to analyzing video feeds, CVS is revolutionizing various industries. Explore our innovative solutions that drive advancements in technology and provide actionable insights.
        </h6>
      </Introduction>
      <CardContainer className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} delay={`${index * 0.2}s`}>
            <h4>{card.heading}</h4>
            <p>{card.content}</p>
          </Card>
        ))}
      </CardContainer>
      <AdditionalContent>
        <img src={cvsimage} alt="Computer Vision Solutions" />
        <div className="text-content">
          <h2 style={{ color: '#2d87ff' }}>Why Computer Vision is Essential</h2> {/* Heading color #2d87ff */}
          <p style={{ color: '#eeb624' }}>
            Computer Vision is a critical technology that enhances the way we interact with the world. It enables machines to interpret and understand visual information similar to the human eye, driving innovation in sectors such as healthcare, automotive, and retail. By integrating CVS into your business, you can achieve greater efficiency, accuracy, and insight, ultimately leading to better decision-making and enhanced user experiences.
          </p>
          <p style={{ color: '#eeb624' }}>
            Our solutions offer robust, scalable, and cutting-edge technologies to meet your unique needs. We specialize in developing custom computer vision solutions that integrate seamlessly with your existing systems and provide actionable data insights.
          </p>
        </div>
      </AdditionalContent>
      <Footer />
    </div>
  );
};

export default CVS;