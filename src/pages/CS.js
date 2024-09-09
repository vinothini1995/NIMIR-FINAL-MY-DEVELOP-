import React from 'react';
import styled from 'styled-components';
import { FaLock, FaChartLine } from 'react-icons/fa';
import Header from '../components/Header';
import cslastimg from '../images/cybersecuritylast.jpg';
import Footer from '../components/Footer';

const ContentWrapper = styled.div`
  padding: 50px 20px;
  background-color: white;
  color: #2d87ff;
  text-align: center;
  box-sizing: border-box; /* Ensure padding doesn’t cause overflow */
`;

const BGText = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #2d87ff;
  padding: 20px;
  border-radius: 10px;
  text-align: justify;
  margin-right: 20px;
  animation: fadeIn 2s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  p {
    color: black; /* Set the color of paragraphs to black */
  }
`;

const ImageWithText = styled.div`
  display: flex;
  flex-direction: column; /* Stack content vertically on smaller screens */
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  animation: slideLeft 1.5s ease-in-out;

  @keyframes slideLeft {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @media (min-width: 768px) {
    flex-direction: row; /* Display items side by side on larger screens */
    justify-content: space-between;
  }
`;

const LastImage = styled.img`
  width: 100%;
  max-width: 400px; /* Ensures image doesn’t grow too large */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px;
  animation: zoomIn 1.5s ease-in-out;

  @keyframes zoomIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;

const StrongText = styled.strong`
  color: #2d87ff;
  transition: color 0.3s ease-in-out; /* Ensure smooth transition for color */
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 90px;
  box-sizing: border-box; /* Ensure grid layout adapts to container width */
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #2d87ff;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
  animation: bounceIn 1s ease-in-out;

  @keyframes bounceIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #2d87ff; /* Change background color on hover */
    color: white; /* Change text color on hover */
    cursor: pointer;
  }

  &:hover p {
    color: white; /* Change paragraph text color on hover */
    font-size: 18px; /* Increase font size on hover */
  }

  &:hover ${StrongText} {
    color: black; /* Change StrongText color on hover */
  }

  h2 {
    font-size: 24px;
    color: #eeb624;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 8px;
      font-size: 30px;
    }
  }

  p {
    margin-top: 10px;
    color: #2d87ff;
    font-size: 16px;
    text-align: justify;
    transition: color 0.3s ease-in-out, font-size 0.3s ease-in-out; /* Ensure smooth transition for text color and size */
  }
`;

const CS = () => {
  return (
    <div style={{ background: 'white' }}>
      <Header />
      <ContentWrapper style={{ background: '#2d87ff' }}>
        <h1 style={{ color: 'white' }}>Why Cybersecurity is Crucial for Your Business</h1>
        <p style={{ color: '#eeb624', textAlign: 'justify', fontSize: '20px' }}>
          In an era where technology drives business innovation, the importance of cybersecurity cannot be overstated.
          As organizations increasingly rely on digital systems and data, the threat landscape grows more complex and pervasive.
          Here’s why cybersecurity is essential for every software company:
        </p>
      </ContentWrapper>

      <CardContainer>
        <Card>
          <h2><FaLock /> Why Cybersecurity Matters</h2>
          <p><StrongText>Protecting Sensitive Data:</StrongText> With the increasing volume of sensitive data being processed and stored, protecting this information from unauthorized access is critical. Our cybersecurity strategies ensure that your data remains confidential, integral, and available only to authorized users.</p>
          <p><StrongText>Preventing Financial Loss:</StrongText> Cyberattacks can lead to significant financial losses through theft, fraud, and operational disruptions. By implementing robust security measures, we help prevent potential financial damages and safeguard your bottom line.</p>
          <p><StrongText>Maintaining Customer Trust:</StrongText> Customers trust us with their data and expect that we handle it securely. Our proactive cybersecurity measures protect against breaches and instill confidence in your clients that their information is safe.</p>
          <p><StrongText>Ensuring Compliance:</StrongText> Regulations such as GDPR, CCPA, and HIPAA impose strict requirements on data protection. Our solutions help ensure compliance with these regulations, avoiding legal penalties and enhancing your reputation.</p>
        </Card>

        <Card>
          <h2><FaChartLine /> Why Choose Us?</h2>
          <p><StrongText>Expertise and Experience:</StrongText> Our team of cybersecurity experts has extensive experience in protecting businesses from a wide range of cyber threats. We stay ahead of the curve by continuously updating our knowledge and solutions.</p>
          <p><StrongText>Customized Solutions:</StrongText> We understand that each business has unique cybersecurity needs. Our tailored solutions address your specific requirements, ensuring optimal protection for your digital assets.</p>
          <p><StrongText>Proactive Approach:</StrongText> We take a proactive stance on cybersecurity, anticipating potential threats and implementing preventive measures before they become issues.</p>
          <p><StrongText>Comprehensive Support:</StrongText> Our support team is available around the clock to assist with any security concerns or incidents. We provide ongoing monitoring and maintenance to keep your systems secure.</p>
        </Card>
      </CardContainer>

      <ImageWithText>
        <BGText>
          <h2 style={{color:'#eeb624'}}>Cybersecurity: Protecting Your Digital Future</h2>
          <p>In the digital age, cybersecurity is not just a necessity but a strategic imperative. As a leading software company, we understand that safeguarding your digital assets from cyber threats is crucial to maintaining trust and ensuring business continuity. Our cybersecurity solutions are designed to provide comprehensive protection against evolving threats while helping you stay compliant with industry regulations.</p>
          <p>In today's interconnected world, the landscape of cyber threats is constantly evolving. At our software company, we are committed to enhancing your digital resilience through cutting-edge cybersecurity measures. By integrating advanced technologies and best practices, we ensure that your systems are fortified against the latest cyber threats. Our approach not only addresses immediate security concerns but also anticipates future challenges, providing you with a robust defense that adapts to the dynamic nature of the digital environment. Trust us to be your partner in safeguarding your digital assets and maintaining the integrity of your business operations.</p>
        </BGText>
        <LastImage src={cslastimg} alt="Cybersecurity" />
      </ImageWithText>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h6 style={{ color: '#2d87ff' }}>Ready to enhance your cybersecurity strategy? Contact us today to learn how we can help protect your digital assets and ensure a secure future for your business.</h6>
      </div>
      <Footer />
    </div>
  );
};

export default CS;
