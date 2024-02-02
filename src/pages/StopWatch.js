import React from "react";
import { Provider } from "react-redux";
import MainStopWatch from "../components/stopwatch/MainStopWatch";
import store from "../services/redux/store";

const StopWatch = () => {
  return (
    <>
      <Provider store={store}>
        <MainStopWatch />
      </Provider>
    </>
  );
};

export default StopWatch;
