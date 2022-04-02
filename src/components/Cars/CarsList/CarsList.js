import React, { useEffect, useState } from "react";
import styles from "./CarsList.module.scss";
import { selectCarsButtons } from "../../../constants/selectCarsButtons";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { BiTachometer } from "react-icons/bi";
import { FaCashRegister } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";

import {
  getAllCarsFrom,
  showEconomyCars,
  showLatestAction,
  showPremiumCars,
} from "../../../store/carlistReducer/carListActions";
import Image from "next/image";
//it is fr spinner
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const CarsList = () => {
  const [activeButton, setActiveButton] = useState("Latest Deal");
  const [bookedCarName, setbookedCarName] = useState("");
  const datas = useSelector((state) => state.carListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarsFrom());
  }, []);
  const changeActiveBtn = (nameofactive) => {
    setActiveButton(nameofactive);
    if (nameofactive === "Economy Class") {
      return dispatch(showEconomyCars());
    } else if (nameofactive === "Premium Class") {
      return dispatch(showPremiumCars());
    } else if (nameofactive === "Latest Deal") {
      return dispatch(showLatestAction());
    }
  };
  const bookAcar = (cr) => {
    //we can use here add to cart and keep items in the car
    // but i will go with a short way
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    setbookedCarName(cr.user.name);
    if (localStorage.getItem("bookedCar")) {
      localStorage.removeItem("bookedCar");
      localStorage.setItem("bookedCar", JSON.stringify(cr.user.name));
      setbookedCarName(JSON.parse(localStorage.getItem("bookedCar")));
    } else {
      localStorage.setItem("bookedCar", JSON.stringify(cr.user.name));
    }
  };

  const withdraw = (par) => {
    Swal.fire("Canceled ");
    if (localStorage.getItem("bookedCar")) {
      localStorage.removeItem("bookedCar");
      setbookedCarName("");
    }
  };

  return (
    <div className={styles.list_container}>
      <div className={styles.buttons}>
        {selectCarsButtons.map((carBtn) => {
          return (
            <button
              key={carBtn.linkName}
              className={`${styles.button} ${
                activeButton === carBtn.linkName ? "active_selectButton" : ""
              }`}
              onClick={() => changeActiveBtn(carBtn.linkName)}
            >
              {carBtn.linkName}
            </button>
          );
        })}
      </div>
      <div className={styles.cars_cards}>
        {/* //hocam burda verilerin direk almam lazm burdaki struktura gore ama olmuyor Genelde next js le calismadigimnan muhtemelen birseyleri eksik yaziyorum Bubenim next js ile ilk projem  */}
        {/* if loading is true spinner will active */}

        {datas?.isLaoding ? (
          <div className={styles.load}>
            <ClipLoader css={override} size={150} />
            <p>
              The data should come directly. If we look in Redux, all the data
              is there, but I cannot pull the data in the initial part. I'm
              doing redux with Next js for the first time, I probably wrote
              something missing The rest of is working
            </p>
          </div>
        ) : (
          datas?.filteredCars.map((cr, index) => {
            return (
              <div
                key={index}
                className={`${styles.car_card} ${
                  cr.user.name === bookedCarName ? "car_card_booked" : ""
                }`}
              >
                <div className={styles.car_top}>
                  <Image
                    src={cr.urls.small}
                    layout="responsive"
                    alt=""
                    width={100}
                    height={60}
                  />
                </div>
                <div className={styles.car_bottom}>
                  <h1 className={styles.bottom_title}>{cr.user.name}</h1>
                  <div className={styles.car_middle}>
                    <div className={styles.line1}>
                      <div></div>
                      <div></div>
                    </div>
                    <div className={styles.car_price}>
                      <p>
                        From <span>${cr?.likes === 0 ? 1 : cr?.likes}0</span> /
                        Day
                      </p>
                    </div>
                    <div className={styles.line1}>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className={styles.car_features}>
                    <div className={styles.car_featuress}>
                      <BiTachometer className={styles.car_features_icon} />
                      <p className={styles.p}>56,000</p>
                    </div>
                    <div className={styles.car_featuress}>
                      <FaCashRegister className={styles.car_features_icon} />

                      <p className={styles.p}>Automtic</p>
                    </div>
                    <div className={styles.car_featuress}>
                      <BiTachometer className={styles.car_features_icon} />
                      <p className={styles.p}>4 Persons</p>
                    </div>
                    <div className={styles.car_featuress}>
                      <AiOutlineShopping className={styles.car_features_icon} />
                      <p className={styles.p}>3 Bags</p>
                    </div>
                  </div>

                  {cr.user.name === bookedCarName ? (
                    <div
                      className={styles.book_now}
                      onClick={() => withdraw(cr)}
                    >
                      <button className={styles.button}>Withdraw</button>
                      <AiOutlineHeart className={styles.i} />
                    </div>
                  ) : (
                    <div
                      className={styles.book_now}
                      onClick={() => bookAcar(cr)}
                    >
                      <button className={styles.button}>Book Now</button>
                      <AiOutlineHeart className={styles.i} />
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
      <div></div>
    </div>
  );
};

export default CarsList;
