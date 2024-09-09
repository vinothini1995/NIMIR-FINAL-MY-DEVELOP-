import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import mlImage from '../images/nimirlogo black.jpeg'; // Import your image

// Styled components for the card layout
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  flex-wrap: wrap;
  margin-bottom:30px;
`;

const Card = styled.div`
  // background: #2d87ff;
  color: yellow;
  border:2px solid blue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  position: relative;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
  }

  h2 {
    margin-top: 10px;
    font-size: 20px;
    color: black;
  }

  p {
    margin-top: 10px;
    color: black;
  }
`;

const Button = styled.button`
  background-color: white;
  border: none;
  // color: black;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
 background-color:  #eeb624;
    color:  #2d87ff;
  &:hover {
    background-color:  #2d87ff;
    color: black
;
  }
`;

const Expertise = () => {
  return (
    <div>
      <Header />
      <h1 style={{textAlign:'center',color:'#eeb624',background:' #2d87ff'}}>Our Expertise in AI/ML and Generative AI</h1>
      <h6 style={{textAlign:'center',color:'black',textAlign:'center'}}>Our expertise spans a wide array of cutting-edge technologies and tools that are essential for driving innovation in today’s rapidly evolving digital landscape. We specialize in the following areas:</h6>
      <CardContainer>
        <Link to="ExpertiseAIML" style={{ textDecoration: 'none' }}>
          <Card backgroundImage={mlImage}>
            <h2 style={{background:'#2d87ff',color:'#eeb624'}}>AI/ML Solutions</h2>
            <p style={{textAlign:'justify'}}>Explore how our AI/ML solutions can transform your business operations and decision-making processes.</p>
            <Button>Learn More</Button>
          </Card>
        </Link>
        <Link to="ExpertiseGAI" style={{ textDecoration: 'none' }}>
          <Card backgroundImage={mlImage}>
            <h2 style={{background:'#2d87ff',color:'#eeb624'}}>Generative AI (GAI)</h2>
            <p style={{textAlign:'justify'}}>Discover the power of Generative AI to create innovative, AI-backed solutions without the need for extensive coding expertise.</p>
            <Button>Learn More</Button>
          </Card>
        </Link>
      </CardContainer>
      <Footer />
    </div>
  );
};

export default Expertise;
