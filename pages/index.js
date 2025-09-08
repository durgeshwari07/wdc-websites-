import React from "react";
import Head from "next/head";
import { Layout } from "antd";

import HeaderBanner from "../components/HeaderBanner";
import AboutUs from "../components/aboutUs";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import DevelopmentSectors from "../components/DevelopmentSectors";
import CommitteeMembers from "../components/CommitteeMembers";
import CitizenParticipation from "../components/CitizenParticipation";
import FooterSection from "../components/FooterSection";


const { Content } = Layout;

export default function Home() {
  return (
    <>
      <Head>
        <title>Ward Development Committee</title>
      </Head>

<<<<<<< HEAD
      <Layout>
        <HeaderBanner />
=======
      {/*  Page Layout */}
      <Layout>
        {/*  Header Section */}
        <HeaderBanner />

        {/*  Main Content
         */}
>>>>>>> save-work
        <Content style={{ padding: "20px" }}>
          <AboutUs />
          <QuickLinks />
          <DevelopmentSectors />
          <CommitteeMembers />
          <CitizenParticipation />
<<<<<<< HEAD
        </Content>
=======
          </Content>

        
>>>>>>> save-work
        <FooterSection />
      </Layout>
    </>
  );
}