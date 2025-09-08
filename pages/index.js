import React from "react";
import Head from "next/head";
import { Layout } from "antd";

import HeaderBanner from "../components/HeaderBanner";
import aboutUs from "../components/aboutUs";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import DevelopmentSectors from "../components/DevelopmentSectors";
import CommitteeMembers from "../components/CommitteeMembers";
import CitizenParticipation from "../components/CitizenParticipation";
import FooterSection from "../components/FooterSection";
import AboutUs from "@/components/aboutUs";

const { Content } = Layout;

export default function Home() {
  return (
    <>
      <Head>
        <title>Ward Development Committee</title>
      </Head>

      {/* Page Layout */}
      <Layout>
        {/* Header Section */}
        <HeaderBanner />

        {/* Main Content */}
        <Content style={{ padding: "20px" }}>
          <aboutUs />
          <QuickLinks />
          <DevelopmentSectors />
          <CommitteeMembers />
          <CitizenParticipation />
        </Content>

        {/* Footer Section */}
        <FooterSection />
      </Layout>
    </>
  );
}
