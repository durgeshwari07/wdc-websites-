import { useState } from "react";
import { Layout, Row, Col, Card, Button, Modal, Typography } from "antd";
import styles from "../../styles/sectorsCSS/agriculture.module.css";

const { Title, Paragraph } = Typography;

// 8 sub-topics data
const sectors = [
  {
    id: "nutrition-programs",
    title: "Nutrition Programs",
    short: "Healthy food for women and children.",
    full: "Nutrition programs provide vitamins, supplements, and awareness about healthy eating to ensure mothers and children stay strong and free from malnutrition.",
    img: "https://images.unsplash.com/photo-1588776814570-1c2f6a8c4f2e",
  },
  {
    id: "childcare-centers",
    title: "Childcare Centers",
    short: "Safe spaces for young children.",
    full: "Childcare centers provide safe and educational spaces for children while parents work, ensuring their proper growth and development.",
    img: "https://images.unsplash.com/photo-1588776814567-3cf8f91c86b5",
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment",
    short: "Training and support for women.",
    full: "Programs offer skills training, financial literacy, and self-help groups to empower women economically and socially.",
    img: "https://images.unsplash.com/photo-1596495577881-f2a9f4d4d4d4",
  },
];


export default function Agriculture() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout className={styles.page}>
      <div className={styles.hero}>
        <Title level={2}>Women & Child Development</Title>
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
