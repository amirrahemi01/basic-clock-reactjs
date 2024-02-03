import React, { useEffect, useState } from "react";

type Props = {};

const DigitalClock = (props: Props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  let digital = time.toLocaleTimeString().replace("AM", "").replace("PM", "");
  let hours_12 = time
    .toLocaleTimeString()
    .replace(/[0-9]+/g, "")
    .replace(":", "")
    .replace(":", "");

  return (
    <>
      <div className="font-clock text-slate-300">
        <span className="num text-11xl">{digital}</span>
        <span className="hours text-7xl">{hours_12}</span>
      </div>

      <>
        <h1 className="font-clock text-5xl text-slate-300">{time.toDateString()}</h1>
      </>
    </>
  );
};

export default DigitalClock;
