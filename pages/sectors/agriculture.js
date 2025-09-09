import { useState } from "react";
import { Layout, Row, Col, Card, Button, Modal, Typography } from "antd";
import styles from "../../styles/sectorsCSS/agriculture.module.css";

const { Title, Paragraph } = Typography;

// 8 sub-topics data
const sectors = [
  {
  id: "crop-cultivation",
  title: "Crop Cultivation",
  short: "Growing crops to earn income and feed families.",
  full: "Crop cultivation means growing crops like rice, wheat, pulses, vegetables, and cash crops. By using good methods like crop rotation, natural fertilizers, and proper irrigation, farmers can increase their yield, save money, and take care of the land for future use. It helps families earn money and have enough food to eat. Farmers can also practice intercropping (growing two crops together) to make better use of land and reduce pest problems. Using high-quality seeds and timely sowing improves production. Storing harvested crops properly prevents loss and ensures income throughout the year. Modern tools like drip irrigation, composting, and small machines can save labor and increase efficiency, making farming more profitable and sustainable.",
  img: "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JvcHN8ZW58MHx8MHx8fDA%3D",
 },

  {
    id: "dairy-farming", title: "Dairy Farming", short: "Steady rural income through milk and dairy products.",
    full: "Dairy farming ensures steady rural income through milk production, cattle rearing, and value-added dairy products like cheese, butter, and ghee.",
    img: "https://images.unsplash.com/photo-1743362814840-bc41dd1b3a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRhaXJ5JTIwZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "poultry", title: "Poultry", short: "Quick returns through broilers and layers.",
    full: "Poultry farming provides quick returns through broilers and layers. It supports nutrition, employment, and rural income.",
    img: "https://images.unsplash.com/photo-1600841722038-7a67f7e2f9ab",
  },
  {
    id: "fisheries",  title: "Fisheries",  short: "Livelihoods, nutrition, and exports through aquaculture.",
    full: "Fisheries contribute to livelihoods, nutrition, and exports through aquaculture, shrimp farming, and inland fish ponds.",
    img: "https://images.unsplash.com/photo-1615220196745-b0b2c51c5f83",
  },
  {
    id: "horticulture", title: "Horticulture",  short: "Cultivation of fruits, vegetables, and flowers.",
    full: "Horticulture includes the cultivation of fruits, vegetables, and flowers, supporting both nutrition and export potential.",
    img: "https://images.unsplash.com/photo-1508857650881-64475119d798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9ydGljdWx0dXJlfGVufDB8fDB8fHww",
  },
  {
  id: "fisheries",  title: "Fisheries",  short: "Sustainable fishing and aquaculture for livelihoods and nutrition.",
  full: "Fisheries contribute to rural livelihoods, nutrition, and exports through sustainable aquaculture, inland fish ponds, and coastal fishing practices. It supports employment and food security.",
  img: "https://images.unsplash.com/photo-1507991426709-5bbee2c6a189?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaGVyaWVzfGVufDB8fDB8fHww",
},

  {
    id: "agroforestry", title: "Agroforestry", short: "Integration of trees and crops for sustainability.",
    full: "Agroforestry combines agriculture and forestry to improve productivity, biodiversity, and sustainability in rural landscapes.",
    img: "https://images.unsplash.com/photo-1606486778727-60ad99a933f1",
  },
  {
    id: "organic-farming", title: "Organic Farming", short: "Chemical-free farming for health and environment.",
    full: "Organic farming avoids synthetic chemicals and emphasizes natural fertilizers, crop rotation, and sustainable practices.",
    img: "https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yZ2FuaWMlMjBmYXJtaW5nfGVufDB8fDB8fHww",
  },
];

export default function Agriculture() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout className={styles.page}>
      <div className={styles.hero}>
        <Title level={2}>Agriculture & Allied Sectors</Title>
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
