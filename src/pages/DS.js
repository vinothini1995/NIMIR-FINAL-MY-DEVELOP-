import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import bannerimg from '../images/datastrategy.webp';
import { FaDatabase, FaProjectDiagram, FaShieldAlt, FaChartLine, FaLock } from 'react-icons/fa';
import DSBackgroundvdo from '../components/DSBackgroundvdo';
import Footer from '../components/Footer';

const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${bannerimg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #eeb624;
  margin-bottom: 20px;
  text-align: center;
  font-size: 2rem; /* Adjust font size for larger screens */
  
  @media (max-width: 768px) {
    font-size: 1.75rem; /* Adjust font size for medium screens */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;

const Paragraph = styled.p`
  color: #2d87ff;
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px; /* Adjust font size for medium screens */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjust grid columns for medium screens */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Single column for smaller screens */
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }

  h2 {
    margin-top: 10px;
    font-size: 22px;
    color: #eeb624;
  }

  p {
    margin-top: 10px;
    color: black;
  }

  svg {
    font-size: 40px;
    color: #eeb624;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  &:hover svg {
    color: #2d87ff;
    transform: scale(1.2);
  }
`;

const ImageContainer = styled.div`
  margin-top: 40px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  h2 {
    color: #333;
    margin-top: 20px;
    font-size: 1.75rem; /* Adjust font size for larger screens */
    
    @media (max-width: 768px) {
      font-size: 1.5rem; /* Adjust font size for medium screens */
    }

    @media (max-width: 480px) {
      font-size: 1.25rem; /* Adjust font size for smaller screens */
    }
  }
`;

const DS = () => {
  return (
    <div>
      <Header />
      <BannerContainer />
      <Container>
        <ContentContainer>
          <Section data-aos="fade-up">
            <Title>Understanding Data Strategy</Title>
            <Paragraph>
              In today’s data-driven world, a robust data strategy is essential for organizations to harness the full potential of their data. A well-defined data strategy aligns data collection, management, and utilization with business goals, enabling informed decision-making and competitive advantage.
            </Paragraph>
          </Section>

          <Section data-aos="fade-up">
            <Title>Key Components of a Data Strategy</Title>
            <CardContainer>
              <Card data-aos="zoom-in">
                <FaDatabase />
                <h2>Data Governance</h2>
                <Paragraph>
                  Establishing policies and procedures to ensure data accuracy, consistency, security, and accessibility. Effective data governance lays the foundation for trustworthy data that can drive business success.
                </Paragraph>
              </Card>
              <Card data-aos="zoom-in" data-aos-delay="100">
                <FaProjectDiagram />
                <h2>Data Architecture</h2>
                <Paragraph>
                  Designing the blueprint for data storage, integration, and processing. A strong data architecture supports seamless data flow across the organization and ensures scalability as data needs grow.
                </Paragraph>
              </Card>
              <Card data-aos="zoom-in" data-aos-delay="200">
                <FaShieldAlt />
                <h2>Data Quality Management</h2>
                <Paragraph>
                  Implementing processes to maintain high data quality, which is crucial for reliable analysis and insights. This includes data cleansing, validation, and continuous monitoring.
                </Paragraph>
              </Card>
              <Card data-aos="zoom-in" data-aos-delay="300">
                <FaChartLine />
                <h2>Data Analytics and Business Intelligence</h2>
                <Paragraph>
                  Leveraging advanced analytics tools and techniques to extract meaningful insights from data. This involves deploying machine learning models, predictive analytics, and visualizations to support strategic decision-making.
                </Paragraph>
              </Card>
              <Card data-aos="zoom-in" data-aos-delay="400">
                <FaLock />
                <h2>Data Security and Privacy</h2>
                <Paragraph>
                  Ensuring data protection through encryption, access controls, and compliance with regulations such as GDPR. A secure data strategy protects against breaches and builds trust with customers.
                </Paragraph>
              </Card>
            </CardContainer>
          </Section>

          <ImageContainer data-aos="fade-up">
            <h2>The Importance of a Data Strategy</h2>
            <Paragraph>
              A well-crafted data strategy is not just about managing data—it’s about unlocking its value to drive innovation, efficiency, and growth. By aligning data initiatives with business goals, organizations can turn data into a strategic asset that fuels their success.
            </Paragraph>
            {/* <img src={dsimg} alt="Data Strategy" /> */}
          </ImageContainer>

          <Section data-aos="fade-up">
            <Title>Why Choose Us?</Title>
            <Paragraph>
              <b>Expertise in Software Data Strategy:</b> We specialize in crafting data strategies tailored to the unique needs of software companies. Our team understands the challenges and opportunities in the software industry and delivers solutions that align with your business goals.
            </Paragraph>
            <Paragraph>
              <b>Innovative Solutions:</b> We stay at the forefront of data technology, offering innovative solutions that help you stay competitive in a rapidly evolving market.
            </Paragraph>
            <Paragraph>
              <b>Customer-Centric Approach:</b> We prioritize your needs, working closely with you to develop a data strategy that drives value and supports your long-term success.
            </Paragraph>
          </Section>
        </ContentContainer>
      </Container>
      <DSBackgroundvdo />
      <Footer />
    </div>
  );
};

export default DS;
