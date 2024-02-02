import React, { useEffect, useState } from "react";

import clockImage from "../../assets/images/clock.png";

import "../../assets/styles/clock.css";

type Props = {};

const MainClock = (props: Props) => {
  useEffect(() => {
    const deg = 6;

    const hr = document.querySelector("#hr") as HTMLDivElement;
    const mn = document.querySelector("#mn") as HTMLDivElement;
    const sc = document.querySelector("#sc") as HTMLDivElement;

    setInterval(() => {
      let day = new Date();

      let hh = day.getHours() * 30;

      let mm = day.getMinutes() * deg;

      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
    });
  });

  //   Digital Time
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let digital = time.toLocaleTimeString().replace("AM","").replace("PM","");
  let hours_12  = time.toLocaleTimeString().replace(/[0-9]+/g,"").replace(":","").replace(":","");

  return (
    <div>
      <div className="clock">
        <img src={clockImage} alt="clock-image" />
        <div className="hour">
          <div className="hr" id="hr"></div>
        </div>
        <div className="min">
          <div className="mn" id="mn"></div>
        </div>
        <div className="sec">
          <div className="sc" id="sc"></div>
        </div>
      </div>

      <p> Current Date is = {currDate} </p>
      <p> Curremt Time is = {currTime} </p>
      <span className="font-clock num">{digital}</span>
      <span className="font-clock hours">{hours_12}</span>
      <br />

      <span>
        <h1>{time.toDateString()}</h1>
      </span>
    </div>
  );
};

export default MainClock;
