import React, { useEffect, useState } from "react";

import Clock from "./Clock";
import DigitalClock from "./DigitalClock";
import Github from "../github/Github";

import { GoScreenFull } from "react-icons/go";
import { RxExitFullScreen } from "react-icons/rx";

type Props = {};

const MainClock = (props: Props) => {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullScreen = () => {
    const docEl = document.documentElement;

    if (!document.fullscreenElement) {
      docEl.requestFullscreen();
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
            className="custom-cursor text-center"
            onClick={() => setStep(1)}
          >
            <DigitalClock />
          </main>
        );
      case 1:
        return (
          <main className="custom-cursor" onClick={() => setStep(0)}>
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

      {/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (
        ""
      ) : (
        <div className="text-white absolute bottom-0 right-0 m-5 text-2xl lg:text-4xl transition hover:scale-150 sm:m-10">
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
      )}

      <Github />

      {renderSwitch()}
    </div>
  );
};

export default MainClock;
