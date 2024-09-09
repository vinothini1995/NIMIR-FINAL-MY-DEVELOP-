import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCheckCircle, faRocket, faCogs } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExpandingCards from './ExpandingCards';

const Card = ({ icon, title, content }) => (
  <Paper
    elevation={3}
    sx={{
      padding: '20px',
      textAlign: 'center',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
        cursor:'pointer',
      }
    }}
  >
    <FontAwesomeIcon icon={icon} size="3x" style={{ marginBottom: '10px', color: '#1976d2' }} />
    <Typography variant="h5" gutterBottom sx={{ marginBottom: '10px', color: '#eeb624' }}>
      {title}
    </Typography>
    <Typography
      variant="body1"
      gutterBottom
      sx={{ marginBottom: '10px', color: '#1976d2', textAlign: 'justify' }}
    >
      {content}
    </Typography>
  </Paper>
);

const EAI = () => {
  return (
    <div>
      <Header />
      <Box sx={{ width: '100%', bgcolor: '#2d87ff', color: 'white', padding: '40px 0', textAlign: 'center' }}>
      <Typography
      variant="h3"
      gutterBottom
      sx={{ color: 'white' }} // Change this color to whatever you want
    >
      Empowering AI Solutions
    </Typography>
        <Typography variant="h4" gutterBottom
      sx={{ color: '#eeb624' }}  >
          Innovative AI Strategies for Tomorrow’s Enterprise
        </Typography>
      </Box>
      <Box
    sx={{
      width: '75%',
      padding: '20px 0',
      margin: '10px auto', // Center the box
      border: '1px solid #1976d2', // Border color
      borderRadius: '8px', // Rounded corners
      backgroundColor: '#f5f5f5', // Light background color
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for depth
      transition: 'all 0.3s ease', // Smooth transition
      '&:hover': {
        backgroundColor: '#e3f2fd', // Change background color on hover
        borderColor: '#0d47a1', // Darker border color on hover
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)' // Enhanced shadow on hover
      }
    }}
  >
    <Typography
      variant="h5"
      align="center"
      sx={{
        color: '#333', // Text color
        marginBottom: '20px', // Margin at the bottom
        fontWeight: 'bold' // Bold text
      }}
    >
      Our team at InnovateAI has been at the forefront of AI advancements, partnering with leading organizations to harness the power of artificial intelligence...
    </Typography>
  </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card
            icon={faChartLine}
            title="AI Strategy & Roadmap"
            content="Our AI experts develop a comprehensive strategy aligned with your business goals by identifying use cases and defining a roadmap that capitalizes on high-impact AI initiatives."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            icon={faCheckCircle}
            title="Feasibility & Validation"
            content="We assess your existing workflows, infrastructure, technology stack, and data availability to analyze your readiness for integrating AI into your company."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            icon={faRocket}
            title="Rapid Prototypes"
            content="We create interactive prototypes that showcase the accuracy, reliability, and efficiency of custom AI and ML solutions, allowing you to confidently embrace the potential of AI."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            icon={faCogs}
            title="AI Implementation"
            content="Seamlessly integrate AI solutions into your existing systems to enhance operational efficiency."
          />
        </Grid>
      </Grid>
       <Box
    sx={{
      width: '75%',
      bgcolor: 'silver',
      padding: '20px',
      textAlign: 'center',
      margin: '0 auto', // Center the box horizontally
      marginTop: '15px',
      border: '1px solid #1976d2', // Border color
      borderRadius: '8px', // Rounded corners
      backgroundColor: '#f5f5f5', // Light background color
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for depth
      transition: 'all 0.3s ease', // Smooth transition
      '&:hover': {
        backgroundColor: '#e3f2fd', // Change background color on hover
        borderColor: '#0d47a1', // Darker border color on hover
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)' // Enhanced shadow on hover
      }
    }}
  >
    <Typography
      variant="h4"
      gutterBottom
      sx={{
        color: '#eeb624', // Text color
        marginBottom: '20px', // Margin at the bottom
        fontWeight: 'bold' // Bold text
      }}
    >
      Navigating the AI Revolution with Confidence
    </Typography>
    <Typography
      variant="body1"
      sx={{
        color: '#333', // Text color
        textAlign: 'justify' // Justify text alignment
      }}
    >
      Embracing AI and machine learning technologies is a complex journey. We provide the expertise needed to navigate this landscape. Our team guides you through every step, from exploring initial possibilities to developing prototypes and implementing impactful solutions, ensuring that your organization fully leverages AI's transformative power.
    </Typography>
  </Box>
      <ExpandingCards />
      <Footer />
    </div>
  );
};

export default EAI;