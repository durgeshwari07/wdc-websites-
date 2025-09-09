import { useState } from "react";
import { Layout, Row, Col, Card, Button, Modal, Typography } from "antd";
import styles from "../../styles/sectorsCSS/agriculture.module.css";

const { Title, Paragraph } = Typography;

// 8 sub-topics data
const sectors = [
  {
    id: "clean-water",
    title: "Clean Water",
    short: "Safe drinking water for good health.",
    full: "Access to clean water is essential to prevent diseases. Using filtered water, protecting wells, and boiling water before drinking can keep families healthy.",
    img: "https://images.unsplash.com/photo-1588776814546-1c1f3ed6f5ab",
  },
  {
    id: "toilets-sanitation",
    title: "Toilets & Sanitation",
    short: "Proper toilets to prevent diseases.",
    full: "Building and using proper toilets prevents open defecation, reduces infection, and keeps villages clean. Regular cleaning and maintenance is important.",
    img: "https://images.unsplash.com/photo-1576765607928-3f5d3f6718c4",
  },
  {
    id: "hand-washing",
    title: "Hand Washing",
    short: "Clean hands prevent illness.",
    full: "Washing hands with soap before eating and after using the toilet helps stop the spread of germs and protects the whole family.",
    img: "https://images.unsplash.com/photo-1588776814563-88f0fa88d1e6",
  },
  {
    id: "waste-management",
    title: "Waste Management",
    short: "Proper disposal of waste keeps environment clean.",
    full: "Collecting and disposing of waste properly prevents mosquitoes, flies, and other pests. Segregating biodegradable and non-biodegradable waste helps maintain a healthy village.",
    img: "https://images.unsplash.com/photo-1596944529632-6c5807f2c7a2",
  },
  {
    id: "nutrition-awareness",
    title: "Nutrition Awareness",
    short: "Healthy food for strong families.",
    full: "Eating a balanced diet with fruits, vegetables, grains, and proteins keeps families strong and prevents malnutrition. Awareness about vitamins and minerals is important.",
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
  },
  {
    id: "maternal-health",
    title: "Maternal Health",
    short: "Care for pregnant women.",
    full: "Pregnant women need regular checkups, proper nutrition, and safe delivery practices to ensure the health of mother and child.",
    img: "https://images.unsplash.com/photo-1598003011443-b8ff1f1640f3",
  },
  {
    id: "child-health",
    title: "Child Health & Vaccination",
    short: "Healthy children through care and vaccines.",
    full: "Vaccinations and regular checkups prevent diseases in children. Proper hygiene, nutrition, and growth monitoring keep children healthy.",
    img: "https://images.unsplash.com/photo-1588776814567-3cf8f91c86b5",
  },
  {
    id: "community-health-programs",
    title: "Community Health Programs",
    short: "Local programs to improve health.",
    full: "Village-level health programs like health camps, awareness drives, and sanitation initiatives help everyone stay healthy and prevent disease outbreaks.",
    img: "https://images.unsplash.com/photo-1588776814570-1c2f6a8c4f2e",
  },
];


export default function Agriculture() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout className={styles.page}>
      <div className={styles.hero}>
        <Title level={2}>Health & Sanitation</Title>
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
