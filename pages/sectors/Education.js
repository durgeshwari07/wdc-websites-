import { useState } from "react";
import { Layout, Row, Col, Card, Button, Modal, Typography } from "antd";
import styles from "../../styles/sectorsCSS/agriculture.module.css";

const { Title, Paragraph } = Typography;

// 8 sub-topics data
const sectors = [
  {
    id: "primary-education",
    title: "Primary Education",
    short: "Basic education for children.",
    full: "Primary education teaches children reading, writing, and arithmetic. Attending school regularly builds a strong foundation for future learning.",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    id: "secondary-education",
    title: "Secondary Education",
    short: "Continued learning after primary school.",
    full: "Secondary education helps students gain knowledge in different subjects, prepares them for higher education, and opens up career opportunities.",
    img: "https://images.unsplash.com/photo-1555529771-2b9a6e24c7d3",
  },
  {
    id: "adult-literacy",
    title: "Adult Literacy",
    short: "Teaching reading and writing to adults.",
    full: "Adult literacy programs help grown-ups learn to read, write, and do basic arithmetic, improving their daily life and income opportunities.",
    img: "https://images.unsplash.com/photo-1596495577886-d920f1fb2b4f",
  },
  {
    id: "vocational-training",
    title: "Vocational Training",
    short: "Skills for jobs and small businesses.",
    full: "Vocational training teaches practical skills like tailoring, carpentry, computer basics, and handicrafts, enabling employment and entrepreneurship.",
    img: "https://images.unsplash.com/photo-1596495577873-05ed49b799c1",
  },
  {
    id: "digital-literacy",
    title: "Digital Literacy",
    short: "Learning to use computers and mobile technology.",
    full: "Digital literacy helps villagers use smartphones, computers, and the internet for education, banking, and communication, bridging the technology gap.",
    img: "https://images.unsplash.com/photo-1555529772-d14a02c8f2f6",
  },
  {
    id: "scholarships",
    title: "Scholarships & Support",
    short: "Financial help for students to study.",
    full: "Scholarships and financial support programs enable children from low-income families to continue education and achieve their dreams.",
    img: "https://images.unsplash.com/photo-1588072432847-9a10f9e0e8e3",
  },
  {
    id: "girls-education",
    title: "Girls' Education",
    short: "Encouraging education for girls.",
    full: "Focusing on girls' education ensures equal opportunities, empowers women, and helps families and communities prosper.",
    img: "https://images.unsplash.com/photo-1596495577881-f2a9f4d4d4d4",
  },
  {
    id: "community-libraries",
    title: "Community Libraries",
    short: "Access to books and learning resources.",
    full: "Community libraries provide books, reading materials, and educational resources to children and adults, encouraging lifelong learning.",
    img: "https://images.unsplash.com/photo-1588072432841-4f8d1bfb4b4e",
  },

];

export default function Agriculture() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout className={styles.page}>
      <div className={styles.hero}>
        <Title level={2}>Education</Title>
        <Paragraph>Explore the key sectors contributing to rural economy.</Paragraph>
      </div>

      <Row gutter={[16, 16]} className={styles.grid}>
        {sectors.map((sector) => (
          <Col xs={24} sm={12} md={8} lg={6} key={sector.id}>
            <Card
              hoverable
              cover={<img src={sector.img} alt={sector.title} className={styles.cardImg} />}
            >
              <Title level={4}>{sector.title}</Title>
              <Paragraph>{sector.short}</Paragraph>
              <Button type="primary" onClick={() => setSelected(sector)}>
                Learn More
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        visible={!!selected}
        title={selected?.title}
        footer={null}
        onCancel={() => setSelected(null)}
      >
        <Paragraph>{selected?.full}</Paragraph>
      </Modal>
    </Layout>
  );
}
