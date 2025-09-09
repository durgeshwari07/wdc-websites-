import { useRouter } from "next/router";
import { Typography, Card, Button, Avatar } from "antd";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import styles from "../../styles/MemberDetails.module.css";  

const { Title, Paragraph } = Typography;

export default function MemberDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Members Data
  const membersData = {
    1: { name: "Rajesh Kumar", role: "Chairperson", contact: "9876543210", avatar: "" },
    2: { name: "Sita Devi", role: "Convenor", contact: "9876501234", avatar: "" },
    3: { name: "Anita Sharma", role: "Women Representative", contact: "9876512345", avatar: "" },
    4: { name: "Ramesh Das", role: "SC/ST Representative", contact: "9876523456", avatar: "" },
    5: { name: "Mohammed Ali", role: "OBC Representative", contact: "9876534567", avatar: "" },
  };

  const member = membersData[id];

  //  Handle invalid or loading state
  if (!member) return <p>Loading...</p>;

  return (
    <div className={styles.memberDetailsPage}>
      <Card className={styles.memberCard}>
        {/* Avatar */}
        <Avatar
          size={120}
          icon={<UserOutlined />}
          src={member.avatar || null}
          className={styles.avatar}
        />

        {/* Member Info */}
        <Title level={2}>{member.name}</Title>
        <Paragraph>
          <strong>Role:</strong> {member.role}
        </Paragraph>
        <Paragraph>
          <strong>Contact:</strong> {member.contact}
        </Paragraph>

        {/* Back Button */}
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          className={styles.backButton}
          onClick={() => router.push("/members")}
        >
          Back to Member List
        </Button>
      </Card>
    </div>
  );
}
