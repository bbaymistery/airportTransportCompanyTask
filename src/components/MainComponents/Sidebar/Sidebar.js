import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../images/logo.svg";
import { GrClose } from "react-icons/gr";
import { HeaderNavbarLinks } from "../../../constants/headerNavbarLinks";
import styles from "./Sidebar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectSideBar } from "../../../store/sidebarReducer/sidebarSelectors";
import { closeSideBarAction } from "../../../store/sidebarReducer/sidebarAction";

const Sidebar = ({ openSideBar, closeSideBarFunction }) => {
  //!hocam normalde bu  redux strukturu benim react redux projelerimde calisiyor burda sadece sknti cikiyor Her sefer reducer degisir ama ben degisen veriyi alamiyorum  Burda cok arasdrma yapdm ama bulamadim kusura bakmayn calissaydi bu kadar props karmaşası olmuycakdi
  const datasss = useSelector(selectSideBar);
  const dispatch = useDispatch();

  const changeSideBarStatus = (par) => {
    closeSideBarFunction();
    //update olunan veriyi alamiyorum malesef
    // dispatch(closeSideBarAction());
  };

  return (
    <div className={`${openSideBar ? styles.activesidebar : styles.sidebar} `}>
      {/* <div className={styles.container_auto_center}> */}
      <div className={styles.sidebar_content}>
        <a href="#" className={styles.bottom_logo}>
          <Image src={Logo} alt="Logo" width={120} height={80} />
        </a>
        <ul className={styles.ul}>
          {HeaderNavbarLinks.map((link) => {
            return (
              <Link href={"#"} key={link.linkName}>
                <a
                  className={`${styles.linkname} ${
                    link.linkName === datasss.activeSideBarName
                      ? styles.active
                      : ""
                  }`}
                >
                  {link.linkName}
                </a>
              </Link>
            );
          })}
        </ul>
        <div className={styles.login_register}>
          <button className={styles.login_register_button}>
            Login/Register
          </button>
        </div>
      </div>
      <div
        className={styles.close_menu}
        // onClick={() => dispatch(closeSideBarAction(false))}
        onClick={() => changeSideBarStatus()}
      >
        <GrClose className="icon" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
