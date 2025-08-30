// pages/members.js
import { Table, Typography, Button, Input, Select } from "antd";
import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Members.module.css";

const { Title } = Typography;
const { Option } = Select;

export default function Members() {
  const router = useRouter();

  // Example member data
  const allMembers = [
    { key: "1", name: "Rajesh Kumar", role: "Chairperson", contact: "9876543210" },
    { key: "2", name: "Sita Devi", role: "Convenor", contact: "9876501234" },
    { key: "3", name: "Anita Sharma", role: "Women Representative", contact: "9876512345" },
    { key: "4", name: "Ramesh Das", role: "SC/ST Representative", contact: "9876523456" },
    { key: "5", name: "Mohammed Ali", role: "OBC Representative", contact: "9876534567" },
  ];

  const [searchText, setSearchText] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  // Filter logic
  const filteredMembers = allMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesRole = roleFilter === "All" || member.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const columns = [
    { title: "Member Name", dataIndex: "name", key: "name" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Contact", dataIndex: "contact", key: "contact" },
  ];

  return (
    <div className={styles.membersPage}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
        Full Committee Member List
      </Title>

      {/* Filters Section */}
      <div className={styles.filters}>
        <Input
          placeholder="Search by name..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 250, marginRight: 16 }}
        />

        <Select
          value={roleFilter}
          onChange={(value) => setRoleFilter(value)}
          style={{ width: 220 }}
        >
          <Option value="All">All Roles</Option>
          <Option value="Chairperson">Chairperson</Option>
          <Option value="Convenor">Convenor</Option>
          <Option value="Women Representative">Women Representative</Option>
          <Option value="SC/ST Representative">SC/ST Representative</Option>
          <Option value="OBC Representative">OBC Representative</Option>
        </Select>
      </div>

      {/* Table with clickable rows */}
      <Table
        dataSource={filteredMembers}
        columns={columns}
        pagination={false}
        bordered
        style={{ marginTop: 20 }}
        onRow={(record) => ({
          onClick: () => router.push(`/members/${record.key}`), // dynamic routing
        })}
      />

      {/* Back Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button 
          icon={<ArrowLeftOutlined />} 
          onClick={() => router.push("/committee-members")}
        >
          Back to Committee Members
        </Button>
        <Button 
    type="default"
    onClick={() => router.push("/")}
  >
    ← Back to Home
  </Button>
      </div>
    </div>
  );
}
