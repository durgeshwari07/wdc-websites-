import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Layout, Typography, Row, Col, Menu, Breadcrumb } from 'antd';
import {
  BankOutlined,
  TeamOutlined,
  ScheduleOutlined,
  CheckSquareOutlined,
} from '@ant-design/icons';

import styles from '../styles/Constitution.module.css';

const { Content, Sider } = Layout;
const { Title, Paragraph } = Typography;

// Data for the constitution sections
const constitutionSections = [

{
  id: 1,
  icon: <TeamOutlined />,
  title: 'Formation of the Committee',
  description: `Purpose:
   Formed to ensure effective local governance, transparency, and active community participation.

Composition of Members:
- 10–15 members per ward/panchayat.
- Includes local residents, elected representatives, community leaders, and government officials.

Eligibility Criteria:
- Must be a resident of the ward.
- Age 18 years or above.
- Preferably active in community development or social initiatives.

Selection Process:
- Members may be nominated by the Panchayat or elected by residents.
- Representation may include women, youth, and senior citizens to ensure diversity.

Tenure / Term:
- Typically 3 years for each member.
- Reconstitution or re-election happens after the term ends.

Official Recognition:
- Committee is formally recognized by the Panchayat or local government.
- Has defined roles and responsibilities for planning and monitoring ward development activities.

Key Function:
- Acts as a bridge between community and local government authorities.
- Monitors development projects, promotes citizen engagement, and ensures accountability.`,
  anchorId: 'formation',
},

  {
  id: 2,
  icon: <BankOutlined />,
  title: 'Objectives and Mandate',
  description: `Primary Purpose:
- Facilitate effective local governance and development planning.
- Ensure transparency and accountability in ward-level activities.
- Promote active participation of residents in decision-making.

Core Objectives:
- Identify local development needs and prioritize projects.
- Monitor the implementation of development schemes and initiatives.
- Encourage citizen engagement in planning, feedback, and oversight.
- Support equitable resource allocation and inclusive development.

Mandate:
- Act as a bridge between the community and the Panchayat/local government.
- Coordinate with government departments for project approvals and monitoring.
- Maintain records, reports, and progress updates for all ward-level initiatives.
- Ensure representation of all groups, including women, youth, and marginalized communities.

Expected Outcomes:
- Improved local infrastructure and public services.
- Higher citizen awareness and participation in governance.
- Transparent and accountable decision-making at the ward level.`,
  anchorId: 'objectives',
},

 {
  id: 3,
  icon: <CheckSquareOutlined />,
  title: 'Powers & Functions',
  description: `Key Powers:
- Approve and prioritize ward-level development projects.
- Recommend allocation of funds for local initiatives.
- Coordinate with government departments for project implementation.
- Oversee and monitor ongoing development works.

Core Functions:
- Facilitate community participation in planning and decision-making.
- Review progress reports and ensure accountability of project execution.
- Provide recommendations for resource allocation and local policy decisions.
- Act as a liaison between residents and the Panchayat/local government.

Additional Responsibilities:
- Maintain transparency by documenting meetings and resolutions.
- Encourage citizen feedback and grievance redressal.
- Promote inclusivity, ensuring representation of women, youth, and marginalized groups.
- Support sustainable and equitable local development initiatives.`,
  anchorId: 'powers',
},
  {
  id: 4,
  icon: <ScheduleOutlined />,
  title: 'Meetings & Procedures',
  description: `Meeting Frequency:
- The Ward Development Committee (WDC) meets regularly, typically once a month.
- Additional meetings may be called for urgent matters or special projects.

Quorum Requirements:
- Minimum number of members required for decisions to be valid.
- Ensures fair representation from different community groups.

Agenda & Documentation:
- Meetings follow a pre-determined agenda circulated in advance.
- Minutes of meetings are recorded, maintained, and shared with members.

Decision-Making Process:
- Resolutions are passed by majority vote of present members.
- Consensus is encouraged for key development decisions.

Citizen Participation:
- Residents may be invited to attend or provide feedback on specific issues.
- Encourages transparency, accountability, and community involvement.

Follow-up & Monitoring:
- Actions from meetings are tracked and reviewed in subsequent meetings.
- Ensures that decisions are implemented efficiently and effectively.`,
  anchorId: 'meetings',
},
];

const ConstitutionPage = () => {
  return (
    <>
      <Head>
        <title>Constitution - Ward Development Committee</title>
      </Head>

      <div className={styles.topBar}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>About Us</Breadcrumb.Item>
          <Breadcrumb.Item>Constitution</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Layout className={styles.pageLayout}>
        {/* Left Sidebar */}

        {/* Main Content Area */}
        <Content className={styles.content}>
          <div className={styles.contentHeader}>
            <Title level={2} className={styles.mainTitle}>
              Constitution of the Ward Development Committee
            </Title>
          </div>

          <Row gutter={[24, 24]}>
            {constitutionSections.map((section) => (
              <Col key={section.id} xs={24} sm={12}>
                {/* Add id here for the anchor link to work */}
                <div id={section.anchorId} className={styles.infoCard}>
                  <div className={styles.cardIcon}>{section.icon}</div>
                  <Title level={4} className={styles.cardTitle}>{section.title}</Title>
                  <Paragraph className={styles.cardDescription}>
                    {section.description}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default ConstitutionPage;