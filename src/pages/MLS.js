import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBusinessTime, faDraftingCompass, faCloud } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
};

const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 20px;
  background-color: white;
`;

const TextOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #2d87ff;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0;
  padding: 10px;
  font-size: 55px;
  color: white;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 10px;
  font-size: 20px;
  color: #eeb624;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;  
  margin: 20px;
  text-align: center;
  justify-content: center; /* Centers the content horizontally */

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: center; /* Ensure it stays centered on medium devices */
  }
`;

const Section = styled.div`
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: calc(50% - 20px);
  height: 35%;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    cursor:pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%; /* Full width on smaller screens */
    height: auto;
  }

  @media (min-width: ${breakpoints.medium}) and (max-width: ${breakpoints.tablet}) {
    width: 80%; /* Reduce width for medium devices */
    margin: 0 auto; /* Center the section */
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 24px;
  color: #2d87ff;
`;

const Heading = styled.h4`
  margin: 0;
  font-size: 20px;
  color: #eeb624;
`;

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  color: #2d87ff;

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`;

const CircularContentSection = ({ heading, text }) => (
  <CircleSection>
    <SolutionHeading>{heading}</SolutionHeading>
    <SolutionText>{text}</SolutionText>
  </CircleSection>
);

const CircleSection = styled.div`
  min-height: 250px;
  border-radius: 20%;
  border: 2px solid green;
  padding: 20px;
  padding-top:54px;
  background-color: #fff;
  width: 100%;
  margin-top: 15px;
`;

const SolutionHeading = styled.h3`
  font-size: 18px;
  color: #eeb624;
`;

const SolutionText = styled.p`
  font-size: 16px;
  color: #2d87ff;
  text-align: justify;
`;

const ResponsiveContainer = styled.div`
  .row {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    .row {
      margin-top: 15px;
    }
  }

  @media (max-width: 576px) {
    .row {
      margin-top: 10px;
    }

    h1 {
      font-size: 24px;
    }

    h3 {
      font-size: 18px;
    }

    .col-md-6 {
      width: 100%;
      padding: 0;
    }
  }
`;

const Content1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
  text-align: center;
  justify-content: center;
`;

const Heading1 = styled.h2`
  margin: 0;
  font-size: 22px;
  color: #eeb624;
`;

const Paragraph1 = styled.p`
  margin: 0;
  font-size: 18px;
  color: #2d87ff;
  line-height: 1.5;
`;
const MLS = () => {
  return (
    <div>
      <Header />
      <Container>
        <TextOverlay>
          <Title>Machine Learning</Title>
          <Paragraph>
            Empowering businesses with Machine Learning: Embrace the future of AI-driven transformation and revolutionize your decision-making processes.
          </Paragraph>
        </TextOverlay>

        <Content>
          <h1 style={{ color: 'black' }}>Just A Few Reasons Why Machine Learning?</h1>

          <Section>
            <Icon icon={faUsers} />
            <div>
              <Heading>Handpicked Experts</Heading>
              <Text>Our team consists of experts who possess deep understanding and hands-on experience, making us stand out from the crowd of self-proclaimed ML professionals.</Text>
            </div>
          </Section>

          <Section>
            <Icon icon={faBusinessTime} />
            <div>
              <Heading>Business Case Mapping</Heading>
              <Text>NIMIR excels in the Machine Learning space with a perfect blend of theoretical and practical knowledge of ML techniques.</Text>
            </div>
          </Section>

          <Section>
            <Icon icon={faDraftingCompass} />
            <div>
              <Heading>Rapid Prototyping</Heading>
              <Text>Rapid prototyping is another area of our expertise, where we swiftly turn hypotheses into actionable predictions or results.</Text>
            </div>
          </Section>

          <Section>
            <Icon icon={faCloud} />
            <div>
              <Heading>Modern Architecture</Heading>
              <Text>Our team's proficiency enables us to develop scalable and reliable ML solutions that leverage the full potential of Cloud-based resources.</Text>
            </div>
          </Section>
        </Content>

        <ResponsiveContainer>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 style={{ color: 'black', textAlign: 'center' }}>Machine Learning Solutions</h1>
                <h3 style={{ color: '#eeb624', textAlign: 'center' }}>Unlock the power of data with our cutting-edge Machine Learning solutions:</h3>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-3 col-md-4'>
                <CircularContentSection
                  heading='Supervised Learning'
                  text='We use supervised learning to train our system with labeled data, allowing our algorithms to recognize patterns, predict outcomes, and enhance performance.'
                />
              </div>
              <div className='col-md-3 col-md-4'>
                <CircularContentSection
                  heading='Unsupervised Learning'
                  text='We leverage unsupervised learning to uncover hidden patterns and relationships within data without predefined labels.'
                />
              </div>
              <div className='col-md-3 col-md-4'>
                <CircularContentSection
                  heading='Semi-supervised Learning'
                  text='This approach combines a small amount of labeled data with a large amount of unlabeled data to enhance learning efficiency.'
                />
              </div>
              <div className='col-md-3 col-md-4'>
                <CircularContentSection
                  heading='Reinforcement Learning'
                  text='Reinforcement learning empowers systems to make decisions by rewarding desired actions and penalizing undesired ones.'
                />
              </div>
              <div className='col-md-3 col-md-4'>
                <CircularContentSection
                  heading='Transfer Learning'
                  text='Transfer learning enhances our models by leveraging knowledge gained from one task to improve performance on a related task.'
                />
              </div>
              <div className='col-md-3 col-md-4'>
                <CircularContentSection
                  heading='Ensemble Learning'
                  text='Ensemble learning combines multiple models to enhance prediction accuracy and robustness.'
                />
              </div>
            </div>
          </div>
        </ResponsiveContainer>
        
        <h1 style={{ color: 'black', textAlign: 'center', margin: "20px 0px" }}>Our Offerings: Machine Learning</h1>
        <Content1>
          <Section>
            <Heading1>Sentiment Analysis</Heading1>
            <Paragraph1 visible={true}>
              At NIMIR, we recognize that sentiment analysis is a game-changer in understanding customer emotions and feedback. By employing advanced machine learning techniques, we can derive valuable insights from textual data, enabling businesses to make informed decisions and enhance customer satisfaction.
            </Paragraph1>
          </Section>

          <Section>
            <Heading1>Predictive Analytics</Heading1>
            <Paragraph1 visible={true}>
              Predictive analytics is a cornerstone of our machine learning solutions. By analyzing historical data and applying sophisticated algorithms, we help businesses forecast future trends, optimize operations, and drive strategic planning.
            </Paragraph1>
          </Section>

          <Section>
            <Heading1>Natural Language Processing (NLP)</Heading1>
            <Paragraph1 visible={true}>
              NIMIR's expertise in Natural Language Processing (NLP) enables us to build solutions that understand and interpret human language. From chatbots to text analysis, our NLP capabilities drive innovation and improve user experiences.
            </Paragraph1>
          </Section>

          <Section>
            <Heading1>Image and Video Recognition</Heading1>
            <Paragraph1 visible={true}>
              Our machine learning solutions extend to image and video recognition, allowing us to develop systems that can identify objects, people, and patterns within visual content, enhancing security, automation, and user engagement.
            </Paragraph1>
          </Section>
        </Content1>

      </Container>
      <Footer />
    </div>
  );
};

export default MLS;
