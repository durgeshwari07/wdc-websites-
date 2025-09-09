import { useState } from "react";
import { Layout, Row, Col, Card, Button, Modal, Typography } from "antd";
import styles from "../../styles/sectorsCSS/agriculture.module.css";

const { Title, Paragraph } = Typography;

// 8 sub-topics data
const sectors = [
  {
    id: "local-festivals",
    title: "Local Festivals",
    short: "Celebrate traditions and culture.",
    full: "Organizing local festivals preserves culture, strengthens community bonds, and promotes tourism.",
    img: "https://images.unsplash.com/photo-1606486778727-60ad99a933f1",
  },
  {
    id: "folk-art",
    title: "Folk Art & Handicrafts",
    short: "Traditional art forms and crafts.",
    full: "Supporting folk artists and craftsmen helps preserve heritage and provides income through exhibitions and sales.",
    img: "https://images.unsplash.com/photo-1591019671061-3f63ad22f39e",
  },
  {
    id: "sports-activities",
    title: "Sports Activities",
    short: "Encourage physical fitness and teamwork.",
    full: "Organizing local sports competitions keeps youth active, teaches teamwork, and identifies talent for higher-level sports.",
    img: "https://images.unsplash.com/photo-1581090700227-7f5b23b4a22d",
  },
];


export default function Agriculture() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout className={styles.page}>
      <div className={styles.hero}>
        <Title level={2}>Arts, Culture & Sports</Title>
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
