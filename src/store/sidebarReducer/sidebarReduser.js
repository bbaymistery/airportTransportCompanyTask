import {
  SET_ACTIVE_SIDEBAR,
  TOGGLE_SIDE_BAR_FALSE,
  TOGGLE_SIDE_BAR_TRUE,
} from "./sidebarTypes";

const INITIAL_STATE = {
  activeSideBarName: "home",
  isSideBarOpen: false,
};

export const sidebarReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_SIDEBAR: {
      return {
        ...state,
        activeSideBarName: action.payload,
      };
    }

    case TOGGLE_SIDE_BAR_TRUE: {
      console.log(state);

      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen,
      };
    }
    case TOGGLE_SIDE_BAR_FALSE: {
      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen,
      };
    }
    default:
      return state;
  }
};
