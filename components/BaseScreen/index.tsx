import Head from "next/head";
import React, { Fragment, ReactNode } from "react";
import Footer from "../Footer";
import GetStarted from "../GetStarted";
import Header from "../Header";

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
      <Header />
      {children}
      <GetStarted />
      <Footer />
    </Fragment>
  );
}
