import React from "react";
import { Layout } from "antd";
import HeaderBanner from "../components/HeaderBanner";
import QuickLinks from "../components/QuickLinks";
// import DevelopmentSectors from '../components/DevelopmentSectors';
// import ContactWDC from "@/components/ContactWDC";

const { Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout>
      <HeaderBanner />
      

      { <Content style={{ padding: "20px" }}>
        <QuickLinks />
        {/* <DevelopmentSectors /> */}
        {/* <ContactWDC /> */}
      </Content> }

      <Footer style={{ textAlign: "center" }}>
        Ward Development Committee ©2025 | Powered by React + Next.js + Ant Design
      </Footer>
    </Layout>
  );
};

export default Home;
