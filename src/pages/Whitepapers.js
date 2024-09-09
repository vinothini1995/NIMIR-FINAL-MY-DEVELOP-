import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imageextraction from '../images/geospetaial.webp';
import imagepreprocessing from '../images/geospetail image preprocessing.jpg';
import imageannotation from '../images/annotation.jpg';
import maskgeneration from '../images/mask.jpg';
import imageaugmentation from '../images/augumentation.jpg';
import ModelTraining from '../images/model training.png';
import modelvalidation from '../images/model validation.webp';
import modeldeployment from '../images/depp.jpg';
const WhitePaperContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // padding: 20px;
  overflow-x: hidden; /* Prevent horizontal scrolling */
`;

const TitlePage = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  // margin: 0;
  background: #2d87ff;
  color: #eeb624;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-top: 10px;
`;

const Author = styled.p`
  font-size: 1.1em;
`;

const SectionTitle = styled.h3`
  font-size: 1.5em;
  margin-top: 0;
  background: #2d87ff;
  color: #eeb624;
  padding: 10px;
  border-radius: 5px;
`;

const Content = styled.div`
  font-size: 1.1em;
  line-height: 1.6;
  text-align: justify;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%; /* Ensure full width */
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Adjust for smaller screens */
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr; /* One column on very small screens */
  }
`;

const Card = styled.div`
  border: 2px solid #2d87ff;
  border-radius: 8px;
  padding: 20px;
  margin:10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
    cursor:pointer;
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 15px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  // border: 2px solid blue;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  font-size: 1.5em;
  margin-top: 20px;
  background: #2d87ff;
  color: #eeb624;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

const CardContent = styled.p`
  font-size: 1.1em;
  text-align: justify;
  margin-top: 15px;
`;

const FooterWrapper = styled.div`
  margin-top: auto;
`;

const WhitePapers = () => {
  return (
    <div>
      <Header />
      <WhitePaperContainer>
        <TitlePage>
          <Title>Innovative Inclusive Street Data</Title>
          <Subtitle>For Complete Street Project</Subtitle>
          <Author>Leveraging AI, ML, LLMs, Gen AI, and Computer Vision Technologies</Author>
        </TitlePage>

        <Card>
          <SectionTitle>Abstract or Executive Summary</SectionTitle>
          <Content>
            <p>The Complete Street project in New Castle County, Delaware, aims to enhance roadway design by leveraging advanced data collection and analysis techniques. This region was chosen due to its diverse urban and suburban environments, including areas like Wilmington, Newark, and Middletown.</p>
            <p>One of the key challenges is addressing the gap in existing USDOT datasets. The project employs innovative steps beginning with geospatial image extraction using Google Street View APIs, based on public datasets coordinates.</p>
            <p>Image annotations are performed using tools like VOTT and LabelME to manually identify and mark road features. This process culminates in actionable insights that enhance the safety and efficiency of streets.</p>
          </Content>
        </Card>

        <Card>
          <SectionTitle>Introduction</SectionTitle>
          <Content>
            <p>The Complete Street project designs roadways that accommodate all users, including pedestrians, cyclists, motorists, and transit riders. These projects enhance mobility, reduce traffic accidents, and improve quality of life.</p>
            <p>To tackle challenges, AI, ML, and CV technologies are integrated into the project. These technologies process large datasets efficiently, identifying patterns to inform design and policy decisions.</p>
          </Content>
        </Card>

        <ImageGrid>
          <Card>
            <CardImage src={imageextraction} alt="Geospatial Image Extraction" />
            <CardTitle>Geospatial Image Extraction</CardTitle>
            <CardContent>
              Geospatial images are extracted using Google Street View APIs based on coordinates from public datasets to initiate the data collection process.
            </CardContent>
          </Card>

          <Card>
            <CardImage src={imagepreprocessing} alt="Geospatial Image Pre-Processing" />
            <CardTitle>Geospatial Image Pre-Processing</CardTitle>
            <CardContent>
              Geospatial images are pre-processed to enhance image quality and correct distortions, ensuring suitability for further analysis.
            </CardContent>
          </Card>

          <Card>
            <CardImage src={imageannotation} alt="Geospatial Image Annotation" />
            <CardTitle>Geospatial Image Annotation</CardTitle>
            <CardContent>
              Road features are manually annotated using tools like VOTT and LabelME, marking lanes, traffic signs, and crosswalks for model training.
            </CardContent>
          </Card>

          <Card>
            <CardImage src={maskgeneration} alt="Mask Generation" />
            <CardTitle>Mask Generation</CardTitle>
            <CardContent>
              Masks are generated to identify different objects in images, aiding in improving the accuracy of machine learning models.
            </CardContent>
          </Card>

          <Card>
            <CardImage src={imageaugmentation} alt="Image Augmentation" />
            <CardTitle>Image Augmentation</CardTitle>
            <CardContent>
              Techniques like rotation, scaling, and cropping are applied to augment the dataset, improving the robustness of the ML models.
            </CardContent>
          </Card>

          <Card>
            <CardImage src={ModelTraining} alt="Model Training" />
            <CardTitle>Model Training</CardTitle>
            <CardContent>
              Machine learning models are trained using processed and augmented images to predict road features and improve street design.
            </CardContent>
          </Card>

          <Card>
            <CardImage src={modelvalidation} alt="Model Validation" />
            <CardTitle>Model Validation</CardTitle>
            <CardContent>
              Validation ensures that the trained models accurately analyze new data, providing reliable insights for the Complete Street project.
            </CardContent>
          </Card>
          <Card>
            <CardImage src={modeldeployment} alt="Model Validation" />
            <CardTitle>Model Deployment</CardTitle>
            <CardContent>
            The process of taking a trained machine learning model and integrating it into a production environment where it can make real-time predictions and provide actionable insights for applications.            </CardContent>
          </Card>
          
        </ImageGrid>
        <Card>
          
            <SectionTitle>Data Privacy and Ethical Considerations</SectionTitle>
            <Content>
              <p>Integrating AI, ML, and CV technologies into Complete Street projects necessitates a comprehensive examination of data privacy and ethical considerations. These technologies require extensive data collection, including video footage, images, and sensor data.</p>
              <p>To safeguard individuals' privacy, it is imperative to employ robust data anonymization and encryption techniques. Compliance with relevant regulations, such as GDPR and CCPA, is crucial.</p>
            </Content>
          </Card>

          <Card>
            <SectionTitle>Stakeholder Engagement and Community Feedback</SectionTitle>
            <Content>
              <p>The successful implementation of Complete Street projects hinges on active engagement and collaboration with a broad range of stakeholders, including government agencies, local authorities, urban planners, and the community.</p>
              <p>Engaging residents, business owners, and other local stakeholders through public consultations, workshops, and surveys provides valuable insights into community needs and preferences.</p>
            </Content>
          </Card>
          
          
        


        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </WhitePaperContainer>
    </div>
  );
};

export default WhitePapers;
