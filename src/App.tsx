import React, { useRef } from "react";

import StopWatch from "./pages/StopWatch";
import WorldClock from "./pages/WorldClock";
import Clock from "./pages/Clock";
import Error from "./pages/Error";

import { Route, Routes } from "react-router-dom";

import "./index.css";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="Stopwatch" element={<StopWatch />} />
        <Route path="Clock" element={<Clock />} />
        <Route path="Worldclock" element={<WorldClock />} />
        <Route path="PrivacyPolicy" element={<Clock />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
