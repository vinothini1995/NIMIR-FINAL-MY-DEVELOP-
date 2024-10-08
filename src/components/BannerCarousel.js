import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { Typography, Box, Button } from '@mui/material';
import banner1 from '../images/Cloud.png';
import banner2 from '../images/Empower.png';
import banner3 from '../images/Unlocking.png';
import banner4 from '../images/Cybersecurity.png';
import banner5 from '../images/arch.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const FullWidthContainer = styled('div')({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `url(${require('../images/blue.jpg')}) no-repeat center center`,
  backgroundSize: 'cover',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
});

const SliderWrapper = styled(Box)({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out', // Smooth transition for sliding effect
  width: '100%',
  height: '100%',
});

const Slide = styled(Box)({
  minWidth: '100%', // Each slide takes full width
  display: 'flex',
  flexDirection: 'row', // Images and content side by side
  alignItems: 'center',
  justifyContent: 'center',

  '@media (max-width: 960px)': {
    flexDirection: 'column', // Stack image and content vertically on smaller screens
  },
});

const CarouselImage = styled('img')({
  height: '100%',
  width: '100%',
  maxWidth: '600px',
  objectFit: 'cover',
  borderRadius: '5px',
  transition: 'transform 0.5s ease-in-out',

  '&:hover': {
    transform: 'scale(1.05)',
  },

  '@media (max-width: 960px)': {
    maxWidth: '90%',
  },

  '@media (max-width: 600px)': {
    maxWidth: '80%',
  },
});

const StyledHeading = styled(Typography)(({ theme }) => ({
  marginBottom: '15px',
  fontSize: '3rem',
  color: '#eeb624',

  '@media (max-width: 1200px)': {
    fontSize: '2.5rem',
  },

  '@media (max-width: 960px)': {
    fontSize: '2rem',
    textAlign: 'center',
  },

  '@media (max-width: 600px)': {
    fontSize: '1.5rem',
    textAlign: 'center',
  },
}));

const StyledParagraph = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  lineHeight: 1.5,
  color: 'white',
  textAlign: 'justify',

  '@media (max-width: 1200px)': {
    fontSize: '1.3rem',
  },

  '@media (max-width: 960px)': {
    fontSize: '1.2rem',
    textAlign: 'center',
  },

  '@media (max-width: 600px)': {
    fontSize: '1rem',
    textAlign: 'center',
  },
}));

const ResponsiveButton = styled(Button)({
  marginTop: '20px',
  fontSize: '18px',
  width: '200px',
  height: '50px',
  borderRadius: '30px',
  padding: '10px 20px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #eeb624',
  color: '#eeb624',
  transition: 'background-color 0.3s ease, color 0.3s ease',

  '&:hover': {
    backgroundColor: '#eeb624',
    color: 'black',
  },

  '@media (max-width: 960px)': {
    width: '180px',
    fontSize: '16px',
    height: '45px',
  },

  '@media (max-width: 600px)': {
    width: '160px',
    fontSize: '14px',
    height: '40px',
  },
});

const BannerCarousel = () => {
  const navigate = useNavigate();

  const banners = [
    {
      image: banner1,
      heading: 'Cloud Native AI for Business',
      link: '/casestudy/CloudNative',
      text: 'Envision creating a smart application that continuously learns, adapts, & evolves—without the burden of managing intricate infrastructure. This is the advantage of Cloud Native Artificial Intelligence (CNAI).',
    },
    {
      image: banner2,
      heading: 'Empower Innovation:',
      link: 'casestudy/Empower',
      text: 'Unleash AI with Low-Code/No-Code Platform—No Expertise Required! Build AI models with a unique no-code approach, Create Business Impact with AI-backed decisions.',
    },
    {
      image: banner3,
      heading: 'Unlocking Enterprise Success:',
      link: 'casestudy/Unlocking',
      text: 'How MLOps Accelerates AI-Driven Wins. We introduce the End-to-End Data Science Lifecycle Process.',
    },
    {
      image: banner4,
      heading: 'Elevating Cybersecurity:',
      link: 'casestudy/CasestudyCS',
      text: 'Integrating RCSA Controls into AI and Generative AI Systems for Enhanced Risk Management.',
    },
    {
      image: banner5,
      heading: 'Architecting Excellence:',
      link: 'casestudy/Architech',
      text: 'Crafting a Robust Analytics and AI Framework with Amazon Web Services.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [banners.length]);

  const handleLearnMoreClick = () => {
    navigate(banners[currentIndex].link); // Use navigate
  };

  return (
    <FullWidthContainer>
      <SliderWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {banners.map((banner, index) => (
          <Slide key={index}>
            <Box
              flex={1}
              padding="20px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              maxWidth="700px"
              width="100%"
            >
              <StyledHeading variant="h2">{banner.heading}</StyledHeading>
              <StyledParagraph variant="body1">{banner.text}</StyledParagraph>
              <ResponsiveButton onClick={handleLearnMoreClick}>Learn More</ResponsiveButton>
            </Box>
            <Box
              flex={1}
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              maxWidth="600px"
            >
              <CarouselImage src={banner.image} alt={`Slide ${index + 1}`} />
            </Box>
          </Slide>
        ))}
      </SliderWrapper>
    </FullWidthContainer>
  );
};

export default BannerCarousel;
