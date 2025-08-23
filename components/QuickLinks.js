// // Filename: app/components/QuickLinks.js
// 'use client';

import React from 'react';
import { Col, Row, Typography } from 'antd';
import {
  BankOutlined,
  CheckSquareOutlined,
  NodeIndexOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import styles from './QuickLinks.module.css';

const { Title, Text } = Typography;

// Data for the four cards
const quickLinksData = [
  {
    icon: <BankOutlined className={styles.icon} />,
    title: 'Constitution',
    subtitle: 'How committees are formed',
  },
  {
    icon: <CheckSquareOutlined className={styles.icon} />,
    title: 'Powers & Functions',
    subtitle: 'Roles & Responsibilities',
  },
  {
    icon: <NodeIndexOutlined className={styles.icon} />,
    title: 'Planning Process',
    subtitle: 'Steps & Forms',
  },
  {
    icon: <AppstoreOutlined className={styles.icon} />,
    title: 'Development Sectors',
    subtitle: 'Sector-wise pages',
  },
];

const QuickLinks = () => {
  return (
    <div className={styles.quickLinksContainer}>
      {/* Added Section Title */}
      <Title level={2} className={styles.sectionTitle}>
        Quick Links
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {quickLinksData.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardContent}>
                {item.icon}
                <Title level={4} className={styles.cardTitle}>
                  {item.title}
                </Title>
                <Text className={styles.cardSubtitle}>{item.subtitle}</Text>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default QuickLinks;
