import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { FaBrain, FaGoogle, FaProjectDiagram, FaRobot, FaCogs, FaChartLine, FaCubes, FaDatabase } from 'react-icons/fa'; // FontAwesome icons

// Styled components for layout and animation
const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #eeb624;
  margin-bottom: 20px;
  animation: fadeIn 1s ease-in;
  background: #2d87ff;
  height: 100px;
  padding: 18px;
   @media (max-width: 768px) {
    font-size: 28px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    padding: 8px;
  }
`;

const SubTitle = styled.h2`
  font-size: 28px;
  color: #666;
  margin-top: 10px;
  margin-bottom: 30px;
    @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  animation: slideUp 0.8s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #eeb624;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: #555;
  font-size: 16px;
  text-align: justify;
`;

// Keyframe animations
const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const slideUp = `
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const ExpertiseGAI = () => {
  return (
    <div>
      <Header />
      <Container>
        <Title>Generative AI Tools & Platforms</Title>
        <SubTitle>Pioneering AI-Driven Content Creation and Automation</SubTitle>
        <p style={{textAlign: 'center'}}>Our expertise in leveraging state-of-the-art generative AI tools allows us to push the boundaries of innovation. From language models to synthetic data generation, we offer comprehensive solutions:</p>
        <CardContainer>
          <Card>
            <IconWrapper><FaBrain /></IconWrapper>
            <CardTitle>Large Language Models (LLMs)</CardTitle>
            <CardDescription>Utilize powerful language models like OpenAI's GPT series and Google's Gemini for natural language understanding and advanced conversational agents.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaRobot /></IconWrapper>
            <CardTitle>OpenAI</CardTitle>
            <CardDescription>Implement OpenAI’s cutting-edge models to create AI-driven solutions for chatbots, content generation, and more.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaGoogle /></IconWrapper>
            <CardTitle>Google Gemini</CardTitle>
            <CardDescription>Leverage Google's Gemini platform to advance capabilities in natural language processing and understanding.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaProjectDiagram /></IconWrapper>
            <CardTitle>GANs (Generative Adversarial Networks)</CardTitle>
            <CardDescription>Use GANs to generate realistic images, video, and synthetic data for various business applications.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaCogs /></IconWrapper>
            <CardTitle>MLOps Frameworks</CardTitle>
            <CardDescription>Operationalize AI models with platforms like MLflow, Kubeflow, and Run, ensuring seamless integration and deployment.</CardDescription>
          </Card>
          {/* Added Cards */}
          <Card>
            <IconWrapper><FaChartLine /></IconWrapper>
            <CardTitle>Data Analytics with AI</CardTitle>
            <CardDescription>Empower your business with AI-driven analytics to uncover hidden insights and trends in your data.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaCubes /></IconWrapper>
            <CardTitle>AI for 3D Modeling</CardTitle>
            <CardDescription>Explore AI applications in creating and enhancing 3D models for various industries like gaming and architecture.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaDatabase /></IconWrapper>
            <CardTitle>AI in Big Data</CardTitle>
            <CardDescription>Leverage AI in big data platforms for enhanced data processing and automated decision-making processes.</CardDescription>
          </Card>
        </CardContainer>
        
        <SubTitle>Why Generative AI Matters</SubTitle>
        <p style={{textAlign: 'justify'}}>Generative AI has transformed how businesses innovate, creating opportunities for automation, personalized content, and creative AI-driven solutions. Whether it’s language models or image generation, we help businesses harness the full potential of AI.</p>
      </Container>
      <Footer />
    </div>
  );
};

export default ExpertiseGAI;
