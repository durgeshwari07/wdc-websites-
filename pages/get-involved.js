import React from "react";
import { Typography, Form, Input, Button, Card } from "antd";

const { Title, Paragraph } = Typography;

const GetInvolved = () => {
  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <Card style={{ maxWidth: 600, margin: "50px auto", padding: 20 }}>
      <Title level={2}>Get Involved</Title>
      <Paragraph>
        Fill out the form below to participate in WDC initiatives.
      </Paragraph>

      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="name" label="Your Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item name="interest" label="How would you like to contribute?">
          <Input.TextArea rows={3} />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default GetInvolved;
