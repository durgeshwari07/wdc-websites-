import React from "react";
import Head from "next/head";
import { Layout } from "antd";

import HeaderBanner from ".././components/HeaderBanner/";
import AboutUs from ".././components/AboutUs/";
import QuickLinks from ".././components/QuickLinks/QuickLinks";
import DevelopmentSectors from ".././components/DevelopmentSectors/";
import CommitteeMembers from ".././components/CommitteeMembers/";
import CitizenParticipation from ".././components/CitizenParticipation/";
import FooterSection from ".././components/FooterSection/";

const { Content } = Layout;

export default function Home() {
  return (
    <>
      <Head>
        {/* You can add your head content here, like title and meta tags */}
        <title>WDC Project</title>
      </Head>

      <Layout>
        <HeaderBanner />
        <Content>
          <AboutUs />
          <QuickLinks />
          <DevelopmentSectors />
          <CommitteeMembers />
          <CitizenParticipation />
        </Content>
        <FooterSection />
      </Layout>
    </>
  );
}