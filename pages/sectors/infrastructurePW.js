import { useState } from "react";
import { Layout, Row, Col, Card, Button, Modal, Typography } from "antd";
import styles from "../../styles/sectorsCSS/agriculture.module.css";

const { Title, Paragraph } = Typography;

// 8 sub-topics data
const sectors = [
  {
    id: "roads-bridges",
    title: "Roads & Bridges",
    short: "Better connectivity for villages.",
    full: "Construction and maintenance of roads and bridges improve transport, trade, and access to schools and hospitals in rural areas.",
    img: "https://images.unsplash.com/photo-1581090700227-7f5b23b4a22d",
  },
  {
    id: "water-supply",
    title: "Water Supply",
    short: "Pipes and tanks for clean water.",
    full: "Building water pipelines, storage tanks, and wells ensures clean drinking water reaches every household in the village.",
    img: "https://images.unsplash.com/photo-1588776814546-1c1f3ed6f5ab",
  },
  {
    id: "electricity",
    title: "Electricity & Lighting",
    short: "Power supply for homes and schools.",
    full: "Providing electricity helps families, schools, and small businesses function better, supporting development and modern lifestyle.",
    img: "https://images.unsplash.com/photo-1588776814563-88f0fa88d1e6",
  },
];


export default function Agriculture() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout className={styles.page}>
      <div className={styles.hero}>
        <Title level={2}>Infrastructure & Public Works</Title>
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
