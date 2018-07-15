import React  from 'react';
import Buttons from './Buttons';
import Time from './Time';
import './Style.css';


class App extends React.Component {

  constructor () {
    super();
    this.state={
      seconds:0,
    };
  }

  componentWillMount() {
    setInterval(this.increment,1000);
  }

  render() {
    return (
      <div>
        <hr/><h1> STOPER </h1><hr/>
        <Time czas={this.state.seconds}/>
        <Buttons/>
      </div>
    );
  }


  increment = () => { this.setState({seconds:++this.state.seconds});  }
}


export default App;
