import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  DownloadOutlined,
  FormOutlined,
} from "@ant-design/icons";
import styles from "../styles/FooterSection.module.css";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

export default function FooterSection() {
  return (
    <Footer className={styles.footer}>
      <Row gutter={[32, 32]}>
        {/* Panchayat Contact Info */}
        <Col xs={24} md={8}>
          <Title level={4} className={styles.footerTitle}>
            Panchayat Contact
          </Title>
          <Text><EnvironmentOutlined /> Village Panchayat Office, Main Road</Text><br />
          <Text><PhoneOutlined /> +91-9876543210</Text><br />
          <Text><MailOutlined /> panchayat@example.com</Text>
        </Col>

        {/* WDC Office Details */}
        <Col xs={24} md={8}>
          <Title level={4} className={styles.footerTitle}>
            WDC Office
          </Title>
          <Text><EnvironmentOutlined /> Ward No. 5, Community Hall</Text><br />
          <Text><PhoneOutlined /> +91-9123456780</Text><br />
          <Text><ClockCircleOutlined /> Mon - Sat: 10am - 5pm</Text>
        </Col>

        {/* Quick Links */}
        <Col xs={24} md={8}>
          <Title level={4} className={styles.footerTitle}>
            Quick Links
          </Title>
          <Space direction="vertical">
            <Link href="/rti"><FileTextOutlined /> RTI</Link>
            <Link href="/downloads"><DownloadOutlined /> Downloads</Link>
            <Link href="/feedback"><FormOutlined /> Feedback</Link>
          </Space>
        </Col>
      </Row>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        Ward Development Committee ©2025 | Powered by React + Next.js + Ant Design
      </div>
    </Footer>
  );
}
