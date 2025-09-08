import React, { useState } from "react";
import { Card, Row, Col, Typography, Button, Avatar, Modal } from "antd";
import { UserOutlined, WomanOutlined, TeamOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import styles from "../styles/CommitteeMembers.module.css";

const { Title, Text, Paragraph } = Typography;

const CommitteeMembers = () => {
  const router = useRouter();

  // ✅ State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  // ✅ Member Info
  const membersInfo = {
    chairperson: {
      title: "Chairperson",
      name: "Rajesh Kumar",
      phone: "9876543210",
      details:
        "Rajesh Kumar leads the Ward Development Committee, ensuring transparency, decision-making, and smooth coordination between all representatives.",
    },
    convenor: {
      title: "Convenor",
      name: "Sita Devi",
      phone: "9876501234",
      details:
        "Sita Devi acts as the Convenor, managing meetings, keeping records, and helping bridge communication between citizens and the committee.",
    },
    other: {
      title: "Other Members",
      details: `
        • Women Representative – works to empower women in the community.  
        • SC/ST Representative – represents marginalized groups for inclusion.  
        • OBC Representative – ensures fair opportunities for OBC communities.  
      `,
    },
  };

  const showMemberInfo = (key) => {
    setSelectedMember(membersInfo[key]);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.membersSection}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "30px" }}>
        Committee Members
      </Title>

      <Row gutter={[24, 24]} justify="center">
        {/* Chairperson */}
        <Col xs={24} sm={12} md={8}>
          <Card
            className={styles.memberCard}
            bordered
            hoverable
            onClick={() => showMemberInfo("chairperson")}
          >
            <Avatar size={100} icon={<UserOutlined />} className={styles.avatar} />
            <Title level={4}>Chairperson</Title>
            <Text strong>Name: Rajesh Kumar</Text>
            <br />
            <Text>📞 9876543210</Text>
          </Card>
        </Col>

        {/* Convenor */}
        <Col xs={24} sm={12} md={8}>
          <Card
            className={styles.memberCard}
            bordered
            hoverable
            onClick={() => showMemberInfo("convenor")}
          >
            <Avatar size={100} icon={<TeamOutlined />} className={styles.avatar} />
            <Title level={4}>Convenor</Title>
            <Text strong>Name: Sita Devi</Text>
            <br />
            <Text>📞 9876501234</Text>
          </Card>
        </Col>

        {/* Other Members */}
        <Col xs={24} md={8}>
          <Card
            className={styles.memberCard}
            bordered
            hoverable
            onClick={() => showMemberInfo("other")}
          >
            <Title level={4}>Other Members</Title>
            <p>
              <WomanOutlined style={{ color: "hotpink" }} /> Women Representative
            </p>
            <p>
              <UserOutlined style={{ color: "brown" }} /> SC/ST Representative
            </p>
            <p>
              <UserOutlined style={{ color: "green" }} /> OBC Representative
            </p>
          </Card>
        </Col>
      </Row>

      {/* Button for Full List */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Button
          type="primary"
          size="large"
          onClick={() => router.push("/members")}
        >
          Full Member List →
        </Button>
      </div>

      {/* Modal for Member Info */}
      <Modal
        title={selectedMember?.title}
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        {selectedMember?.name && (
          <Paragraph>
            <strong>Name:</strong> {selectedMember.name}
          </Paragraph>
        )}
        {selectedMember?.phone && (
          <Paragraph>
            <strong>Phone:</strong> {selectedMember.phone}
          </Paragraph>
        )}
        <Paragraph style={{ whiteSpace: "pre-line" }}>
          {selectedMember?.details}
        </Paragraph>
      </Modal>
    </div>
  );
};

export default CommitteeMembers;
