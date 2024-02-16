import React, { Component } from "react";
import WorldClockCard from "./WorldClockCard";
import Timezones from "../../services/data/timezones.json";

type Timezone = {
  Timezone: string;
  Country: string;
  ISO: string;
  Offset: string;
};

type State = {
  clocks: Timezone[];
  selectedClock: string;
};

class WorldClockMain extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      clocks: [],
      selectedClock: "Asia/Rasht",
    };
    this.addTimeZone = this.addTimeZone.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ selectedClock: e.target.value });
  }

  addTimeZone() {
    if (
      this.state.clocks.findIndex(
        (c) => c.Timezone === this.state.selectedClock
      ) < 0
    ) {
      let zone = Timezones.find((k) => k.Timezone === this.state.selectedClock);
      if (zone) {
        // Convert the Offset to a string if necessary
        const timeZoneWithStringOffset = {
          ...zone,
          Offset: String(zone.Offset),
        };
        this.setState((prevState) => ({
          clocks: [...prevState.clocks, timeZoneWithStringOffset],
        }));
      }
    }
  }

  removeClick(zone: string) {
    let updateClocks = [...this.state.clocks];
    let index = updateClocks.findIndex((t) => t.Timezone === zone);
    updateClocks.splice(index, 1);
    this.setState({
      clocks: updateClocks,
    });
  }

  render() {
    let optionItems = Timezones.map((zone) => (
      <option value={zone.Timezone} key={zone.Timezone}>
        {zone.Country} ({zone.Timezone})
      </option>
    ));

    let clocks = this.state.clocks.map((zone) => (
      <WorldClockCard
        {...zone}
        key={zone.Timezone}
        removeClick={() => this.removeClick(zone.Timezone)}
      />
    ));

    return (
      <>
        <div className="bg-black text-white min-h-svh flex flex-col items-center justify-start w-full pt-10 sm:pt-40">
          <h2>Choose a timezone</h2>
          <select
            className="bg-gray-500 text-black p-5 rounded-2xl"
            id="ddlProducts"
            value={this.state.selectedClock}
            onChange={this.handleChange}
          >
            {optionItems}
          </select>
          <button onClick={this.addTimeZone} className="form-btn">
            Add Clock
          </button>
          {clocks}
        </div>
      </>
    );
  }
}

export default WorldClockMain;
