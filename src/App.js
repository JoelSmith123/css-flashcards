import React, { Component } from 'react';
import './styles/main.scss';
import Welcome from './Welcome';
import FlashcardBoard from './FlashcardBoard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameActive: null,
      playerName: ''
    };
  }

  acceptPlayerName = (e) => {
    this.setState({
      playerName: e.target.value
    })
  }

  updateGameActiveState = () => {
    this.setState({
      gameActive: true
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.gameActive ? (
            <FlashcardBoard playerName={this.state.playerName}/>
          ) : (
            <Welcome gameActive={this.updateGameActiveState} playerName={this.state.playerName} acceptPlayerName={this.acceptPlayerName}/>
         )
        }
      </div>
    );
  }
}

export default App;
