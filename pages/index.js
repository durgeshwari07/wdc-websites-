import React from "react";
import Head from "next/head";
import { Layout } from "antd";

import HeaderBanner from "../components/HeaderBanner";
import AboutUs from "../components/AboutUs";
import QuickLinks from "../components/QuickLinks";
import DevelopmentSectors from "../components/DevelopmentSectors";
import CommitteeMembers from "../components/CommitteeMembers";
import CitizenParticipation from "../components/CitizenParticipation";
import FooterSection from "../components/FooterSection";

const { Content } = Layout;

export default function Home() {
  return (
    <>
      {/* ✅ Page Head */}
      <Head>
        <title>Ward Development Committee</title>
      </Head>

      {/* ✅ Page Layout */}
      <Layout>
        {/* ✅ Header Section */}
        <HeaderBanner />

        {/* ✅ Main Content */}
        <Content style={{ padding: "20px" }}>
          <AboutUs />
          <QuickLinks />
          <DevelopmentSectors />
          <CommitteeMembers />
          {/* ✨ New Section */}
          <CitizenParticipation />
          {/* If needed later: <ContactWDC /> */}
        </Content>

        {/* ✅ Footer */}
        <FooterSection />
      </Layout>
    </>
  );
}
