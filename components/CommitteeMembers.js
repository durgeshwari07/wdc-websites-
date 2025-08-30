import React from "react";
import { Card, Row, Col, Typography, Button, Avatar } from "antd";
import { UserOutlined, WomanOutlined, TeamOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";   
import styles from "../styles/CommitteeMembers.module.css";

const { Title, Text } = Typography;

const CommitteeMembers = () => {
  const router = useRouter();  

  return (
    <div className={styles.membersSection}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "30px" }}>
        Committee Members
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {/* Chairperson */}
        <Col xs={24} sm={12} md={8}>
          <Card className={styles.memberCard} bordered hoverable>
            <Avatar size={100} icon={<UserOutlined />} className={styles.avatar} />
            <Title level={4}>Chairperson</Title>
            <Text strong>Name: Rajesh Kumar</Text>
            <br />
            <Text>📞 9876543210</Text>
          </Card>
        </Col>

        {/* Convenor */}
        <Col xs={24} sm={12} md={8}>
          <Card className={styles.memberCard} bordered hoverable>
            <Avatar size={100} icon={<TeamOutlined />} className={styles.avatar} />
            <Title level={4}>Convenor</Title>
            <Text strong>Name: Sita Devi</Text>
            <br />
            <Text>📞 9876501234</Text>
          </Card>
        </Col>

        {/* Other Members */}
        <Col xs={24} md={8}>
          <Card className={styles.memberCard} bordered hoverable>
            <Title level={4}>Other Members</Title>
            <p>
              <WomanOutlined style={{ color: "hotpink" }} /> Women Representative
            </p>
            <p>
              <UserOutlined style={{ color: "brown" }} /> SC/ST Representative
            </p>
            <p>
              <UserOutlined style={{ color: "green" }} /> OBC Representative
            </p>
          </Card>
        </Col>
      </Row>

      {/* ✅ Button now navigates to /members */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        {/* <Button 
    type="default" 
    size="large"
    onClick={() => router.push("/")}
    style={{ marginRight: "10px" }}
  >
    ← Back to Home
  </Button> */}
        <Button 
          type="primary" 
          size="large"
          onClick={() => router.push("/members")}  
        >
          Full Member List →
        </Button>
      </div>
    </div>
  );
};

export default CommitteeMembers;
