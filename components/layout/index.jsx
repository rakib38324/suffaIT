"use client";
import Head from "next/head";
import React, { useState } from "react";
import MainNavBar from "../common/header";
import Footer from "../common/footer";
import MobileNav from "../common/mobileNav";

const Layout = ({ children, pageTitle }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Explore SuffaIT, a leader in development, software, marketing, and email solutions. Elevate your brand with expert social media, website design, and distinctive branding elements for unparalleled business excellence."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <MainNavBar setOpen={setOpen} />
      <main>
        {children}
        {open && <MobileNav setOpen={setOpen} />}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
