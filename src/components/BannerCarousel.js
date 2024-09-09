import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { Typography, Box, Button } from '@mui/material';  // Import Button
import banner1 from '../images/Cloud.png';
import banner2 from '../images/Empower.png';
import banner3 from '../images/Unlocking.png';
import banner4 from '../images/Cybersecurity.png';
import banner5 from '../images/arch.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const FullWidthContainer = styled('div')({
  width: '100%',
  // height: '500px',
  minHeight: '100vh',  // Ensure full height of the viewport without vertical scrolling

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `url(${require('../images/blue.jpg')}) no-repeat center center`,
  backgroundSize: 'cover',
  margin: 0,
  padding: 0,
  overflowX: 'hidden',
  overflowY:'hidden',

  '@media (max-width: 1200px)': {
    // height: '400px',
    height: 'auto',
  },

  '@media (max-width: 960px)': {
    flexDirection: 'column',
    height: 'auto',
    padding: '20px',
  },

  '@media (max-width: 600px)': {
    height: 'auto',
    padding: '10px',
  },
});

const slideInKeyframes = {
  '@keyframes slideInFromLeft': {
    from: {
      transform: 'translateX(-100%)',
      opacity: 0,
    },
    to: {
      transform: 'translateX(0)',
      opacity: 1,
    },
  },
};

const AnimatedContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  animation: 'slideInFromLeft 1s ease-out',
  ...slideInKeyframes,

  '@media (max-width: 1200px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  '@media (max-width: 960px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const CarouselImage = styled('img')({
  height: '100%',
  width: '100%',
  maxWidth: '600px',
  objectFit: 'cover',
  borderRadius: '5px',
  transition: 'transform 0.5s ease-in-out',

  '@media (max-width: 1200px)': {
    maxWidth: '500px',
  },

  '@media (max-width: 960px)': {
    maxWidth: '400px',
  },

  '@media (max-width: 600px)': {
    maxWidth: '100%',
    height: 'auto',
  },

  '&:hover': {
    transform: 'scale(1.05)',
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
  },

  '@media (max-width: 600px)': {
    fontSize: '1rem',
    textAlign: 'center',
  },
}));

const BannerCarousel = () => {
  const navigate = useNavigate();  // Define navigate

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
      text: 'Integrating RCSA Controls into AI and Generative AI Systems for Enhanced Risk Management. We ensure to complete & compile an overview of potential AI/GAI attacks on RCSA cybersecurity controls.',
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
    navigate(banners[currentIndex].link);  // Use navigate
  };

  return (
    <div>
      <FullWidthContainer>
        <AnimatedContainer>
          <Box flex={1} padding="20px" display="flex" flexDirection="column" justifyContent="center" maxWidth="700px">
            <StyledHeading variant="h2">{banners[currentIndex].heading}</StyledHeading>
            <StyledParagraph variant="body1">{banners[currentIndex].text}</StyledParagraph>

            {/* Add Button */}
            <Button
              variant="outlined" // Change to outlined for an outline effect
              sx={{
                marginTop: '20px',
                fontSize: '18px',
                width: '200px',   // Set width
                height: '50px',   // Set height
                borderRadius: '30px',  // Rounded corners
                padding: '10px 20px',  // Padding inside the button
                margin: '0 auto',     // Center the button horizontally
                display: 'flex',       // Flexbox display to align and justify content
                alignItems: 'center',  // Center text vertically
                justifyContent: 'center', // Center text horizontally
                border: '2px solid #eeb624',  // Outline border
                color: '#eeb624',      // Initial text color
                transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for hover

                '&:hover': {
                  backgroundColor: '#eeb624', // Change background on hover
                  color: 'black',              // Change text color on hover
                },
              }}
              onClick={handleLearnMoreClick}
            >
              Learn More
            </Button>

          </Box>
          <Box flex={1} height="100%" display="flex" justifyContent="center" alignItems="center">
            <CarouselImage src={banners[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
          </Box>
        </AnimatedContainer>
      </FullWidthContainer>
    </div>
  );
};

export default BannerCarousel;
