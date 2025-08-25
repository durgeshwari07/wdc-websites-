'use client';

import React from 'react';
import Link from 'next/link';
import {
  CloudOutlined,
  BankOutlined,
  MedicineBoxOutlined,
  BookOutlined,
  TeamOutlined,
  BuildOutlined,
  HighlightOutlined,
  FundOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';

import styles from '../styles/DevelopmentSectors.module.css';

const sectors = [
  { title: 'Agriculture & Allied', icon: <CloudOutlined />, href: '/sectors/agriculture' },
  { title: 'Local Economy & Industries', icon: <BankOutlined />, href: '/sectors/economy' },
  { title: 'Health & Sanitation', icon: <MedicineBoxOutlined />, href: '/sectors/health' },
  { title: 'Education', icon: <BookOutlined />, href: '/sectors/education' },
  { title: 'Women & Child Development', icon: <TeamOutlined />, href: '/sectors/women-child' },
  { title: 'Infrastructure & Public Works', icon: <BuildOutlined />, href: '/sectors/infrastructure' },
  { title: 'Arts, Culture & Sports', icon: <HighlightOutlined />, href: '/sectors/arts-culture-sports' },
  { title: 'Tourism & River Navigation', icon: <FundOutlined />, href: '/sectors/tourism' },
  { title: 'Disaster Management', icon: <SafetyCertificateOutlined />, href: '/sectors/disaster-management' },
];

export default function DevelopmentSectors() {
  return (
    <section className={styles.wrapper} aria-labelledby="dev-sectors-title">
      <div className={styles.container}>
        {/* Title with background + underline */}
        <h2 id="dev-sectors-title" className={styles.sectionTitle}>
           <span className={styles.underline}>Development</span> Sectors
           </h2>
           <div className={styles.underline}></div>

        {/* Horizontal scroll row */}
        <div className={styles.scrollRow}>
          {sectors.map((s) => (
            <Link key={s.title} href={s.href} className={styles.card}>
              <span className={styles.icon}>{s.icon}</span>
              <span className={styles.cardTitle}>{s.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
