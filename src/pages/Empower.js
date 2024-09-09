import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Empower = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <SectionTitle data-aos="fade-up"  style={{background:'#2d87ff',color:' #eeb624'}}>
          Empower Innovation: Unleash AI with Low-Code/No-Code Platform
        </SectionTitle>

        <Card data-aos="fade-right">
          <CardHeader>Introduction</CardHeader>
          <CardContent>
            <p>
              Empower your business to build AI models with a unique no-code approach. No expertise required! Create business impact by making data-driven, AI-backed decisions without needing technical skills.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Key Features</CardHeader>
          <CardContent>
            <SubHeader>No-Code/Low-Code AI Model Creation</SubHeader>
            <p>
              Develop AI models using intuitive drag-and-drop interfaces that eliminate the need for deep programming knowledge. 
            </p>
            <SubHeader>Business Impact with AI</SubHeader>
            <p>
              Implement AI-backed decisions that can revolutionize business operations, from predictive analytics to customer service automation.
            </p>
            <SubHeader>Time & Cost Efficiency</SubHeader>
            <p>
              Save time and reduce development costs by using pre-built components, allowing your business to quickly adapt and innovate with AI.
            </p>
            <SubHeader>Integration with Existing Systems</SubHeader>
            <p>
              Seamlessly integrate AI capabilities with your existing business systems and workflows without extensive modifications.
            </p>
            <SubHeader>User-Friendly Interfaces</SubHeader>
            <p>
              Utilize user-friendly interfaces designed for business users, enabling easy creation and management of AI models without needing a deep technical background.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Technological Advantage</CardHeader>
          <CardContent>
            <p>
              By utilizing Low-Code/No-Code platforms, you can access powerful AI tools without worrying about the underlying infrastructure. These platforms provide built-in AI functionalities such as natural language processing, computer vision, and data analytics—all with minimal technical effort.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Real-World Applications</CardHeader>
          <CardContent>
            <p>
              Many industries are adopting low-code/no-code AI solutions to create impactful applications in record time. Use cases include automated workflows, intelligent customer support systems, and real-time business insights through AI-driven dashboards.
            </p>
            <p>
              Empower your teams to innovate faster, with fewer resources, and without extensive technical knowledge.
            </p>
            <SubHeader>Enhanced Collaboration</SubHeader>
            <p>
              Facilitate collaboration among teams by enabling non-technical stakeholders to contribute to AI model development and deployment.
            </p>
            <SubHeader>Rapid Prototyping</SubHeader>
            <p>
              Quickly prototype and test AI solutions, allowing businesses to validate ideas and iterate rapidly based on feedback.
            </p>
          </CardContent>
        </Card>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default Empower;

// Styled Components

const PageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  overflow-x: hidden; /* Prevents horizontal scroll */
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  color: #333;
  height: 100px;
  padding: 10px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 2em; /* Medium screens (tablets) */
  }

  @media (max-width: 768px) {
    font-size: 1.2em; /* Small screens (portrait tablets and large phones) */
  }

  @media (max-width: 320px) {
    font-size: 1.2em; /* Extra small phones */
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  max-width: 100%;

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
