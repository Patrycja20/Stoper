import React from "react";

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {text: 'Start'};
  }

  onButtonClick = () => {
    if (this.state.text === 'Start') this.setState({text: 'Stop'});
    else this.setState({text: 'Start'});
    this.props.zmien();
  }

  onResetClick = () => {
    this.setState({text: 'Start'});
    this.props.zresetuj();
  }

  render() {
    return <div>
      <button onClick={this.onButtonClick} onKeyDown={this.props.zmien2}>{this.state.text}</button>
      <button onClick={this.onResetClick}>Reset</button>
    </div>
  }
}

export default Buttons;