import React from 'react';
import Link from 'next/link';
import { Typography, Button } from 'antd';
import styles from '../QuickLinks/Subpage.module.css'; // adjust path if needed
const { Title, Paragraph } = Typography;

const Constitution = () => {    
  return (
    <div className={styles.pageContainer}>
      <Title level={2} className={styles.pageTitle}>Constitution</Title>
      <Paragraph className={styles.pageParagraph}>
        How committees are formed, their structure, and roles.
      </Paragraph>
      <div className={styles.backButton}>
        <Link href="/">
          <Button type="primary">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Constitution;
