import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ocr from '../images/ocrrr.jpeg';

// Keyframes for different animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Container for the OCR services section
const OCRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: white; /* Changed background to white */
  margin: 0;
`;

// Title styling
const Title = styled.h2`
  font-size: 2.5em;
  color: #2d87ff; /* Updated title color */
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;

// Card container with custom layout
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

// Individual card styling with unique animations
// Individual card styling for full-width and side-by-side cards
const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  animation: ${fadeIn} 1s ease-in-out;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #2d87ff; /* Change background color on hover */
  }

  &.full-width {
    flex: 0 0 100%;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    &.half-width {
      flex: 0 0 48%;
    }
  }
`;

// Card title styling with new hover color
const CardTitle = styled.h3`
  font-size: 1.5em;
  color: #eeb624; /* Changed card title color */
  margin-bottom: 15px;
  text-align: center;
`;

// Card content styling for list items
const CardContent = styled.p`
  font-size: 1em;
  color: black; /* Changed text color of list items */
  line-height: 1.6;
  text-align: justify;

  ul li {
    color: black; /* Ensure list items are initially black */
    transition: color 0.3s ease-in-out, font-size 0.3s ease-in-out;

    b {
      color: green; /* Keep bold text green initially */
    }

    &:hover {
      color: white; /* Change list item text color to white on hover */

      b {
        color: #eeb624; /* Change bold text color on hover */
      }
      font-size: 1.1em; /* Increase font size slightly on hover */
    }
  }
`;



// Image styling for OCR-related images
const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

// Separate section for Applications of OCR (outside of cards)
const ApplicationsSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #eeb624; /* Change background color on hover */
    cursor:pointer;
    }
`;

const ApplicationsTitle = styled.h3`
  font-size: 1.8em;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const ApplicationsContent = styled.p`
  font-size: 1em;
  color: #2d87ff;
  line-height: 1.6;
  text-align: justify;
`;

const OCR = () => {
  return (
    <div>
      <Header />
      <OCRContainer>
        <Title>OCR Services: Transform Your Documents into Digital Data</Title>
        <CardContainer>
          {/* Card 1: Full-width Why Choose Us */}
          <Card className="full-width">
            <CardTitle>Why Choose Us</CardTitle>
            <CardContent>
              <ul>
                <li><b style={{color:'green'}}>High Accuracy & Precision: </b>Utilizing advanced OCR technology, we ensure high accuracy in text recognition, even from complex and low-quality documents.</li>
                <li><b style={{color:'green'}}>Versatile Document Processing: </b> Our OCR services can handle a wide range of document types, including invoices, forms, contracts, handwritten notes, and more.</li>
                <li><b style={{color:'green'}}>Multilingual Support: </b> We support OCR for multiple languages, enabling you to process documents in various languages without any hassle.</li>
                <li><b style={{color:'green'}}>Time & Cost Efficiency: </b>Automating the data extraction process saves time and reduces the costs associated with manual data entry and management.</li>
                <li><b style={{color:'green'}}>Secure & Confidential: </b>We prioritize data security and confidentiality, ensuring that your documents are processed and stored with the highest standards of protection.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 2: Half-width Key Features */}
          <Card className="half-width">
            <CardTitle>Key Features</CardTitle>
            <CardContent>
              <ul>
                <li><b style={{color:'green'}}>Batch Processing: </b>Convert large volumes of documents in a single batch, optimizing your workflow and minimizing downtime.</li>
                <li><b style={{color:'green'}}>Advanced Image Processing: </b>Our OCR service includes image enhancement features like de-skewing, noise reduction, and contrast adjustment to improve recognition accuracy.</li>
                <li><b style={{color:'green'}}>Customizable Output: </b>Receive your extracted data in various formats including text files, PDFs, Excel sheets, and more, tailored to fit your specific needs.</li>
                <li><b style={{color:'green'}}>Integration Ready: </b>Easily integrate our OCR services into your existing software and workflows, enabling seamless data transfer and automation.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 3: Half-width Image Card */}
          <Card className="half-width">
            <ImageContainer>
              <img src={ocr} alt="OCR" />
            </ImageContainer>
          </Card>
        </CardContainer>

        {/* Separate Applications Section */}
        <ApplicationsSection>
          <ApplicationsTitle>Applications of OCR</ApplicationsTitle>
          <ApplicationsContent>
            <ul>
              <li><b style={{color:'green'}}>Invoice Processing: </b>Automatically extract and input invoice data into your accounting software.</li>
              <li><b style={{color:'green'}}>Document Digitization: </b>Convert physical archives into searchable digital databases.</li>
              <li><b style={{color:'green'}}>Form Data Extraction: </b>Simplify the process of extracting data from forms and surveys for quick analysis.</li>
              <li><b style={{color:'green'}}>Legal Document Management: </b>Digitize contracts, legal briefs, and other documents for easier access and retrieval.</li>
            </ul>
          </ApplicationsContent>
        </ApplicationsSection>
      </OCRContainer>
      <Footer />
    </div>
  );
};

export default OCR;
