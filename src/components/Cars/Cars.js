import React from "react";
import styles from "./Cars.module.scss";
import CarsList from "./CarsList/CarsList";
import CarsTitle from "./CarsTitle/CarsTitle";
const Cars = () => {
  return (
    <div className={styles.cars_container}>
      <div className={styles.container_auto_center}>
        <CarsTitle />
        <CarsList />
      </div>
    </div>
  );
};

export default Cars;
