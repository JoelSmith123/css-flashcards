import React, { Component } from 'react';
import './styles/main.scss';
import Welcome from './Welcome';
import FlashcardBoard from './FlashcardBoard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameActive: null
    };
  }

  updateGameActiveState = () => {
    this.setState({
      gameActive: true
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.gameActive ? (
          <FlashcardBoard />
        ) : (
          <Welcome gameActive={this.updateGameActiveState}/>
        )}
      </div>
    );
  }
}

export default App;
