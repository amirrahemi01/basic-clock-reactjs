import React, { Component } from 'react';
import Clock from 'react-clock';

type Props = {
  Country: string;
  ISO: string;
  Timezone: string;
  Offset: string; // Assuming Offset is a string
  removeClick: () => void;
}

type State = {
  time: Date;
}

class WorldClock extends Component<Props, State> {
  intervalID: NodeJS.Timeout;

  state = {
    time: this.getCurrentTime(),
}

  constructor(props: Props) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
    };
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  getCurrentTime(): Date {
    let time = new Date();
    time.setMinutes(time.getMinutes() + time.getTimezoneOffset() + parseInt(this.props.Offset, 10));
    return time;
  }

  tick() {
    this.setState({
      time: this.getCurrentTime()
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3>
            <img src={'https://www.flagsapi.com/' + this.props.ISO + '/flat/24.png'} className="flag" alt={this.props.Country} /> {this.props.Country}
          </h3>
          <h4>{this.props.Timezone}</h4>
        </div>
        <div className="card-body">
          <Clock value={this.state.time} className="clock" />
          <p>{this.state.time.toLocaleString()}</p>
        </div>
        <div className="card-footer">
          <div onClick={this.props.removeClick} className="btn-remove">Remove</div>
        </div>
      </div>
    );
  }
}

export default WorldClock;