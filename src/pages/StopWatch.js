import React from "react";

import { Provider } from "react-redux";
import MainStopWatch from "../components/stopwatch/MainStopWatch";
import store from "../services/redux/store";
import Navbar from "../components/navbar/Navbar";

const StopWatch = () => {
  return (
    <>
      <Provider store={store}>
        <MainStopWatch />
      </Provider>
      <Navbar />
    </>
  );
};

export default StopWatch;
