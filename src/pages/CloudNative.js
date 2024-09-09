import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CloudNative = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <SectionTitle data-aos="fade-up" style={{background:'#2d87ff',color:' #eeb624'}}>
          Cloud Native AI for Business
        </SectionTitle>

        <Card data-aos="fade-right">
          <CardHeader>Introduction</CardHeader>
          <CardContent>
            <p>
              Envision creating a smart application that continuously learns, adapts, and evolves—without the burden of managing intricate infrastructure. This is the advantage of Cloud Native Artificial Intelligence (CNAI).
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Key Benefits</CardHeader>
          <CardContent>
            <SubHeader>Scalability</SubHeader>
            <p>
              CNAI allows businesses to scale their AI models seamlessly as demand grows, without worrying about the complexities of infrastructure management.
            </p>
            <SubHeader>Continuous Learning</SubHeader>
            <p>
              With CNAI, applications can evolve over time through continuous learning, improving their decision-making and predictive abilities.
            </p>
            <SubHeader>Cost Efficiency</SubHeader>
            <p>
              By leveraging cloud infrastructure, businesses can reduce costs associated with maintaining on-premise systems while benefiting from the latest AI advancements.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Technologies Involved</CardHeader>
          <CardContent>
            <p>Cloud Native AI leverages cutting-edge technologies such as:</p>
            <ul>
              <li>Containerization with Docker and Kubernetes for deployment</li>
              <li>Microservices architecture to enable modular development</li>
              <li>Serverless computing for dynamic scaling</li>
            </ul>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Use Cases</CardHeader>
          <CardContent>
            <p>
              CNAI is transforming various industries, including healthcare, finance, and retail. Businesses can use AI-driven insights to improve customer experiences, optimize operations, and drive innovation.
            </p>
            <p>
              From AI-powered chatbots to advanced predictive analytics, CNAI brings cutting-edge solutions to the forefront of digital transformation.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Challenges</CardHeader>
          <CardContent>
            <p>
              A key challenge in adopting CNAI is ensuring data security and privacy as businesses transition to cloud infrastructure.
            </p>
            <p>
              Additionally, integrating CNAI with legacy systems can require significant effort, especially for large enterprises.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Impact</CardHeader>
          <CardContent>
            <p>
              CNAI is enabling businesses to innovate faster and deliver personalized experiences to customers at scale. The ability to continuously learn and evolve makes CNAI a valuable asset in staying competitive in the digital economy.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Future of CNAI</CardHeader>
          <CardContent>
            <p>
              As cloud technologies evolve, the future of CNAI looks promising. Emerging trends such as AI-driven automation and intelligent edge computing are set to revolutionize industries by providing real-time insights and enhancing decision-making processes.
            </p>
          </CardContent>
        </Card>

      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default CloudNative;

// Styled Components

const PageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;

  overflow-x: hidden; /* Prevents horizontal scroll */
`;

const ContentWrapper = styled.div`
   margin: 0 auto;
  // padding: 20px;
`;

const SectionTitle = styled.h2`
 text-align: center;
  font-size: 2.5em;
  color: #333;
  height:100px;
  padding:15px;
  margin-bottom: 30px;
   @media (max-width: 1024px) {
    font-size: 2em; // Medium screens (tablets)
  }
   
  @media (max-width: 768px) {
    font-size: 1.2em; // Small screens (portrait tablets and large phones)
  }
  @media (max-width: 320px) {
    font-size: 1.2em; // Extra small phones
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
