import React from "react";

class Time extends React.Component {
  render() {
    let seconds = this.props.moment % 60;
    let minutes = (this.props.moment - seconds) / 60;
    let zero = '';
    if (seconds <= 9) zero = '0';
    return <h2>{minutes} : {zero}{seconds}</h2>

  }
}

export default Time;