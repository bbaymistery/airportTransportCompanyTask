import Image from "next/image";
import React from "react";
import imageLogo from "../../../images/logo.svg";
import styles from "./CarsTitle.module.scss";
const CarsTitle = () => {
  return (
    <div className={styles.title_container}>
      <a href="#" className={styles.title_logo}>
        <div className={styles.lines}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
        </div>
        <Image
          src={imageLogo}
          className={styles.title_img}
          alt="Logo"
          width={120}
          height={120}
        />
        <div className={styles.lines}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
        </div>
      </a>
      <div className={styles.title}>CHOOSE YOUR CAR</div>
      <div className={styles.title_desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque
        nulla iure maxime quo ab ex sunt perspiciatis laboriosam veniam.
      </div>
    </div>
  );
};

export default CarsTitle;
