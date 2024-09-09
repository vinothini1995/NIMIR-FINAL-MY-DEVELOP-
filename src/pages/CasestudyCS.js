import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CasestudyCS = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <SectionTitle data-aos="fade-up" style={{background:'#2d87ff',color:' #eeb624'}}>Elevating Cybersecurity: Integrating RCSA Controls into AI and Generative AI Systems for Enhanced Risk Management</SectionTitle>

        <Card data-aos="fade-right">
          <CardHeader>Applying Technology RCSA Cybersecurity Controls</CardHeader>
          <CardContent>
            <p>
              This case study presents a comprehensive approach to applying RCSA (Risk Control Self-Assessment) cybersecurity controls to Artificial Intelligence (AI) and Generative AI (GAI) systems within Banking and Financial Services. The ultimate goal is to establish a tailored cybersecurity controls framework that addresses AI/GAI-specific risks, fostering robust governance and security.
            </p>
            <p>
              Key outcomes include the development of a cybersecurity controls checklist, policy, procedures, and communication protocols for control owners, helping refine the application of best practices in AI and GAI cybersecurity.
            </p>
            <SubHeader>Additional Considerations</SubHeader>
            <p>
              It's essential to consider the evolving nature of cyber threats and how they might affect AI systems. Regular updates to the control frameworks and active monitoring of emerging threats are crucial for maintaining a secure environment.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Phase 1: Research and Review of AI/GAI Controls</CardHeader>
          <CardContent>
            <p>
              The first phase focuses on gathering authoritative sources on AI/GAI cybersecurity risks and best practices, such as:
            </p>
            <ul>
              <li>NIST AI RMF 1.0</li>
              <li>NIST AI.600.1 Gen AI Profile</li>
              <li>FS-ISAC – Responsible AI Principles and Adversarial Framework</li>
              <li>US Treasury EO on Cybersecurity</li>
              <li>OWASP LLM Security Governance Checklist 1.1.10</li>
              <li>CRI FS Profile 2.0, Cloud Extension 2.0</li>
            </ul>
            <p>
              The objective is to map RCSA controls to the AI/GAI risk management framework by reviewing authoritative guidance.
            </p>
            <SubHeader>Insights and Findings</SubHeader>
            <p>
              Early findings from this phase highlight the need for specialized controls tailored to the unique challenges posed by AI and GAI systems. The integration of these controls into existing frameworks will help address specific vulnerabilities and enhance overall security.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Phase 2: Identifying Potential RCSA Controls for AI Risk Mitigation</CardHeader>
          <CardContent>
            <ul>
              <li>Defining AI/GAI vulnerabilities, threats, risks, and mitigations.</li>
              <li>Providing a detailed overview of potential attacks on RCSA cybersecurity controls specific to AI/GAI.</li>
              <li>Mapping RCSA controls to AI/GAI authoritative guidance and evaluating control effectiveness.</li>
              <li>Developing a security checklist to be incorporated into the control change management process, ensuring AI-informed controls are in place.</li>
            </ul>
            <SubHeader>Risk Mitigation Strategies</SubHeader>
            <p>
              Effective risk mitigation strategies include regular vulnerability assessments, threat modeling, and the implementation of proactive measures to address identified risks. Leveraging automation and AI-based tools can enhance the efficiency of these strategies.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Phase 3: Development of AI-Specific Policies, Procedures, and Controls</CardHeader>
          <CardContent>
            <ul>
              <li>Refinement of checklists for control management and AI/GAI risk mitigation.</li>
              <li>Reviewing and updating proposed policies and desktop guides for control owners.</li>
              <li>Facilitating the integration of updated procedures that reflect AI/GAI-specific cybersecurity requirements.</li>
            </ul>
            <SubHeader>Policy Implementation</SubHeader>
            <p>
              The implementation of AI-specific policies should involve training for control owners and regular audits to ensure compliance. Establishing a feedback loop for continuous improvement will help address any gaps and adapt to evolving threats.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Conclusion: Securing AI/GAI Systems with RCSA Controls</CardHeader>
          <CardContent>
            <p>
              Integrating RCSA cybersecurity controls into AI/GAI frameworks is crucial for mitigating evolving risks in AI-driven environments. By aligning with established cybersecurity standards and continuously refining policies, financial services can ensure robust protection for AI/GAI systems.
            </p>
            <SubHeader>Future Directions</SubHeader>
            <p>
              Future directions include exploring emerging technologies and frameworks to enhance AI/GAI security further. Staying ahead of potential threats through innovation and proactive measures will be key to maintaining a secure AI ecosystem.
            </p>
          </CardContent>
        </Card>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default CasestudyCS;

// Styled Components

const PageWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  // padding: 20px;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  // max-width: 1200px;
  margin: 0 auto;
  // padding: 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;
    height:100px;
     @media (max-width: 1024px) {
    font-size: 2em; // Medium screens (tablets)
  }
   
      @media (max-width: 768px) {
    font-size: 1.2em; // Small screens (portrait tablets and large phones)
      text-align:justify;
     padding:5px;
    }
     @media (max-width: 320px) {
    font-size: 1.2em; // Extra small phones
     text-align:justify;
     padding:5px;
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
  color: #007bff;
  margin-bottom: 10px;
  @media (max-width: 320px) {
    font-size: 1.2em; // Extra small phones
    text-align:justify;
    }
`;

const CardContent = styled.div`
  p, ul {
    font-size: 1.1em;
    color: #666;
    margin: 10px 0;
    text-align:justify;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
     @media (max-width: 320px) {
    font-size: 1.2em; // Extra small phones
    text-align:justify;
    }
`;

const SubHeader = styled.h4`
  font-size: 1.3em;
  margin-top: 10px;
  color: #333;
`;
