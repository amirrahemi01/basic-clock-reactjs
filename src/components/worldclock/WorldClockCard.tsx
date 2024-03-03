import React, { Component } from "react";
import Clock from "react-clock";
import { TiDelete } from "react-icons/ti";

type Props = {
  Country: string;
  ISO: string;
  Timezone: string;
  Offset: string; // Assuming Offset is a string
  removeClick: () => void;
};

type State = {
  time: Date;
};

class WorldClock extends Component<Props, State> {
  intervalID: NodeJS.Timeout;

  state = {
    time: this.getCurrentTime(),
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
    };
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  getCurrentTime(): Date {
    let time = new Date();
    time.setMinutes(
      time.getMinutes() + time.getTimezoneOffset() + parseInt(this.props.Offset)
    );
    return time;
  }

  tick() {
    this.setState({
      time: this.getCurrentTime(),
    });
  }

  render() {
    return (
      <div className=" card flex flex-row lg:w-1/2 sm:w-3/4 w-11/12 bg-slate-960 rounded-2xl m-2 text-center overflow-hidden transition-transform duration-300 ease-out">
        <div className="flex flex-col items-center justify-around font-montserrat bg-slate-965 p-1 w-1/3">
          <h3 className="flex items-center justify-center text-base m-0 uppercase">
            <img
              src={
                "https://www.flagsapi.com/" + this.props.ISO + "/flat/24.png"
              }
              className="mx-1"
              alt={this.props.Country}
            />{" "}
            {this.props.Country}
          </h3>
          <h4 className="text-base font-normal m-0">{this.props.Timezone}</h4>
        </div>
        <div className="flex flex-col items-center justify-center w-2/3 py-4">
          <Clock value={this.state.time} className="clock" />
          <p className="mt-3">
            {this.state.time
              .toLocaleString()
              .substring(this.state.time.toLocaleString().indexOf(",") + 1)}
          </p>
        </div>
        <div style={{ width: "15%" }}>
          <div 
            onClick={this.props.removeClick} 
            className="flex items-center justify-center w-fit bg-red-200 text-white text-sm font-normal p-1 uppercase transition-all duration-200 ease-in overflow-hidden rounded-lg m-3 cursor-pointer hover:bg-red-250">
            <TiDelete className="block sm:hidden text-2xl" />
            <span className="hidden sm:block">Remove</span>
          </div>
        </div>
      </div>
    );
  }
}

export default WorldClock;
