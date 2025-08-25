import React from "react";
import { Row, Col, Typography, Button, Card } from "antd";
import styles from "../styles/CitizenParticipation.module.css";

const { Title, Paragraph } = Typography;

const CitizenParticipation = () => {
  return (
    <div className={styles.sectionWrapper}>
      <Card bordered={false} className={styles.card}>
        <Row gutter={[32, 32]} align="middle">
          {/* Left Side - Info Text */}
          <Col xs={24} md={16}>
            <Title level={3} className={styles.title}>
              Citizen Participation
            </Title>
            <Paragraph className={styles.paragraph}>
              Join hands with <strong>Ward Development Committee (WDC)</strong> – 
              participate in <strong>Gram Sabha</strong>, share your ideas, 
              and volunteer as an expert to shape the growth of your ward.
            </Paragraph>
          </Col>

          {/* Right Side - CTA Button */}
          <Col xs={24} md={8} className={styles.btnWrapper}>
            <Button
              type="primary"
              size="large"
              shape="round"
              className={styles.ctaButton}
              onClick={() => alert("Thank you for showing interest!")}
            >
              Get Involved
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CitizenParticipation;
