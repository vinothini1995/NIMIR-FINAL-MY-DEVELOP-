import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'aos/dist/aos.css';
import AOS from 'aos';
import IIS from '../images/innovation.jpg';
import CN from  '../images/cloudnativecase.avif';
import EMP from '../images/empowerinnovation.webp';
import UNLOCK from '../images/unlockingenter.jpg' ;
import CB from '../images/cybersecuritycase.jpg';
import AE from '../images/architechcase.avif';
import Header from '../components/Header';
import Footer from '../components/Footer';
AOS.init();

const cardsData = [
  {
    id: 1,
    title: 'Inclusive Innovation Street ',
    content: 'The integration of Artificial Intelligence (AI), Machine Learning (ML), and Computer Vision (CV) technologies offers promising solutions. AI and ML can process vast amounts of data efficiently, identifying patterns and predicting outcomes that inform better design and policy decisions.',
    image: IIS,
    path: '/casestudy/InnovationStreet',
  },
  {
    id: 2,
    title: 'Cloud Native AI For Bussiness',
    content:'Envision creating a smart application that continuously learns, adapts, and evolves—without the burden of managing intricate infrastructure. This is the advantage of Cloud Native Artificial Intelligence (CNAI).',
   image: CN,
    path: '/casestudy/CloudNative',
  },
  {
    id: 3,
    title: 'Empower Innovation: Unleash AI with Low-Code/No-Code Platform—No Expertise Required!',
    content:'Build AI models with unique no code approach, Create Business Impact with AI backed decisions',
    image: EMP,
    path: '/casestudy/Empower',
  },
  {
    id: 4,
    title: 'Unlocking Enterprise Success: How MLOps Accelerates AI-Driven Wins',
    content: 'We introduce the End-to-End Data Science Lifecycle Process.Discover how MLOps empowers enterprises to seamlessly integrate machine learning models into their operations, ensuring faster deployment, efficient scaling, and continuous innovation for AI-driven success.',
    image: UNLOCK,
    path: '/casestudy/Unlocking',
  },
  {
    id: 5,
    title: 'Elevating Cybersecurity: Integrating RCSA Controls into AI and Generative AI Systems for Enhanced Risk Management',
    content: 'We ensure to complete and compile a comprehensive overview of potential AI and Generative AI attacks on RCSA cybersecurity controls. By meticulously analyzing vulnerabilities and integrating advanced threat detection, we bolster your risk management strategy and safeguard your digital infrastructure against evolving cyber threats.',
    image: CB,
    path: '/casestudy/CasestudyCS',
  },
  {
    id: 6,
    title: 'Architecting Excellence: Crafting a Robust Analytics and AI Framework with Amazon Web Services',
    content: 'Architecting Excellence with Amazon Web Services empowers us to design resilient, scalable solutions that align with cybersecurity best practices. Leveraging AWS advanced tools, we integrate robust security measures into AI frameworks for a secure and efficient cloud environment.',
    image: AE,
    path: '/casestudy/Architech',
  },
];

const Casestudy = () => {
  const navigate = useNavigate();

  const handleLearnMore = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Header/>
      <HeadingSection>
      <h2 style={{textAlign:'justify',background:' #2d87ff',color:'#eeb624',height:'100px'}}>Discover our case studies to see how we address complex challenges with innovative solutions. Each study highlights our approach and the impact of our work.</h2>
      </HeadingSection>
    <CardGrid>
      {cardsData.map((card) => (
        <Card key={card.id} data-aos="fade-up">
          <Image src={card.image} alt={card.title} />
          <Content>
            <Header1>{card.title}</Header1>
            <Paragraph style={{textAlign:'justify'}}>{card.content}</Paragraph>
            <LearnMoreButton onClick={() => handleLearnMore(card.path)}style={{background:'#2d87ff',color:' #eeb624'}}>
              Learn More
            </LearnMoreButton>
          </Content>
        </Card>
      ))}
    </CardGrid>
    <Footer/>
    </div>
  );
};

export default Casestudy;

// Styled Components

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #f4f4f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const Header1 = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const Paragraph = styled.p`
  color: #666;
  font-size: 1em;
  margin: 10px 0;
`;

const LearnMoreButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;
const HeadingSection = styled.section`
  text-align: center;
  background: #2d87ff;
  color: #eeb624;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px ;

  h2 {
    font-size: 1.2em;
    margin: 0;
  }

  @media (max-width: 375px) {
    height: 100px;
   
    
    h2 {
      font-size: 0.9em;
      // color:red!important;
        margin:8px;
  
    }
  }
     @media (max-width: 425px) {
    height: 100px;
   
    
    h2 {
      font-size: 0.9em;
      // color:green!important;
        margin:8px;
  
    }
  }
    @media (max-width: 768px) {
    height: 100px;
   
    
    h2 {
      font-size: 0.9em;
      // color:yellow!important;
        margin:8px;
  
    }
  }
    @media (max-width: 1024px) {
    height: 100px;
   
    
    
  }
   
`;

