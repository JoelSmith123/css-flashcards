import React, { Component } from 'react';
import './styles/main.scss';
import Welcome from './Welcome'

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
