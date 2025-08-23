import React from "react";
import { Layout } from "antd";
import HeaderBanner from "../components/HeaderBanner";
import AboutUs from "../components/AboutUs";
import QuickLinks from "../components/QuickLinks";
import DevelopmentSectors from "../components/DevelopmentSectors";
// import ContactWDC from "@/components/ContactWDC";

const { Content, Footer } = Layout;

export default function Home() {
  return (
    <Layout>
      {/* Header Section */}
      <HeaderBanner />

      {/* Main Content */}
      <Content style={{ padding: "20px" }}>
        <AboutUs />
        <QuickLinks />
        <DevelopmentSectors />
        {/* <ContactWDC /> */}
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center" }}>
        Ward Development Committee ©2025 | Powered by React + Next.js + Ant Design
      </Footer>
    </Layout>
  );
}
