import { useState } from "react";
import { Layout, Row, Col, Card, Button, Modal, Typography } from "antd";
import styles from "../../styles/sectorsCSS/agriculture.module.css";

const { Title, Paragraph } = Typography;

// 8 sub-topics data
const sectors = [
  {
    id: "handicrafts",
    title: "Handicrafts",
    short: "Traditional handmade products for income and culture.",
    full: "Handicrafts include weaving, pottery, embroidery, and other handmade products. They help preserve local culture, provide income for families, and can be sold in local markets or online for higher earnings.",
    img: "https://images.unsplash.com/photo-1591019671061-3f63ad22f39e",
  },
  {
    id: "textile-industry",
    title: "Textile Industry",
    short: "Cloth production and garment making in local areas.",
    full: "Textile industry involves making fabrics, clothes, and other textile products. Small-scale looms, tailoring, and sewing units can generate employment and support local economy.",
    img: "https://images.unsplash.com/photo-1591235406723-1d4f63f8035e",
  },
  {
    id: "food-processing",
    title: "Food Processing",
    short: "Transforming raw food into packaged and value-added products.",
    full: "Food processing includes making jams, pickles, snacks, dairy products, and other packaged foods. It helps preserve food, increase shelf-life, and generates additional income for local farmers and entrepreneurs.",
    img: "https://images.unsplash.com/photo-1603052876337-0a826f6ebf6f",
  },
  {
    id: "handloom-weaving",
    title: "Handloom Weaving",
    short: "Traditional weaving for cloth and decorative products.",
    full: "Handloom weaving is a traditional craft producing fabrics, sarees, scarves, and decorative textiles. It creates employment in villages and preserves heritage skills.",
    img: "https://images.unsplash.com/photo-1587049352841-47a9a8d1b85f",
  },
  {
    id: "small-scale-industry",
    title: "Small Scale Industry",
    short: "Local workshops and units producing goods.",
    full: "Small-scale industries produce items like bricks, metal tools, candles, or soaps. They provide employment locally, support the community, and contribute to the local economy.",
    img: "https://images.unsplash.com/photo-1581090700227-7f5b23b4a22d",
  },
  {
    id: "agro-processing",
    title: "Agro Processing",
    short: "Adding value to farm produce like grains and fruits.",
    full: "Agro-processing includes milling, drying, packaging, and making value-added products from grains, fruits, and vegetables. It helps farmers earn more and reduces wastage.",
    img: "https://images.unsplash.com/photo-1612267163586-2c46b0f2a6f5",
  },
  {
    id: "handmade-soaps",
    title: "Handmade Soaps & Oils",
    short: "Natural products made locally for income.",
    full: "Handmade soaps, oils, and herbal products use local ingredients. They are eco-friendly, create employment, and can be sold in local and urban markets.",
    img: "https://images.unsplash.com/photo-1598514983130-7aa098e67e6b",
  },
  {
    id: "tourism-services",
    title: "Tourism & Local Services",
    short: "Local attractions and services for visitors.",
    full: "Tourism includes guides, homestays, local food services, and cultural experiences. Villagers can earn additional income by promoting heritage, crafts, and local attractions.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },


 
];

export default function Agriculture() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout className={styles.page}>
      <div className={styles.hero}>
        <Title level={2}>Local Economy & Industries</Title>
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
