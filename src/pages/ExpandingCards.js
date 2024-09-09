import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

// Animation for scaling the card
const scaleUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

// Styles for the card
const Card = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #e3f2fd;
    transform: scale(1.02);
  }
`;

// Title of the card
const CardTitle = styled.h3`
  margin: 0;
  padding: 16px;
  // background-color: grey;
  color: black;
  text-align: center;
  border-radius: 8px 8px 0 0;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #eeb624;
    color: #2d87ff;
  }
`;

// Content inside the card
const CardContent = styled.p`
  padding: 16px;
  text-align: center;
  color: black;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    background-color: #e3f2fd;
    transform: scale(1.02);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    color: #2d87ff;
  }
`;

// Container for the icons
const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 50%;
  background-color: grey;
  color: black;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #eeb624;
    color: #2d87ff;
  }
`;

// Container to hold all the cards
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Individual card component
const CardComponent = ({ title, content }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      {/* <IconContainer>
        <FontAwesomeIcon icon={faPlus} />
      </IconContainer> */}
      <CardContent>{content}</CardContent>
    </Card>
  );
};

// Component to render multiple cards
const FourCards = () => {
  const cardsData = [
    { title: 'Strategic Planning & Discovery', content: 'Clearly define business goals, identify areas where AI can provide value, and outline the specific outcomes you want to achieve.' },
    { title: 'Data Preparation & Collection', content: 'Collect and prepare high-quality data, and choose the appropriate AI algorithms and ML models based on your objectives.' },
    { title: 'Development & Validation', content: 'Train AI models using prepared data, optimize parameters, and validate model performance using separate datasets.' },
    { title: 'Deployment & Integration', content: 'Integrate AI and ML models into existing systems, develop necessary APIs or interfaces, and ensure smooth deployment.' },
    { title: 'Monitor & Iterate', content: 'Monitor model performance in real-world scenarios, address biases, and make updates required to enhance efficiency.' },
    { title: 'Adoption & ROI', content: 'Provide user training, encourage adoption, and measure the impact of AI on key metrics to assess the return on investment.' }
  ];

  return (
    <CardsContainer>
      {cardsData.map((card, index) => (
        <CardComponent key={index} title={card.title} content={card.content} />
      ))}
    </CardsContainer>
  );
};

export default FourCards;
