import React from "react";
import styles from "./Features.module.scss";
import { BsArrowRightShort } from "react-icons/bs";
import IMAGE1 from "../../images/latestImage/bmw.jpg";
import IMAGE2 from "../../images/latestImage/mr.jpg";
import IMAGE3 from "../../images/latestImage/opl.jpg";
import Image from "next/image";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.container_auto_center}>
        <div className={styles.features_card}>
          <Image
            src={IMAGE2}
            width="100%"
            height="100%"
            layout="fixed"
            objectFit="cover"
            alt="Logo"
          />

          <h1 className={styles.features_title}>
            We offer 24/7 <br />
            Customer Support
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            dolorum consequatur rem rerum asperiores nam blanditiis earum
            numquam consequuntur ex accusamus dignissimos, atque natus
            temporibus.
          </p>
          <button className={styles.features_btn}>
            Read more
            <BsArrowRightShort className={styles.btn_icon} />
          </button>
        </div>
        <div className={styles.features_card}>
          <Image
            src={IMAGE1}
            width="100%"
            height="100%"
            layout="fixed"
            objectFit="cover"
            alt="Logo"
            className={styles.card_img}
          />

          <h1 className={styles.features_title}>
            We offer 24/7 <br />
            Customer Support
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            dolorum consequatur rem rerum asperiores nam blanditiis earum
            numquam consequuntur ex accusamus dignissimos, atque natus
            temporibus.
          </p>
          <button className={styles.features_btn}>
            Read more
            <BsArrowRightShort className={styles.btn_icon} />
          </button>
        </div>

        <div className={styles.features_card}>
          <Image
            src={IMAGE3}
            width="100%"
            height="100%"
            layout="fixed"
            objectFit="cover"
            alt="Logo"
          />

          <h1 className={styles.features_title}>
            We offer 24/7 <br />
            Customer Support
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            dolorum consequatur rem rerum asperiores nam blanditiis earum
            numquam consequuntur ex accusamus dignissimos, atque natus
            temporibus.
          </p>
          <button className={styles.features_btn}>
            Read more
            <BsArrowRightShort className={styles.btn_icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
