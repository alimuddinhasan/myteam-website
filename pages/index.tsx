import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
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
      <section className='bg-midnight-green py-36 px-5 bg-[url("/assets/bg-pattern-home-4-about-3.svg"),_url("/assets/bg-pattern-home-5.svg")] bg-no-repeat bg-[position:left_top,_right_bottom]'>
        <h1 className='font-bold text-2xl text-center text-white'>
          Delivering real results for top companies. Some of our{" "}
          <span className='text-rapture-blue'>success stories.</span>
        </h1>
      </section>
      <GetStarted />
      <Footer />
    </Fragment>
  );
}
