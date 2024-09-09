import React from 'react';
import cloud from '../images/cloud-consulting-services.jpg';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import cloud1 from '../images/cloud1.avif';
import azure from '../images/azure.png';
import aws from '../images/aws.jpg';
import googlecloud from '../images/google-cloud-3.svg';
import cloudlast from '../images/Cloud computing.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  width: 100%;
  background-color: white; /* Set background color to white */
`;


const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TextContent = styled.div`
  flex: -1;
  padding: 20px;
  text-align: justify;

  h5 {
    color: #eeb624; /* Heading color */
  }

  p {
    color: #2d87ff; /* Paragraph color */
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: auto;
  max-width: 500px;
`;

const Image1 = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
`;

const Section = styled.div`
  padding: 20px;
  text-align: center;
  img {
    margin: 10px;
    width: 100px;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      width: 80px;
      margin: 20px;
    }
  }
`;

const HoverCardContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

const HoverCard = styled.div`
  background-color: white;
  width: 55%; /* Adjust width to 55% of the parent container */
  height: auto; /* Automatically adjust height based on content */
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #2d87ff;
  font-size: 19px;
  text-align: justify;
  transition: all 0.3s ease-in-out;
  margin: 20px;
  cursor: pointer;

  &:hover {
    background-color: #2d87ff;
    color: white;
    font-size: 16px; /* Font size increase on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.05); /* Slight scale-up on hover */
  }
`;

const StyledDiv = styled.div`
  width: 100%; /* Adjust width as needed */
  margin: 20px auto; /* Center the div with auto margins */
  padding: 20px;
  position: relative;

  h2 {
    color: #eeb624;
  }

  p {
    color: black;
    font-size: 18px;
    transition: all 0.4s ease-in-out;
  }
`;


const Cloud = styled.div`
  padding: 20px;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  text-align: justify;

  &:hover {
    background-color: #2d87ff;
    transform: translate(-10px, 10px); /* Move the card from top-right to bottom-left */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h6 {
    color: #eeb624;
    font-size: 18px;
    transition: color 0.3s ease-in-out;
  }

  p {
    color: black;
    transition: color 0.3s ease-in-out;
  }

  &:hover h6 {
    color: #eeb624;
  }

  &:hover p {
    color: white;
  }
`;

const CBT = () => {
  return (
    <div style={{background: 'white'}}>
      <Header />
      <Container>
        <ContentContainer style={{background: '#2d87ff'}}>
          <TextContent>
            <h1 style={{color: 'white',textAlign: 'center'}}>Cloud Business Transformation</h1>
            <h5>Our Cloud consultants collaborate on strategic and technological solutions that ensure you’re driving maximum value from the Cloud.</h5>
           </TextContent>
        </ContentContainer>
        <HoverCardContainer>
        <HoverCard>
              
              Our consultants leverage cross-domain expertise, partnerships with Cloud providers,
              and agile software delivery processes to accelerate your Cloud journey – whether
              you’re about to migrate or want to optimize existing processes. Our detailed IT
              audits and Cloud roadmaps are Cloud-agnostic and infra-agnostic to allow for
              flexible implementation across On-premise, Hybrid, Multi, or specific Cloud
              environments.
            </HoverCard> 
            </HoverCardContainer>
        <Cloud>
        <StyledDiv>
          <h2>Cloud Migration & Application Modernization Services</h2>
          <p>
            NIMIR is dedicated to helping organizations tap into the capabilities of cloud-native architectures 
            and contemporary technologies. By breaking down departmental silos and other innovation barriers, 
            we enable your business to grow faster, scale effortlessly, and discover new value.
          </p>
        </StyledDiv>

        <div>
  <h2 style={{ textAlign: 'center' }}>Why Cloud Service?</h2>
  <CardContainer>
    <Card>
      <h6>Leader in Cloud Services</h6>
      <p>Our expertise in end-to-end Cloud Strategy and Development allows us to create robust, scalable software solutions to tight timescales.</p>
    </Card>
    <Card>
      <h6>Handpicked Experts</h6>
      <p>Our 50+ strong global team of experienced, certified consultants and developers is well-versed with the latest tools, technologies, and platforms.</p>
    </Card>
    <Card>
      <h6>Customer-Centric Approach</h6>
      <p>We design and build solutions that meet your unique business needs to help your organization thrive.</p>
    </Card>
    <Card>
      <h6>IP Ownership</h6>
      <p>We ensure strict compliance with industry protocols for complete confidentiality, helping safeguard intellectual property.</p>
    </Card>
    <Card>
      <h6>Cloud Security</h6>
      <p>Our cloud security solutions protect your data with advanced encryption methods and compliance with industry standards.</p>
    </Card>
    <Card>
      <h6>24/7 Support</h6>
      <p>Our dedicated support team is available around the clock to ensure your cloud services run smoothly without interruption.</p>
    </Card>
  </CardContainer>
</div>

        </Cloud>
      </Container>
      <Footer />
    </div>
  );
}

export default CBT;
