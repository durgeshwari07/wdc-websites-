// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Col, Row, Typography } from 'antd';
// import {
//   BankOutlined,
//   CheckSquareOutlined,
//   NodeIndexOutlined,
//   AppstoreOutlined
// } from '@ant-design/icons';
// import styles from '../components/QuickLinks/QuickLinks.module.css';

// const { Title, Text } = Typography;

// // Data for the four cards
// const quickLinksData = [
//   {
//     icon: <BankOutlined />,
//     title: 'Constitution',
//     subtitle: 'How committees are formed',
//     href: '../constitution',
//   },
//   {
//     icon: <CheckSquareOutlined />,
//     title: 'Powers & Functions',
//     subtitle: 'Roles & Responsibilities',
//     href: '/powers-functions',
//   },
//   {
//     icon: <NodeIndexOutlined />,
//     title: 'Planning Process',
//     subtitle: 'Steps & Forms',
//     href: '/planning-process',
//   },
//   {
//     icon: <AppstoreOutlined />,
//     title: 'Development Sectors',
//     subtitle: 'Sector-wise pages',
//     href: '/development-sectors',
//   },
// ];

// const QuickLinks = () => {
//   const pathname = usePathname();

//   return (
//     <div className={styles.quickLinksContainer}>
//       {/* Only first word underlined */}
//       <Title level={2} className={styles.sectionTitle}>
//         <span className={styles.underline}>Quick</span> Links
//       </Title>

//       <Row gutter={[32, 32]} justify="center">
//         {quickLinksData.map((item, index) => {
//           const isActive = pathname === item.href;
//           return (
//             <Col key={index} xs={24} sm={12} md={6}>
//               <Link
//                 href={item.href}
//                 className={`${styles.cardWrapper} ${isActive ? styles.active : ''}`}
//               >
//                 <div className={styles.cardContent}>
//                   <span className={`${styles.icon} ${isActive ? styles.activeIcon : ''}`}>
//                     {item.icon}
//                   </span>
//                   <Title level={4} className={styles.cardTitle}>
//                     {item.title}
//                   </Title>
//                   <Text className={styles.cardSubtitle}>{item.subtitle}</Text>
//                 </div>
//               </Link>
//             </Col>
//           );
//         })}
//       </Row>
//     </div>
//   );
// };

// export default QuickLinks;


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
    href: '/constitution',  // ✅ correct route
  },
  {
    icon: <CheckSquareOutlined />,
    title: 'Powers & Functions',
    subtitle: 'Roles & Responsibilities',
    href: '/powers-functions', // ✅ goes to pages/powers-functions.js
  },
  {
    icon: <NodeIndexOutlined />,
    title: 'Planning Process',
    subtitle: 'Steps & Forms',
    href: '/planning-process', // ✅ goes to pages/planning-process.js
  },
  {
    icon: <AppstoreOutlined />,
    title: 'Development Sectors',
    subtitle: 'Sector-wise pages',
    href: '/development-sectors', // ✅ goes to pages/development-sectors.js
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
            {/* ✅ Wrap entire card inside Link */}
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

