import Head from "next/head";
import Image from "next/image";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

const Layout = ({ children, title = "Cars" }) => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const openSideBarFunction = (par) => {
    setOpenSideBar(true);
  };

  const closeSideBarFunction = () => {
    setOpenSideBar(false);
  };
  return (
    <div className={styles.container_layout}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        openSideBar={openSideBar}
        openSideBarFunction={openSideBarFunction}
      />
      <Sidebar
        openSideBar={openSideBar}
        closeSideBarFunction={closeSideBarFunction}
      />
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
