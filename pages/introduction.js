<<<<<<< HEAD
=======
// import React from "react";
// import { Typography, Row, Col, Card, Button, Statistic, Avatar } from "antd";
// import {
//   TeamOutlined,
//   CheckCircleOutlined,
//   ArrowLeftOutlined,
//   SmileOutlined,
//   TrophyOutlined,
//   CalendarOutlined,
//   QuoteLeftOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { useRouter } from "next/router";
// import styles from "../styles/Introduction.module.css";

// const { Title, Paragraph } = Typography;

// export default function Introduction() {
//   const router = useRouter();

//   return (
//     <div className={styles.introductionSection}>
//       {/* Hero Banner */}
//       <div className={styles.heroBanner}>
//         <Row align="middle" gutter={[32, 32]}>
//           <Col xs={24} md={12}>
//             <Title level={2} className={styles.heroTitle}>
//               Introduction to Ward Development Committees
//             </Title>
//             <Paragraph className={styles.heroText}>
//               WDCs are platforms for participatory governance where citizens and 
//               local officials work together to shape the development of their community.
//             </Paragraph>
//             <Button
//               type="default"
//               icon={<ArrowLeftOutlined />}
//               onClick={() => router.push("/about")}
//             >
//               Back to About
//             </Button>
//           </Col>
//           <Col xs={24} md={12} style={{ textAlign: "center" }}>
//             <TeamOutlined className={styles.heroIcon} />
//           </Col>
//         </Row>
//       </div>

//       {/* Objectives & How WDCs Work */}
//       <Row gutter={[32, 32]} justify="center">
//         <Col xs={24} md={20}>
//           <Card className={styles.introCard}>
//             <Title level={4}>
//               <TeamOutlined /> Objectives of WDCs
//             </Title>
//             <Paragraph>Ward Development Committees aim to:</Paragraph>
//             <ul className={styles.introList}>
//               <li><CheckCircleOutlined /> Promote citizen participation in decision-making</li>
//               <li><CheckCircleOutlined /> Monitor development projects and budgets</li>
//               <li><CheckCircleOutlined /> Encourage transparency and accountability</li>
//               <li><CheckCircleOutlined /> Address local issues effectively</li>
//             </ul>
//           </Card>

//           <Card className={styles.introCard}>
//             <Title level={4}>How WDCs Work</Title>
//             <Paragraph>
//               WDCs consist of elected representatives, officials, and citizens. 
//               They hold regular meetings to discuss priorities, allocate resources, 
//               and oversee implementation of development activities. 
//               This ensures every voice in the community is heard.
//             </Paragraph>
//           </Card>
//         </Col>
//       </Row>

//       {/* Key Metrics & Achievements */}
//       <div className={styles.metricsSection}>
//         <Title level={3} style={{ textAlign: "center", margin: "40px 0 20px" }}>
//           Key Metrics & Achievements
//         </Title>
//         <Row gutter={[32, 32]} justify="center">
//           <Col xs={24} md={6}>
//             <Card>
//               <Statistic title="Projects Completed" value={120} prefix={<TrophyOutlined />} />
//             </Card>
//           </Col>
//           <Col xs={24} md={6}>
//             <Card>
//               <Statistic title="Community Members Served" value={5000} prefix={<SmileOutlined />} />
//             </Card>
//           </Col>
//           <Col xs={24} md={6}>
//             <Card>
//               <Statistic title="Meetings Held" value={85} prefix={<CalendarOutlined />} />
//             </Card>
//           </Col>
//         </Row>
//       </div>

//       {/* Mission & Vision */}
//       <Row gutter={[32, 32]} justify="center" style={{ marginTop: "50px" }}>
//         <Col xs={24} md={10}>
//           <Card className={styles.introCard}>
//             <Title level={4}>Our Mission</Title>
//             <Paragraph>
//               Our mission is to foster a collaborative environment where citizens and officials 
//               can work together to build a thriving community.
//             </Paragraph>
//           </Card>
//         </Col>
//         <Col xs={24} md={10}>
//           <Card className={styles.introCard}>
//             <Title level={4}>Our Vision</Title>
//             <Paragraph>
//               To be a model of local governance that empowers every citizen 
//               to actively shape their ward's development.
//             </Paragraph>
//           </Card>
//         </Col>
//       </Row>

//       {/* Meet the Team */}
//       <div style={{ marginTop: "60px" }}>
//         <Title level={3} style={{ textAlign: "center", marginBottom: "30px" }}>
//           Meet the Team
//         </Title>
//         <Row gutter={[32, 32]} justify="center">
//           <Col xs={24} sm={12} md={6}>
//             <Card hoverable className={styles.teamCard}>
//               <Avatar size={80} icon={<UserOutlined />} style={{ marginBottom: 15 }} />
//               <Title level={5}>John Doe</Title>
//               <Paragraph>Chairperson - Dedicated to building transparent governance.</Paragraph>
//             </Card>
//           </Col>
//           <Col xs={24} sm={12} md={6}>
//             <Card hoverable className={styles.teamCard}>
//               <Avatar size={80} icon={<UserOutlined />} style={{ marginBottom: 15 }} />
//               <Title level={5}>Jane Smith</Title>
//               <Paragraph>Secretary - Committed to citizen participation in planning.</Paragraph>
//             </Card>
//           </Col>
//           <Col xs={24} sm={12} md={6}>
//             <Card hoverable className={styles.teamCard}>
//               <Avatar size={80} icon={<UserOutlined />} style={{ marginBottom: 15 }} />
//               <Title level={5}>Ahmed Khan</Title>
//               <Paragraph>Treasurer - Focused on transparency and accountability.</Paragraph>
//             </Card>
//           </Col>
//         </Row>
//       </div>

//       {/* Testimonials */}
//       <div style={{ marginTop: "60px", marginBottom: "60px" }}>
//         <Title level={3} style={{ textAlign: "center", marginBottom: "30px" }}>
//           Testimonials
//         </Title>
//         <Row gutter={[32, 32]} justify="center">
//           <Col xs={24} md={8}>
//             <Card className={styles.testimonialCard}>
//               <QuoteLeftOutlined style={{ fontSize: 24, color: "#888" }} />
//               <Paragraph style={{ fontStyle: "italic" }}>
//                 "Thanks to the WDC, our community park was renovated and now children have a safe place to play."
//               </Paragraph>
//               <Paragraph strong>- A Local Resident</Paragraph>
//             </Card>
//           </Col>
//           <Col xs={24} md={8}>
//             <Card className={styles.testimonialCard}>
//               <QuoteLeftOutlined style={{ fontSize: 24, color: "#888" }} />
//               <Paragraph style={{ fontStyle: "italic" }}>
//                 "WDC meetings gave us the opportunity to voice our concerns and see real action being taken."
//               </Paragraph>
//               <Paragraph strong>- Community Member</Paragraph>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// }


>>>>>>> save-work

import { Typography, Row, Col, Card, Button } from "antd";
import { TeamOutlined, CheckCircleOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import styles from "../styles/Introduction.module.css";

const { Title, Paragraph } = Typography;

export default function Introduction() {
  const router = useRouter();

  return (
    <div className={styles.introductionSection}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <Row align="middle" gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Title level={2} className={styles.heroTitle}>
              Introduction to Ward Development Committees
            </Title>
            <Paragraph className={styles.heroText}>
              WDCs are platforms for participatory governance where citizens and 
              local officials work together to shape the development of their community.
            </Paragraph>
            <Button
              type="default"
              icon={<ArrowLeftOutlined />}
              onClick={() => router.push("/about")}
            >
              Back to About
            </Button>
          </Col>
          <Col xs={24} md={12} style={{ textAlign: "center" }}>
            {/* Replace with an illustration if you want */}
            <TeamOutlined className={styles.heroIcon} />
          </Col>
        </Row>
      </div>

      {/* Content Section */}
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={20}>
          <Card className={styles.introCard}>
            <Title level={4}>
              <TeamOutlined /> Objectives of WDCs
            </Title>
            <Paragraph>
              Ward Development Committees aim to:
            </Paragraph>
            <ul className={styles.introList}>
              <li><CheckCircleOutlined /> Promote citizen participation in decision-making</li>
              <li><CheckCircleOutlined /> Monitor development projects and budgets</li>
              <li><CheckCircleOutlined /> Encourage transparency and accountability</li>
              <li><CheckCircleOutlined /> Address local issues effectively</li>
            </ul>
          </Card>

          <Card className={styles.introCard}>
            <Title level={4}>How WDCs Work</Title>
            <Paragraph>
              WDCs consist of elected representatives, officials, and citizens. 
              They hold regular meetings to discuss priorities, allocate resources, 
              and oversee implementation of development activities. 
              This ensures every voice in the community is heard.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
