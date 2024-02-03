import React, { useEffect, useState } from "react";

import clockImage from "../../assets/images/clock.png";
import { FaRegClock } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import Clock from "./Clock";
import DigitalClock from "./DigitalClock";
import { GoScreenFull } from "react-icons/go";
import { RxExitFullScreen } from "react-icons/rx";

// import "../../assets/styles/clock.css";

type Props = {};

const MainClock = (props: Props) => {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const updateFullScreenState = () => {
      setFullscreen(Boolean(document.fullscreenElement));
    };

    updateFullScreenState();
    document.addEventListener("fullscreenchange", updateFullScreenState);

    return () => {
      document.removeEventListener("fullscreenchange", updateFullScreenState);
    };
  }, []);

  const [step, setStep] = useState(0);
  function renderSwitch() {
    switch (step) {
      case 0:
        return (
          <main
            className="cursor-pointer text-center"
            onClick={() => setStep(1)}
          >
            <DigitalClock />
          </main>
        );
      case 1:
        return (
          <main className="cursor-pointer" onClick={() => setStep(0)}>
            <Clock />
          </main>
        );
      default:
        return "";
    }
  }

  return (
    <div className="bg-slate-900 text-Slate-100 h-lvh flex flex-col items-center justify-center">
      <br />

      <div className="text-white absolute bottom-0 right-0 m-11 text-4xl">
        {!fullscreen ? (
          <button onClick={toggleFullScreen}>
            <GoScreenFull />
          </button>
        ) : (
          <button onClick={toggleFullScreen}>
            <RxExitFullScreen />
          </button>
        )}
      </div>

      {renderSwitch()}
    </div>
  );
};

export default MainClock;
