import {
  TOGGLE_SIDE_BAR_TRUE,
  TOGGLE_SIDE_BAR_FALSE,
  SET_ACTIVE_SIDEBAR,
} from "./sidebarTypes";

export const setSideBarActive = (nameOfActiveSidebar) => {
  return {
    type: SET_ACTIVE_SIDEBAR,
    payload: nameOfActiveSidebar,
  };
};

export const openSideBarAction = () => {
  return {
    type: TOGGLE_SIDE_BAR_TRUE,
  };
};
export const closeSideBarAction = () => {
  return {
    type: TOGGLE_SIDE_BAR_FALSE,
  };
};
