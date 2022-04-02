import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import styles from "./BottomHeader.module.scss";
import Logo from "../../../../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { HeaderNavbarLinks } from "../../../../constants/headerNavbarLinks";
import { useDispatch, useSelector } from "react-redux";
import { selectSideBar } from "../../../../store/sidebarReducer/sidebarSelectors";
import { openSideBarAction } from "../../../../store/sidebarReducer/sidebarAction";
//burdada az onceki gibi mecbur kaldm props gonderdim
const BottomHeader = ({ openSideBarFunction }) => {
  const { activeSideBarName } = useSelector(selectSideBar);
  const dispatch = useDispatch();

  const handleModal = (par) => {
    Swal.fire({
      title: "Write your favourite car ",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
    });
  };
  const changeSideBarStatus = (par) => {
    openSideBarFunction();

    // bu calismaliydi ama calsimdai malesef:(
    dispatch(openSideBarAction());
  };

  return (
    <div className={styles.bottom_header}>
      <div className={styles.container_auto_center}>
        <div className={styles.bottom_content}>
          <a href="#" className={styles.bottom_logo}>
            <Image src={Logo} alt="Logo" width={120} height={120} />
          </a>
          <ul className={styles.ul}>
            {HeaderNavbarLinks.map((link) => {
              return (
                <Link href={"#"} key={link.linkName}>
                  <a
                    className={`${styles.linkname} ${
                      link.linkName === activeSideBarName ? styles.active : ""
                    }`}
                  >
                    {link.linkName}
                  </a>
                </Link>
              );
            })}
          </ul>

          <div className={styles.search_icon_div}>
            <AiOutlineSearch
              className={styles.search_icon}
              onClick={handleModal}
            />
          </div>

          <div className={styles.login_register}>
            <button className={styles.login_register_button}>
              Login/Register
            </button>
          </div>
          <div
            className={styles.hamburger_menu}
            // onClick={() => dispatch(openSideBarAction(true))}
            onClick={() => changeSideBarStatus()}
          >
            <GiHamburgerMenu className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
