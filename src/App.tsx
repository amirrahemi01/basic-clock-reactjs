import React, { useRef } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StopWatch from "./pages/StopWatch";
import WorldClock from "./pages/WorldClock";
import Clock from "./pages/Clock";
import Error from "./pages/Error";


type Props = {
  
};

const App = (props: Props) => {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Stopwatch' element={<StopWatch />} />
        <Route path='Clock' element={<Clock />} />
        <Route path='Worldclock' element={<WorldClock />} />
        <Route path='PrivacyPolicy' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};


export default App