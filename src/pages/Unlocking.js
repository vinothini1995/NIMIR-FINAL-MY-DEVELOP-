import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Unlocking = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <SectionTitle data-aos="fade-up" style={{background:'#2d87ff',color:' #eeb624'}}>Unlocking Enterprise Success: How MLOps Accelerates AI-Driven Wins</SectionTitle>

        <Card data-aos="fade-right">
          <CardHeader>Introduction</CardHeader>
          <CardContent>
            <p>
              Machine Learning Operations (MLOps) is transforming enterprise AI projects by introducing scalable and efficient end-to-end data science lifecycle processes. It enables businesses to quickly move from model development to deployment, ensuring faster time-to-market and more reliable AI-driven outcomes.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>The End-to-End Data Science Lifecycle</CardHeader>
          <CardContent>
            <SubHeader>Data Collection & Preparation</SubHeader>
            <p>
              MLOps begins with gathering and preparing high-quality data to train machine learning models. Automated pipelines ensure that data is clean, well-structured, and ready for analysis.
            </p>
            <SubHeader>Model Development & Training</SubHeader>
            <p>
              With a strong focus on automation, MLOps enables seamless model training and validation. This iterative process ensures that AI models are trained efficiently and perform optimally in production.
            </p>
            <SubHeader>Deployment & Monitoring</SubHeader>
            <p>
              Once the models are trained, MLOps automates the deployment process and ensures continuous monitoring of model performance, allowing for real-time adjustments and improvements.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Benefits of MLOps for Enterprises</CardHeader>
          <CardContent>
            <p>
              MLOps streamlines AI workflows, reduces development time, and enhances collaboration between data science and IT teams. This leads to faster iterations, improved model accuracy, and increased business value from AI initiatives.
            </p>
            <SubHeader>Improved Collaboration</SubHeader>
            <p>
              MLOps fosters better teamwork between data scientists and IT operations, ensuring smoother transitions from development to deployment and operationalization of AI models.
            </p>
            <SubHeader>Increased Model Reliability</SubHeader>
            <p>
              Continuous monitoring and automated updates help in maintaining model performance and reliability over time, adapting to changes in data patterns and business requirements.
            </p>
            <SubHeader>Scalability</SubHeader>
            <p>
              MLOps frameworks are designed to scale with the needs of the business, accommodating growing data volumes and increasing complexity of AI models.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Use Cases in Enterprises</CardHeader>
          <CardContent>
            <p>
              MLOps is being used in industries such as finance, healthcare, and retail to optimize fraud detection, predictive maintenance, and customer personalization. Enterprises can now unlock the full potential of AI to drive innovation and competitive advantage.
            </p>
            <SubHeader>Finance</SubHeader>
            <p>
              Automated fraud detection systems powered by MLOps can identify unusual patterns in transaction data, enhancing security and reducing fraudulent activities.
            </p>
            <SubHeader>Healthcare</SubHeader>
            <p>
              Predictive analytics models can improve patient outcomes by forecasting disease progression and personalizing treatment plans.
            </p>
            <SubHeader>Retail</SubHeader>
            <p>
              Customer behavior analysis and recommendation systems help in personalizing shopping experiences and optimizing inventory management.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Best Practices for Implementing MLOps</CardHeader>
          <CardContent>
            <p>
              To ensure successful implementation of MLOps, follow these best practices:
            </p>
            <ul>
              <li>Define clear objectives and metrics for your AI projects.</li>
              <li>Establish automated workflows for data processing, model training, and deployment.</li>
              <li>Implement robust monitoring and logging systems to track model performance and detect issues early.</li>
              <li>Foster collaboration between data science and operations teams to ensure smooth transitions and alignment on goals.</li>
              <li>Continuously update and retrain models based on new data and feedback to maintain their effectiveness.</li>
            </ul>
          </CardContent>
        </Card>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default Unlocking;

// Styled Components

const PageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  // padding: 20px;
  overflow-x: hidden; /* Prevents horizontal scroll */
`;

const ContentWrapper = styled.div`
  // max-width: 1200px;
  margin: 0 auto;
  // padding: 20px;
  overflow-x: hidden; /* Ensures no horizontal overflow within content */
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;
   @media (max-width: 1024px) {
    font-size: 2em; // Medium screens (tablets)
  }
   
      @media (max-width: 768px) {
    font-size: 1.2em; // Small screens (portrait tablets and large phones)
      text-align:justify;
     padding:5px;
    }
     @media (max-width: 320px) {
    font-size: 1.2em; // Extra small phones
     text-align:justify;
     padding:5px;
    }

`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  max-width: 100%; /* Ensure card doesn't exceed parent width */
  
  &:hover {
    transform: scale(1.02);
  }
`;

const CardHeader = styled.h3`
  font-size: 1.8em;
  color: #007bff;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  p {
    font-size: 1.1em;
    color: #666;
    margin: 10px 0;
    text-align:justify;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

const SubHeader = styled.h4`
  font-size: 1.3em;
  margin-top: 10px;
  color: #333;
`;
