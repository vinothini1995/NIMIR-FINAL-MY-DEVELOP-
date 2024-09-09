import React from 'react';
import styled, { keyframes } from 'styled-components';
import chatbotImage from '../images/AI-Chatbots.jpg'; // Replace with your actual image path
import { FaRobot, FaLanguage, FaUserTie, FaTasks, FaChartLine, FaArrowsAltV } from 'react-icons/fa'; // Example icons
import ACDBackgroundvdo from '../components/ACDBackgroundvdo';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define box animation
const boxAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Header styles
const Headers = styled.h1`
  font-size: 2.5em;
  color: #eeb624; /* Updated heading color */
  margin-bottom: 20px;
  text-align: center;
`;

// Subheading styles
const Subheading = styled.h2`
  font-size: 1.8em;
  color: green;
  margin-bottom: 20px;
  text-align: center;
`;

// Paragraph styles
const Paragraph = styled.p`
  font-size: 1.2em;
  color: black; /* Updated content color */
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 700px;
  margin: 0 auto;
  text-align:justify;
`;

// Image banner styling
const BannerImageWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 400px;
  }
`;

// Rounded div container styles
const RoundedDivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
`;

// Rounded div styles with animation
const RoundedDiv = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 50px; /* Rounded corners */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
  cursor: pointer;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out, ${boxAnimation} 3s infinite;

  &:hover {
    transform: scale(1.05);
    background-color: #f0f0f0; /* Hover background color */
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);

    h3 {
      color: #2d87ff; /* Hover heading color */
      font-size: 20px; /* Increase heading font size on hover */
    }

    p {
      color: #2d87ff; /* Hover content color */
      font-size: 16px; /* Increase content font size on hover */
    }

    svg {
      color: #eeb624; /* Change icon color on hover */
    }
  }

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #eeb624; /* Default heading color */
  }

  p {
    font-size: 14px;
    color: black; /* Default content color */
    text-align: justify;
  }

  svg {
    color: #2d87ff; /* Default icon color */
    font-size: 2em;
  }
`;

// Icon styles
const IconWrapper = styled.div`
  font-size: 2em;
  color: #2d87ff; /* Updated icon color */
  margin-bottom: 15px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const ACD = () => {
  const roundedDivData = [
    {
      heading: '24/7 Availability',
      content: 'Our chatbots provide round-the-clock support, ensuring that your customers receive instant responses at any time, without the need for human intervention.',
      icon: <FaRobot />, // Icon for this card
    },
    {
      heading: 'Natural Language Processing (NLP)',
      content: 'Utilizing advanced NLP technology, our chatbots understand and process human language with high accuracy, engaging in natural and meaningful conversations.',
      icon: <FaLanguage />, // Icon for this card
    },
    {
      heading: 'Personalized Interactions',
      content: 'Customizable to reflect your brand’s voice, our chatbots offer personalized interactions and remember user preferences to provide tailored responses.',
      icon: <FaUserTie />, // Icon for this card
    },
    {
      heading: 'Multi-Channel Support',
      content: 'Seamlessly integrate our chatbots across various platforms, including websites, mobile apps, and social media channels, for consistent customer service.',
      icon: <FaArrowsAltV />, // Icon for this card
    },
    {
      heading: 'Automated Task Handling',
      content: 'Automate routine tasks such as scheduling appointments, processing orders, and handling FAQs, freeing up your team to focus on more complex issues.',
      icon: <FaTasks />, // Icon for this card
    },
    {
      heading: 'Real-Time Analytics',
      content: 'Gain valuable insights into customer behavior and interaction patterns with real-time analytics, allowing you to continuously improve your chatbot’s performance.',
      icon: <FaChartLine />, // Icon for this card
    },
    {
      heading: 'Scalable Solutions',
      content: 'Our chatbots are designed to scale according to your needs, handling varying volumes of interactions and adapting to your growing business requirements.',
      icon: <FaArrowsAltV />, // Icon for this card
    },
  ];

  return (
    <div style={{ backgroundColor: 'white' }}> {/* Updated background color */}
      <Header />
      <BannerImageWrapper>
        <img src={chatbotImage} alt="AI Chatbot" />
      </BannerImageWrapper>
      <Headers>AI Chatbot Service</Headers>
      <Subheading>Revolutionize Your Customer Engagement</Subheading>
      <Paragraph>
        Our AI chatbot service offers a powerful and intelligent solution to enhance customer interactions, streamline operations, and provide round-the-clock support. Discover how our chatbots can transform your business.
      </Paragraph>
      <RoundedDivContainer>
        {roundedDivData.map((item, index) => (
          <RoundedDiv key={index}>
            <IconWrapper>{item.icon}</IconWrapper>
            <h3>{item.heading}</h3>
            <p>{item.content}</p>
          </RoundedDiv>
        ))}
      </RoundedDivContainer>
      <div style={{ marginTop: '10px' }}><Footer /></div>
    </div>
  );
};

export default ACD;