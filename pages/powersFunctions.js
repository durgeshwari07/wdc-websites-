import React from "react";
import Head from "next/head";
import { Layout } from "antd";

import HeaderBanner from "../components/HeaderBanner";
import FooterSection from "../components/FooterSection";

import styles from '../styles/Constitution.module.css';

const { Content } = Layout;

// --- Data for Horizontal Info Section ---

const infoData = [
  { number: '01', title: 'About WDC', description: 'Ward Development Committee (WDC) is responsible for decentralized planning at the village level, ensuring inclusive development and local governance.', href: '/wdc/about', },
  { number: '02', title: 'Roles & Responsibilities', description: 'The WDC identifies local development needs, plans projects, and monitors the implementation of various schemes in the ward.', href: '/wdc/roles-responsibilities',},
  { number: '03', title: 'Citizen Participation', description: 'Residents are encouraged to participate in ward meetings, propose projects, and provide feedback to make development more inclusive.', href: '/wdc/citizen-participation', },
  {number: '04', title: 'Development Projects', description: 'Projects include water supply, sanitation, education, healthcare, road maintenance, and other community welfare initiatives.', href: '/wdc/development-projects',},
  { number: '05', title: 'Meetings & Reports', description: 'The WDC holds regular meetings to discuss ongoing projects, review progress, and maintain transparency through published reports.', href: '/wdc/meetings-reports', },
];


// --- Individual Info Card Component ---
const HorizontalInfoCard = ({ number, title, description, href }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardNumber}>{number}</div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.underline} />
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

// --- Horizontal Info Section ---
const HorizontalInfoSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {infoData.map((item) => (
            <HorizontalInfoCard key={item.number} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Full Sub-Page Component ---
export default function ConstitutionPage() {
  return (
    <>
      <Head>
        <title>Constitution</title>
      </Head>

      <Layout>
        {/* Header */}
        <HeaderBanner />

        {/* Page Content */}
        <Content style={{ padding: "20px" }}>
          <h1>Powers & Functions</h1>
          <HorizontalInfoSection />
        </Content>

        {/* Footer */}
        <FooterSection />
      </Layout>
    </>
  );
}