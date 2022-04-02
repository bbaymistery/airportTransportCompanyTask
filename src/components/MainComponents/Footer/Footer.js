import React from "react";
import styles from "./Footer.module.scss";
import { AiOutlineContainer, AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <p>Signup For News & Discounts</p>
        <input type="text" placeholder="Enter Email Adress" />
        <button>
          <AiOutlineContainer className={styles.icon} />
          Subscribe
        </button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.about}>
          <h3>About Us</h3>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            molestias quo expedita recusandae repudiandae.
          </span>
          <p>
            READ MORE <HiOutlineArrowNarrowRight className={styles.icon} />{" "}
          </p>
        </div>
        <div className={styles.uls}>
          <div className={styles.ul}>
            <h3>Our Services</h3>
            <ul>
              <li>Lorem s</li>
              <li>Lore mswed</li>
              <li>Lorem sk</li>
              <li>Lore mswedw</li>
              <li>Lor ems edwe</li>
            </ul>
          </div>

          <div className={styles.ul}>
            <h3>Quick Links</h3>
            <ul>
              <li>Lorem s</li>
              <li>Lore mswed</li>
              <li>Lorem sk</li>
              <li>Lore mswedw</li>
              <li>Lor ems edwe</li>
            </ul>
          </div>

          <div className={styles.ul}>
            <h3>Inventory</h3>
            <ul>
              <li>Lorem s</li>
              <li>Lore mswed</li>
              <li>Lorem sk</li>
              <li>Lore mswedw</li>
              <li>Lor ems edwe</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
