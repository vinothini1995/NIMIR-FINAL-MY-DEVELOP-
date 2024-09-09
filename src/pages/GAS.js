import React from 'react';
import styled from 'styled-components';
import { faCogs, faComments, faLaptopCode, faSlidersH, faChartLine, faEye, faFileAlt, faRobot, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  background: white; /* Changed from black to white */
  color: #2d87ff; /* Changed text color */
  text-align: center;
  padding: 20px;
  width:100%;
  box-sizing: border-box;
  @media(min-width: 320px) {
    width: 100%;
     overflowX:hidden;
  }
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
 overflowX:hidden;
  @media (min-width: 768px) and (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
  }
`;

const Section1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 20px;
  justify-items: center;
  width: 100%;
  box-sizing: border-box;
  overflowX:hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column for smaller screens */
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 400px;
   overflowX:hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  @media (max-width: 320px) {
    width: calc(100% - 20px); /* Adjust width for very small screens */
  }
  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 576px) {
    width: calc(100% - 20px);
  }
  @media (max-width: 1024px) {
    width: calc(100% - 20px);
  }

  &:hover {
    background-color: #eeb624;
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const Paragraph = styled.p`
  color: #2d87ff;
  font-size: 20px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 375px) {
    text-align: justify;
  }
  @media (max-width: 425px) {
    text-align: justify;
  }
  @media (max-width: 768px) {
    text-align: justify;
  }

  &:hover {
    color: white;
  }
`;

const HeadingIcon = styled.div`
  color: #2d87ff;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg, .fas {
    font-size: 1.5em;
    margin-right: 10px;
  }
`;

const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 10px;

  &:hover {
    background-color: darkred;
  }
`;

const LastSection = styled.div`
  text-align: center;
  padding: 20px;
`;

const SectionHalf = styled.div`
  flex: 1;
  min-width: 300px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
 overflowX:hidden;
  h3 {
    margin-top: 0;
    font-size: 1.2em;
  }

  p {
    margin-bottom: 0;
    font-size: 0.9em;
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const GAS = () => {
  return (
    <div>
      <Header />
      <div> {/* Changed from black to white */}
        <Container style={{ background: '#2d87ff' }}>
          <h1 style={{ color: 'white' }}>NIMIR AI Software Development Company</h1> {/* Changed text color */}
          <p style={{ color: '#eeb624', fontSize: '20px' }}><b>Get Best AI Services And Solutions By Collaborating With NIMIR AI Software Development Company</b></p>
        </Container>
        <h3 style={{ textAlign: 'center', marginTop: "20px", color: '#eeb624' }}> {/* Changed heading color */}
          Procure Insightful & Precise Results With Our AI Software Developers
        </h3>
        <Section1>
          <Card>
            <HeadingIcon>
              <FontAwesomeIcon icon={faCogs} style={{ marginRight: '10px' }} />
              <h3>AI Model Integration And Optimization</h3>
            </HeadingIcon>
            <Paragraph>Customized integration of AI models and workflow optimization.</Paragraph>
          </Card>
          <Card>
            <HeadingIcon>
              <FontAwesomeIcon icon={faComments} style={{ marginRight: '10px' }} />
              <h3>AI Conversational Tools</h3>
            </HeadingIcon>
            <Paragraph>Development of customized conversational AI tools with high NLP/NLU accuracy.</Paragraph>
          </Card>
          <Card>
            <HeadingIcon>
              <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '10px' }} />
              <h3>Custom AI Solutions</h3>
            </HeadingIcon>
            <Paragraph>Development of intent-based voice assistants, fraud detection tools, etc.</Paragraph>
          </Card>
          <Card>
            <HeadingIcon>
              <FontAwesomeIcon icon={faSlidersH} style={{ marginRight: '10px' }} />
              <h3>Fine-Tuning Models</h3>
            </HeadingIcon>
            <Paragraph>Maintenance and fine-tuning services for AI models using data augmentation.</Paragraph>
          </Card>
          <Card>
            <HeadingIcon>
              <FontAwesomeIcon icon={faChartLine} style={{ marginRight: '10px' }} />
              <h3>Predictive Analytics Solution</h3>
            </HeadingIcon>
            <Paragraph>Data-driven predictive analysis for optimal business decisions.</Paragraph>
          </Card>
          <Card>
            <HeadingIcon>
              <FontAwesomeIcon icon={faEye} style={{ marginRight: '10px' }} />
              <h3>Advanced Analytics & Insights</h3>
            </HeadingIcon>
            <Paragraph>Deep analytics with visualizations and dashboards.</Paragraph>
          </Card>
          <Card>
            <HeadingIcon>
              <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '10px' }} />
              <h3>AI & Data Security</h3>
            </HeadingIcon>
            <Paragraph>Ensuring data security and privacy for AI implementations.</Paragraph>
          </Card>
          <Card>
            <HeadingIcon>
              <FontAwesomeIcon icon={faRobot} style={{ marginRight: '10px' }} />
              <h3>Robotic Process Automation</h3>
            </HeadingIcon>
            <Paragraph>Automation of repetitive tasks to improve efficiency.</Paragraph>
          </Card>
          <Card>
            <HeadingIcon>
              <FontAwesomeIcon icon={faStar} style={{ marginRight: '10px' }} />
              <h3>AI Excellence & Quality Assurance</h3>
            </HeadingIcon>
            <Paragraph>Ensuring top-quality standards for AI software development.</Paragraph>
          </Card>
        </Section1>
        <LastSection>
          <h2>Our AI Software Development Process</h2>
          <Section>
            <SectionHalf>
              <h3>1. Requirement Analysis</h3>
              <p>Understanding client requirements and project scope.</p>
            </SectionHalf>
            <SectionHalf>
              <h3>2. Solution Design</h3>
              <p>Designing solutions that meet client needs and project goals.</p>
            </SectionHalf>
            <SectionHalf>
              <h3>3. Development</h3>
              <p>Development and integration of AI solutions as per design.</p>
            </SectionHalf>
            <SectionHalf>
              <h3>4. Testing</h3>
              <p>Thorough testing of the AI system for quality and performance.</p>
            </SectionHalf>
            <SectionHalf>
              <h3>5. Deployment</h3>
              <p>Deploying AI solutions in a production environment.</p>
            </SectionHalf>
            <SectionHalf>
              <h3>6. Maintenance</h3>
              <p>Ongoing support and maintenance to ensure optimal performance.</p>
            </SectionHalf>
          </Section>
        </LastSection>
        <Footer />
      </div>
    </div>
  );
}

export default GAS;
