import {
  GETTING_ALL_CARS_ERROR,
  GETTING_ALL_CARS_LOOADING,
  GETTING_ALL_CARS_SUCCESS,
  SHOW_ECONOMY_CARS,
  SHOW_LATEST_CARS,
  SHOW_PREMIUM_CARS,
} from "./carListTypes";

const initialState = {
  allCars: [],
  isLaoding: false,
  filteredCars: [],
  isError: false,
  errorMessage: "",
};

export const carListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_ALL_CARS_LOOADING: {
      return {
        ...state,
        isLaoding: true,
      };
    }
    case GETTING_ALL_CARS_SUCCESS: {
      return {
        ...state,
        isLaoding: false,
        allCars: action.payload,
        filteredCars: action.payload,
      };
    }
    case GETTING_ALL_CARS_ERROR: {
      return {
        ...state,
        isLaoding: false,
        isError: true,
        errorMessage: action.payload,
      };
    }

    case SHOW_ECONOMY_CARS: {
      let oldList = [...state.allCars];
      // console.log(state.filteredCars);

      return {
        ...state,
        filteredCars: oldList.splice(1, 6),
      };
    }
    case SHOW_PREMIUM_CARS: {
      let oldList = [...state.allCars];
      // console.log(state.allCars);

      return {
        ...state,
        filteredCars: oldList.splice(4, oldList.length),
      };
    }
    case SHOW_LATEST_CARS: {
      let oldList = [...state.allCars];
      // console.log(state.allCars);

      return {
        ...state,
        filteredCars: oldList,
      };
    }
    default:
      return state;
  }
};
