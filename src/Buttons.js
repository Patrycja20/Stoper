import React from "react";

class Buttons extends React.Component
{
    constructor() {
        super();
        this.state = { text: 'Start' };
    }
    onButtonClick() {
        if(this.state.text=='Start') this.setState({ text: 'Stop' });
        else this.setState({ text: 'Start' });
    }
    onReset(){

    }
    render() {
        return <div><button onClick={this.onButtonClick.bind(this)}>{this.state.text}</button><button onClick={this.onReset.bind(this)}>Reset</button></div>
  }
}

export default Buttons;