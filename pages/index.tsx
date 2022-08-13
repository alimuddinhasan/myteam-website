import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Frontend Mentor | myteam website challenge - Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Footer />
    </Fragment>
  );
}
