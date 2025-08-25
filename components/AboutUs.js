import { Row, Col, Typography, Button } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import styles from "@/styles/AboutUs.module.css";

const { Title, Paragraph } = Typography;

export default function AboutUs() {
  const router = useRouter();

  return (
    <div className={styles.aboutUsSection}>
      <Row gutter={[32, 32]} align="middle">
        {/* Left Side - Text */}
        <Col xs={24} md={12}>
          <Title level={2}>
            About Ward Development Committees
          </Title>
          <Paragraph className={styles.aboutUsText}>
            Ward Development Committees (WDCs) play a vital role in 
            strengthening local governance. They bring together citizens 
            and officials to plan, monitor, and implement development 
            activities in the community.
          </Paragraph>
          <Button 
            type="primary" 
            size="large" 
            className={styles.aboutUsButton}
            onClick={() => router.push("/introduction")}
          >
            Learn More →
          </Button>
        </Col>

        {/* Right Side - Icon/Illustration */}
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <TeamOutlined className={styles.aboutUsIcon} />
        </Col>
      </Row>
    </div>
  );
}
