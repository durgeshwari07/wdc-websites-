import { useState } from "react";
import { Layout, Row, Col, Card, Button, Modal, Typography } from "antd";
import styles from "../../styles/sectorsCSS/agriculture.module.css";

const { Title, Paragraph } = Typography;

// 8 sub-topics data
const sectors = [
  {
    id: "local-tourism",
    title: "Local Tourism",
    short: "Promote villages for visitors.",
    full: "Developing local tourist spots, homestays, and guided tours can bring income to the village and preserve local heritage.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: "river-navigation",
    title: "River Navigation",
    short: "Use rivers for transport and trade.",
    full: "Developing small river routes helps transport goods and people efficiently, supporting local economy.",
    img: "https://images.unsplash.com/photo-1615220196745-b0b2c51c5f83",
  },
  {
    id: "eco-tourism",
    title: "Eco-Tourism",
    short: "Tourism while protecting nature.",
    full: "Eco-tourism encourages visitors to enjoy natural beauty responsibly, creating jobs while conserving forests, rivers, and wildlife.",
    img: "https://images.unsplash.com/photo-1625246333196-2c2aa5b372eb",
  },
];


export default function Agriculture() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout className={styles.page}>
      <div className={styles.hero}>
        <Title level={2}>Tourism & River Navigation</Title>
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
