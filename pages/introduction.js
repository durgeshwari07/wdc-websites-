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
