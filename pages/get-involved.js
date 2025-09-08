import React from "react";
import { Typography, Form, Input, Button, Checkbox, Card, message } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const GetInvolved = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    console.log("Form Submitted:", values);

    try {
      // Example: Replace with your real API call
      // await fetch("/api/submit", { method: "POST", body: JSON.stringify(values) });

      message.success("Thank you for your submission!");
      form.resetFields(); // Reset after success
    } catch (error) {
      console.error("Submission failed:", error);
      message.error("Something went wrong. Please try again later.");
    }
  };

  const contributionOptions = [
    { label: "Volunteer for events", value: "volunteer" },
    { label: "Help with administrative tasks", value: "admin_help" },
    { label: "Provide expert advice/skills", value: "expert_advice" },
    { label: "Fundraising support", value: "fundraising" },
    { label: "Community outreach", value: "community_outreach" },
    { label: "Suggest new initiatives", value: "new_initiatives" },
    { label: "Other (please specify below)", value: "other" },
  ];

  return (
    <Card style={{ maxWidth: 600, margin: "50px auto", padding: 20 }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Get Involved
      </Title>
      <Paragraph style={{ textAlign: "center", marginBottom: "30px" }}>
        Fill out the form below to participate in WDC initiatives.
      </Paragraph>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ contribution: [] }}
      >
        <Form.Item
          name="name"
          label="Your Name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Enter your full name"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email address!" },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="your.email@example.com"
          />
        </Form.Item>

        <Form.Item
          name="contribution"
          label="How would you like to contribute?"
          rules={[
            {
              required: true,
              message: "Please select at least one contribution!",
            },
          ]}
        >
          <Checkbox.Group options={contributionOptions} />
        </Form.Item>

        {/* Show textarea only if "Other" is selected */}
        <Form.Item
          shouldUpdate={(prev, curr) => prev.contribution !== curr.contribution}
          noStyle
        >
          {({ getFieldValue }) =>
            (getFieldValue("contribution") || []).includes("other") ? (
              <Form.Item
                name="otherContribution"
                label="Please specify your other contribution"
                rules={[
                  {
                    required: true,
                    message: "Please specify your contribution!",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Type your contribution here..."
                />
              </Form.Item>
            ) : null
          }
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default GetInvolved;
