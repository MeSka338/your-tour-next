import React from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "YourTour",
  description: "Сайт про путешествие",
  keywords: "YourTour, tour, travel, SNP",
};
