'use client';

import React from 'react';
import Link from 'next/link';
import { Row, Col, Typography } from 'antd';
import {
  BankOutlined,
  CheckSquareOutlined,
  NodeIndexOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import styles from '../QuickLinks/QuickLinks.module.css';

const { Title, Text } = Typography;

const quickLinksData = [
  {
    icon: <BankOutlined />,
    title: 'Constitution',
    subtitle: 'How committees are formed',
    href: '/constitution',  
  },
  {
    icon: <CheckSquareOutlined />,
    title: 'Powers & Functions',
    subtitle: 'Roles & Responsibilities',
    href: '/powersFunctions', 
  },
  {
    icon: <NodeIndexOutlined />,
    title: 'Planning Process',
    subtitle: 'Steps & Forms',
    href: '/planningProcess', 
  },
  {
    icon: <AppstoreOutlined />,
    title: 'Development Sectors',
    subtitle: 'Sector-wise pages',
    href: '/developmentSectors', 
  },
];

const QuickLinks = () => {
  return (
    <div className={styles.quickLinksContainer}>
      <Title level={2}>
        <span className={styles.underline}>Quick</span> Links
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {quickLinksData.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            {/*  Wrap entire card inside Link */}
            <Link href={item.href} className={styles.cardWrapper}>
              <div className={styles.cardContent}>
                <span className={styles.icon}>{item.icon}</span>
                <Title level={4}>{item.title}</Title>
                <Text>{item.subtitle}</Text>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default QuickLinks;

