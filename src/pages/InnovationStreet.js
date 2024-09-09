import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const InnovationStreet = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <SectionTitle data-aos="fade-up" style={{background:'#2d87ff',color:' #eeb624'}}>
          Inclusive Innovation Street: Improving Urban Streets with AI
        </SectionTitle>

        <Card data-aos="fade-right">
          <CardHeader>Objective</CardHeader>
          <CardContent>
            <p>
              The project aimed to enhance street design to make it more accessible and safe for everyone, including pedestrians, cyclists, and drivers.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Approach</CardHeader>
          <CardContent>
            <SubHeader>Data Collection</SubHeader>
            <p>Collected street images using Google Street View APIs.</p>
            <p>Processed these images using computer vision to improve quality.</p>
            <SubHeader>Image Annotation</SubHeader>
            <p>Annotated images to label street features like curb ramps and traffic signals.</p>
            <p>Created masks from these annotations for AI model training.</p>
            <SubHeader>Model Training</SubHeader>
            <p>Trained AI models to identify and segment street features.</p>
            <p>Tested the models to ensure accurate predictions.</p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Challenges</CardHeader>
          <CardContent>
            <p>
              One of the main challenges was accurately labeling diverse street environments and features from images, which required extensive manual annotation.
            </p>
            <p>
              Additionally, scaling the model for different geographic locations presented challenges due to variations in urban design.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Technologies Used</CardHeader>
          <CardContent>
            <p>
              The project utilized cutting-edge technologies such as computer vision, machine learning models, and geospatial data analysis.
            </p>
            <p>
              Key tools included TensorFlow for AI model training, Google Street View APIs for image data, and Python for data processing and analysis.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Results</CardHeader>
          <CardContent>
            <p>Provided actionable insights into street design and safety improvements.</p>
            <p>Suggested changes to make streets more inclusive and accessible for all users, particularly in areas where accessibility was previously limited.</p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Future Applications</CardHeader>
          <CardContent>
            <p>
              The AI models developed in this project can be applied to other regions to assess and improve street safety and accessibility in urban and rural environments globally.
            </p>
            <p>
              In addition, the data and models can be used to support smart city initiatives aimed at making urban areas more sustainable and inclusive.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Impact</CardHeader>
          <CardContent>
            <p>Improved street safety and accessibility in New Castle County, Delaware.</p>
            <p>Contributed valuable data to support the Complete Streets initiative and similar efforts across other regions.</p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Conclusion</CardHeader>
          <CardContent>
            <p>
              The Inclusive Innovation Street project demonstrated the power of AI and computer vision in enhancing urban infrastructure, improving safety, and increasing accessibility for all citizens.
            </p>
            <p>
              Moving forward, this AI-powered approach can be scaled to benefit numerous communities globally.
            </p>
          </CardContent>
        </Card>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default InnovationStreet;

// Styled Components

const PageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  overflow-x: hidden;
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

  &:hover {
    transform: scale(1.02);
  }
`;

const CardHeader = styled.h3`
  font-size: 1.8em;
  color: #2d87ff;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  p {
    font-size: 1.1em;
    color: #666;
    margin: 10px 0;
    text-align:justify;
  }
`;

const SubHeader = styled.h4`
  font-size: 1.3em;
  margin-top: 10px;
  color: #333;
`;
