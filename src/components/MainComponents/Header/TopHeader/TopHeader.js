import React from "react";
import styles from "./TopHeader.module.scss";

import { FaPhoneSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
const TopHeader = () => {
  return (
    <div className={styles.top_header}>
      <div className={styles.container_auto_center}>
        <div className={styles.top_content}>
          <div className={styles.top_header_left}>
            <div className={styles.left_informations}>
              <div className={styles.phone}>
                <span className={styles.ph_icon}>
                  <FaPhoneSquare />
                </span>
                <span>(369)2900 4800</span>
              </div>
              <div className={styles.email}>
                <span className={styles.email_icon}>
                  <AiOutlineMail />
                </span>
                <span>support#domain.com</span>
              </div>
            </div>
          </div>

          <div className={styles.top_header_right}>
            <div className={styles.right_icons}>
              <span className={styles.iicon}>
                <AiOutlineFacebook />
              </span>
              <span className={styles.iicon}>
                <AiOutlineInstagram />
              </span>
              <span className={styles.iicon}>
                <AiOutlineTwitter />
              </span>
              <span className={styles.iicon}>
                <AiOutlineYoutube />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
