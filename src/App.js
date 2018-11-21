import React from 'react';
import Buttons from './Buttons';
import Time from './Time';
import './Style.css';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      seconds: 0,
      isWorks: false,
    };
  }

  onStarted = () => {
    this.handle = setInterval(this.increment, 1000);
  };

  onStopped = () => {
    clearInterval(this.handle);
  };

  onReset = () => {
    this.setState({seconds: 0});
    this.setState({isWorks: false});
    this.onStopped();
  };

  onChangeWorks = () => {
    if (this.state.isWorks === false) {
      this.setState({isWorks: true});
      this.onStarted();
    }
    else {
      this.setState({isWorks: false});
      this.onStopped();
    }
  };

  onChangePause = (event) => {
    if (event.keyText === 'Space') this.onChangeWorks();
  };

  render() {
    return (
      <div>
        <hr/>
        <h1>STOPER</h1>
        <hr/>
        <Time moment={this.state.seconds}/>
        <Buttons work={this.onChangeWorks} pause={(e) => this.onChangePause(e)} onResetThe={this.onReset}/>
      </div>
    );
  }


  increment = () => {
    this.setState({seconds: ++this.state.seconds});
  }
}


export default App;
