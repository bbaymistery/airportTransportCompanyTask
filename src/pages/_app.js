import "../styles/global.scss";

import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
// import "../scss/main.scss";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);

// import { Provider } from "react-redux";
// import { useStore } from "../store/store";

// export default function App({ Component, pageProps }) {
//   const store = useStore(pageProps.initialReduxState);

//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
