import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import officeImage from '../images/office1.jpg'
const Container = styled.div`
  // padding: 40px;
  text-align: center;
  // background:#2d87ff;
  // background-image: url(${officeImage}); /* Add your image URL here */
  background-size: cover;
  background-position: center;
  width:100%;
  
  // color: #fff; /* White text for better contrast on images */
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  // color:white;
`;

const Section = styled.div`
  margin-bottom: 40px;
  background:green/* Semi-transparent background */
  padding: 20px;
  border-radius: 10px;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
  color:white;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  
`;

const ApplyButton = styled.button`
  background-color:  #eeb624;
  color: #2d87ff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #2d87ff;
    color: #eeb624;
  }
`;
const handleApplyClick = () => {
  window.location.href = 'https://www.linkedin.com/company/nimir-corporation/posts/?feedView=all'; // Replace with your LinkedIn URL or job application URL
};

const Careers = () => {
  return (
    <div>
      <Header />
      <Container>
        <Title style={{color:'#eeb624',background:' #2d87ff',height:'100px',padding:'30px'}}>Careers At Our Company</Title>

        {/* Section 1: Introduction */}
        <Section>
          <Subtitle style={{color:'#2d87ff'}}>Why Work with Us?</Subtitle>
          <Description>
            Join a forward-thinking team that’s passionate about innovation, collaboration, and building exceptional products. We value growth, creativity, and work-life balance, offering a dynamic environment where you can thrive.
          </Description>
        </Section>

        {/* Section 2: Diversity Statement */}
        <Section>
          <Description>
            “As a company that embraces diversity and inclusion, we recognize and celebrate the unique qualities, backgrounds, and perspectives of our employees. We believe that fostering an environment of collaboration and respect drives innovation and inspires positive change.”
            <br />
            <ApplyButton  onClick={handleApplyClick}>Apply Now</ApplyButton>
          </Description>
        </Section>

        {/* Section 3: Employee Benefits */}
        <Section>
          <Subtitle style={{color:'#2d87ff'}}>Employee Benefits</Subtitle>
          <Description style={{width:'100%',textAlign:'center'}}>
            We offer competitive salaries, comprehensive health insurance, retirement plans, and flexible working conditions to support your personal and professional needs.
          </Description>
        </Section>

        {/* Section 4: Company Culture */}
        <Section>
          <Subtitle style={{color:'#2d87ff'}}>Our Company Culture</Subtitle>
          <Description>
            At our company, we foster a culture of diversity, inclusivity, and collaboration. You’ll work with a passionate team and have opportunities for career development, continuous learning, and creative freedom.
          </Description>
        </Section>
      </Container>
      <Footer />
    </div>
  );
};

export default Careers;
