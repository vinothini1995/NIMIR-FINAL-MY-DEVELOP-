import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Architech = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <SectionTitle data-aos="fade-up" style={{ background: '#2d87ff', color: '#eeb624' }}>
          Architecting Excellence: Crafting a Robust Analytics and AI Framework with Amazon Web Services
        </SectionTitle>

        <Card data-aos="fade-right">
          <CardHeader>Building a Secured Data and Analytics Architecture for AI</CardHeader>
          <CardContent>
            <p>
              We propose an architecture for AI use cases divided across four key domains: acquire, organize, analyze, and deliver. This architecture incorporates six subdomains, including data sources, ingestion, transformation, persistence, analytics, BI, and data science and ML. Governance, security, orchestration, and monitoring play vital roles across the entire architecture.
            </p>
            <p>
              This robust framework ensures that data is efficiently managed and analyzed while maintaining high standards of security and compliance. By adopting this architecture, organizations can achieve scalable and secure AI solutions that meet their specific needs.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Key Findings: AWS in Analytics and AI</CardHeader>
          <CardContent>
            <ul>
              <li>AWS offers a comprehensive range of services across analytics, ML, and AI domains.</li>
              <li>The multitude of available tools can make choosing the right one for each use case challenging.</li>
              <li>Self-service analytics capabilities are evolving, with serverless, federation, and no-code features empowering BI analysts and citizen data scientists.</li>
              <li>QuickSight and SageMaker are maturing with features for embedded analytics and augmented capabilities.</li>
              <li>Multicloud or hybrid use cases remain limited due to AWS's data source restrictions.</li>
              <li>AWS Glue provides a managed ETL service that simplifies data preparation and integration.</li>
              <li>Amazon Redshift Spectrum allows querying data directly from S3, providing more flexibility and scalability.</li>
            </ul>
          </CardContent>
        </Card>

        <Card data-aos="fade-right">
          <CardHeader>Recommendations for Building Analytics Architecture on AWS</CardHeader>
          <CardContent>
            <SubHeader>Utilize No-Code and Serverless Features</SubHeader>
            <p>
              Use AWS services like Athena, Glue DataBrew, and SageMaker Data Wrangler to ease data ingestion and curation tasks, enhancing data integration and discovery without requiring advanced data engineering skills.
            </p>

            <SubHeader>Incorporate ML in BI Workflows</SubHeader>
            <p>
              Leverage ML-infused features in Athena, QuickSight, and Redshift to streamline advanced analytics and improve business intelligence workflows.
            </p>

            <SubHeader>Maximize Data Science Productivity</SubHeader>
            <p>
              Align machine learning tools with user skill sets. Citizen data scientists can use SageMaker Canvas, while more experienced data scientists can leverage SageMaker Studio for advanced development and deployment.
            </p>

            <SubHeader>Implement Robust Data Governance</SubHeader>
            <p>
              Ensure compliance and data integrity by implementing AWS Lake Formation and AWS Glue Data Catalog for effective data governance. These services help manage and control data access and ensure regulatory compliance.
            </p>

            <SubHeader>Adopt a Cloud-Native Approach</SubHeader>
            <p>
              Embrace a cloud-native architecture with services like AWS Fargate and Lambda to optimize resource usage and operational efficiency. This approach helps in building scalable and cost-effective solutions.
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left">
          <CardHeader>Conclusion: Crafting the Future with AWS</CardHeader>
          <CardContent>
            <p>
              By strategically selecting AWS's analytics and AI tools, enterprises can create a secured, scalable, and efficient architecture that supports both traditional and advanced AI-driven workflows, driving business success in the cloud-native era.
            </p>
            <p>
              The integration of AWS services provides a powerful foundation for data-driven decision-making, ensuring that businesses remain competitive and agile in a rapidly evolving technological landscape.
            </p>
          </CardContent>
        </Card>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default Architech;

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
  height:100%
  padding: 20px;
  overflow-x: hidden;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;
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
  max-width: 100%;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const CardHeader = styled.h3`
  font-size: 1.8em;
  color: #007bff;
  margin-bottom: 10px;
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
`;

const SubHeader = styled.h4`
  font-size: 1.3em;
  margin-top: 10px;
  color: #333;
`;
