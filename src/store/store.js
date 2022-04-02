import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { sidebarReduser } from "./sidebarReducer/sidebarReduser";
import { carListReducer } from "./carlistReducer/carListReducer";
const reducer = combineReducers({
  sidebarReduser: sidebarReduser,
  carListReducer: carListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  // rootReducer,
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// import { useMemo } from "react";
// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunkMiddleware from "redux-thunk";
// // import reducers from "./reducers";
// import sidebarReduser from "./sidebarReducer/sidebarReduser";
// const reducers = combineReducers({
//   sidebarReduser: sidebarReduser,
// });
// let store;

// function initStore(initialState) {
//   return createStore(
//     reducers,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunkMiddleware))
//   );
// }

// export const initializeStore = (preloadedState) => {
//   let _store = store ?? initStore(preloadedState);

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     });
//     // Reset the current store
//     store = undefined;
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === "undefined") return _store;
//   // Create the store once in the client
//   if (!store) store = _store;

//   return _store;
// };

// export function useStore(initialState) {
//   const store = useMemo(() => initializeStore(initialState), [initialState]);
//   return store;
// }
