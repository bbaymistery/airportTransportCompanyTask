import axios from "axios";
import {
  GETTING_ALL_CARS_ERROR,
  GETTING_ALL_CARS_LOOADING,
  GETTING_ALL_CARS_SUCCESS,
  SHOW_ECONOMY_CARS,
  SHOW_LATEST_CARS,
  SHOW_PREMIUM_CARS,
} from "./carListTypes";

export const getAllCarsFrom = () => (dispatch) => {
  dispatch({ type: GETTING_ALL_CARS_LOOADING });
  axios
    .get(
      "https://api.unsplash.com/photos/?client_id=85UMKN2cYGD9XOHIpliTCVCwNqG5It5jJgFX5Pci7M8"
    )
    .then((response) =>
      dispatch({ type: GETTING_ALL_CARS_SUCCESS, payload: response.data })
    )
    .catch((error) =>
      dispatch({ type: GETTING_ALL_CARS_ERROR, payload: error })
    );
};

export const showLatestAction = () => {
  return {
    type: SHOW_LATEST_CARS,
  };
};
export const showPremiumCars = () => {
  return {
    type: SHOW_PREMIUM_CARS,
  };
};
export const showEconomyCars = () => {
  return {
    type: SHOW_ECONOMY_CARS,
  };
};
