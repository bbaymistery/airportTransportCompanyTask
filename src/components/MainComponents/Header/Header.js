import React from "react";
import BottomHeader from "./BottomHeader/BottomHeader";
import styles from "./Header.module.scss";

import TopHeader from "./TopHeader/TopHeader";
const Header = ({ openSideBarFunction }) => {
  return (
    <div className={styles.main_header}>
      <TopHeader />
      <BottomHeader openSideBarFunction={openSideBarFunction} />
    </div>
  );
};

export default Header;
