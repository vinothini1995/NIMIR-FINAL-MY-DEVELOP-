import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
// Import FontAwesome icons, replaced FaAutomobile with FaCogs
import { FaBrain, FaRobot, FaChartLine, FaLanguage, FaCogs, FaDatabase, FaCubes, FaEye } from 'react-icons/fa';

// Styled components for layout and animation
const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color:  #eeb624;
  margin-bottom: 20px;
  animation: fadeIn 1s ease-in;
  background:#2d87ff;
  height:100px;
  padding:18px;
`;

const SubTitle = styled.h2`
  font-size: 28px;
  color: #666;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
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

const ExpertiseAIML = () => {
  return (
    <div>
      <Header />
      <Container>
        <Title>Artificial Intelligence (AI) and Machine Learning (ML) Tools</Title>
        <SubTitle>Empowering Businesses with Advanced AI/ML Solutions</SubTitle>
        <p>We leverage cutting-edge AI and ML tools to deliver customized solutions that drive business growth. Explore some of the technologies we specialize in:</p>
        <CardContainer>
          <Card>
            <IconWrapper><FaBrain /></IconWrapper>
            <CardTitle>TensorFlow</CardTitle>
            <CardDescription>A powerful open-source platform for building and deploying machine learning models.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaRobot /></IconWrapper>
            <CardTitle>PyTorch</CardTitle>
            <CardDescription>A flexible deep learning framework known for its dynamic computation graph and easy debugging.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaChartLine /></IconWrapper>
            <CardTitle>Scikit-learn</CardTitle>
            <CardDescription>A popular Python library for simple and efficient tools for data mining and analysis.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaLanguage /></IconWrapper>
            <CardTitle>Hugging Face</CardTitle>
            <CardDescription>Specialized in NLP with pre-trained models and transformers.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaCogs /></IconWrapper> 
            <CardTitle>AutoML Tools</CardTitle>
            <CardDescription>Tools like Google Cloud AutoML and Azure AutoML automate machine learning processes.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaDatabase /></IconWrapper>
            <CardTitle>BigQuery ML</CardTitle>
            <CardDescription>Run machine learning models on large datasets using SQL in Google Cloud’s BigQuery.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaCubes /></IconWrapper>
            <CardTitle>IBM Watson</CardTitle>
            <CardDescription>An AI system that understands, reasons, and learns to assist with complex decision-making.</CardDescription>
          </Card>
          <Card>
            <IconWrapper><FaEye /></IconWrapper>
            <CardTitle>Computer Vision Tools</CardTitle>
            <CardDescription>Use of deep learning to analyze visual data, with tools like OpenCV and Google's Cloud Vision API.</CardDescription>
          </Card>
        </CardContainer>
        
        <SubTitle>Our AI/ML Expertise</SubTitle>
        <p style={{textAlign:'center'}}>Our team has extensive experience working with AI/ML frameworks, empowering businesses with automation, data insights, and intelligent solutions. Whether it's natural language processing, predictive analytics, or computer vision, we are equipped to transform your business with the latest technology.</p>

        <p style={{textAlign:'center'}}>From training complex neural networks to implementing machine learning workflows, our goal is to create scalable and efficient systems that can handle real-world challenges.</p>
        
      </Container>
      <Footer />
    </div>
  );
};

export default ExpertiseAIML;
