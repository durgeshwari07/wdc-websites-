// // Filename: app/components/DevelopmentSectors.js
// 'use client';

// import React from 'react';
// import { Typography } from 'antd';
// import {
//   RiseOutlined,
//   ShopOutlined,
//   MedicineBoxOutlined,
//   ReadOutlined,
//   TeamOutlined,
//   BuildOutlined,
//   TrophyOutlined,
//   GlobalOutlined,
//   ShieldOutlined,
// } from '@ant-design/icons';
// import styles from './DevelopmentSectors.module.css';

// const { Title, Text } = Typography;

// // Data for the sector grid
// const sectorData = [
//   { icon: <RiseOutlined />, name: 'Agriculture & Allied' },
//   { icon: <ShopOutlined />, name: 'Local Economy & Industries' },
//   { icon: <MedicineBoxOutlined />, name: 'Health & Sanitation' },
//   { icon: <ReadOutlined />, name: 'Education' },
//   { icon: <TeamOutlined />, name: 'Women & Child Development' },
//   { icon: <BuildOutlined />, name: 'Infrastructure & Public Works' },
//   { icon: <TrophyOutlined />, name: 'Arts, Culture & Sports' },
//   { icon: <GlobalOutlined />, name: 'Tourism & River Navigation' },
//   { icon: <ShieldOutlined />, name: 'Disaster Management' },
// ];

// const DevelopmentSectors = () => {
//   // Split data for two rows
//   const row1Data = sectorData.slice(0, 4);
//   const row2Data = sectorData.slice(4);

//   return (
//     <div className={styles.sectorsContainer}>
//       <Title level={2} className={styles.sectionTitle}>
//         Development Sectors
//       </Title>

//       {/* First Row - Scrolls Left */}
//       <div className={styles.marquee}>
//         <div className={`${styles.marqueeTrack} ${styles.scrollLeft}`}>
//           {[...row1Data, ...row1Data].map((sector, index) => (
//             <div key={`row1-${index}`} className={styles.sectorCard}>
//               <div className={styles.iconWrapper}>{sector.icon}</div>
//               <Text className={styles.sectorName}>{sector.name}</Text>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Second Row - Scrolls Right */}
//       <div className={styles.marquee}>
//         <div className={`${styles.marqueeTrack} ${styles.scrollRight}`}>
//           {[...row2Data, ...row2Data].map((sector, index) => (
//             <div key={`row2-${index}`} className={styles.sectorCard}>
//               <div className={styles.iconWrapper}>{sector.icon}</div>
//               <Text className={styles.sectorName}>{sector.name}</Text>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DevelopmentSectors;
