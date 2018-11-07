import React, { Component } from 'react';
import './styles/main.scss';
import Welcome from './Welcome';
import FlashcardBoard from './FlashcardBoard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameActive: null,
      playerName: '',
      returningPlayer: false
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

  updateReturningPlayerName = (name) => {
    this.setState({
      playerName: name,
      returningPlayer: true
    })
    this.updateGameActiveState()
  }

  render() {
    return (
      <div className="App">
        {
          this.state.gameActive ? (
            <FlashcardBoard playerName={this.state.playerName} returningPlayer={this.state.returningPlayer}/>
          ) : (
            <Welcome gameActive={this.updateGameActiveState} playerName={this.state.playerName} acceptPlayerName={this.acceptPlayerName} updateReturningPlayerName={this.updateReturningPlayerName}/>
         )
        }
      </div>
    );
  }
}

export default App;
