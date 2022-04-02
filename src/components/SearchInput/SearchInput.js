import React from "react";
import styles from "./SearchCar.module.scss";
import { MdLocationOn } from "react-icons/md";
BiRightArrowCircle;
import { BiRightArrowCircle } from "react-icons/bi";
import { AiFillStar, AiTwotoneStar } from "react-icons/ai";
const SearchInput = () => {
  return (
    <div className={styles.searchInput_container}>
      <div className={styles.container_auto_center}>
        <div className={styles.left}>
          <div className={styles.stars}>
            <AiFillStar className={styles.outline_star} />
            <AiTwotoneStar className={styles.ful_star} />
            <AiFillStar className={styles.outline_star} />
          </div>
          <h1 className={styles.title}>
            Find your <br />
            perfect car
          </h1>
        </div>
        <div className={styles.right}>
          <div className={styles.input_section}>
            <div className={styles.input_div}>
              <input
                type="text"
                placeholder="Pick up Location"
                className={styles.input}
              />
              <MdLocationOn className={styles.input_icon} />
            </div>

            <div className={styles.input_div}>
              <input
                type="text"
                placeholder="Pick up Location"
                className={styles.input}
              />
              <MdLocationOn className={styles.input_icon} />
            </div>
          </div>
          <div className={styles.input_section}>
            <div className={styles.input_div}>
              <input
                type="text"
                placeholder="Pick up Location"
                className={styles.input}
              />
              <MdLocationOn className={styles.input_icon} />
            </div>

            <div className={styles.input_div}>
              <input
                type="text"
                placeholder="Pick up Location"
                className={styles.input}
              />
              <MdLocationOn className={styles.input_icon} />
            </div>
          </div>
          <button className={styles.right_button}>
            <BiRightArrowCircle className={styles.btnicon} />
            Search
          </button>
        </div>

        <div className={styles.border_div}></div>
      </div>
    </div>
  );
};

export default SearchInput;
