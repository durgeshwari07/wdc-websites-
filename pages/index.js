import React from "react";
import { Layout } from "antd";
import HeaderBanner from "../components/HeaderBanner";
import AboutUs from "../components/AboutUs";
import QuickLinks from "../components/QuickLinks";
import DevelopmentSectors from "../components/DevelopmentSectors";
import FooterSection from "../components/FooterSection";

const { Content } = Layout;

export default function Home() {
  return (
    <Layout>
      {/* ✅ Header Section */}
      <HeaderBanner />

      {/* ✅ Main Content */}
      <Content style={{ padding: "20px" }}>
        <AboutUs />
        <QuickLinks />
        <DevelopmentSectors />
        <CommitteeMembers />
        {/* If needed later: <ContactWDC /> */}
      </Content>

      {/* ✅ Custom Footer Section */}
      <FooterSection />
    </Layout>
  );
}
