import { useState } from "react";
import { Layout, Row, Col, Card, Button, Modal, Typography } from "antd";
import styles from "../../styles/sectorsCSS/agriculture.module.css";

const { Title, Paragraph } = Typography;

// 8 sub-topics data
const sectors = [
  {
    id: "flood-preparedness",
    title: "Flood Preparedness",
    short: "Plan for floods to save lives.",
    full: "Building embankments, early warning systems, and evacuation plans help protect people and property during floods.",
    img: "https://images.unsplash.com/photo-1588776814570-1c2f6a8c4f2e",
  },
  {
    id: "fire-safety",
    title: "Fire Safety",
    short: "Prevent and respond to fires.",
    full: "Educating villagers on fire safety, maintaining equipment, and planning emergency response reduces fire hazards.",
    img: "https://images.unsplash.com/photo-1596495577881-f2a9f4d4d4d4",
  },
  {
    id: "emergency-training",
    title: "Emergency Training",
    short: "Prepare for any disaster.",
    full: "Training villagers on first aid, evacuation, and disaster response improves safety and community resilience.",
    img: "https://images.unsplash.com/photo-1591019671061-3f63ad22f39e",
  },
];


export default function Agriculture() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout className={styles.page}>
      <div className={styles.hero}>
        <Title level={2}>Disaster Management</Title>
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
