import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";
import Review from "@/components/Review";
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
      <section className='bg-deep-jungle-green py-36 px-5 bg-[url("/assets/bg-pattern-home-4-about-3.svg"),_url("/assets/bg-pattern-home-5.svg")] bg-no-repeat bg-[position:left_top,_right_bottom]'>
        <div className='flex flex-col justify-center max-w-5xl gap-8'>
          <h1 className='font-bold text-2xl text-center text-white'>
            Delivering real results for top companies. Some of our{" "}
            <span className='text-rapture-blue'>success stories.</span>
          </h1>
          <Review
            review='We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!'
            name='Aiysha Reese'
            jobTitle='Founder of Manage'
            avatar="assets/avatar-kady.jpg"
          />

          <Review
            review='We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!'
            name='Aiysha Reese'
            jobTitle='Founder of Manage'
            avatar="assets/avatar-kady.jpg"
          />
        </div>
      </section>
      <GetStarted />
      <Footer />
    </Fragment>
  );
}
