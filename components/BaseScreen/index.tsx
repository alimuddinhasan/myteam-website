import Head from "next/head";
import React, { Fragment, ReactNode } from "react";
import Footer from "../Footer";
import GetStarted from "../GetStarted";
import Navbar from "../Navbar";

interface IBaseScreenProps {
  pageTitle: string;
  children?: ReactNode | undefined;
}
export default function BaseScreen({ children, pageTitle }: IBaseScreenProps) {
  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
      <GetStarted />
      <Footer />
    </Fragment>
  );
}
