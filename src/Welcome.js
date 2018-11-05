import React, { Component } from 'react';


export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      newPlayer: null,
      previousState: null
    };
  }

  changeStateToPreviousState = () => {
    this.setState({
      newPlayer: this.state.previousState
    })
  }

  newPlayerNameInputScreen = () => {
    this.setState({
      newPlayer: true
    })
  }

  returningPlayerNameSelection = () => {

  }

  render() {      
    return (
      <div className='Welcome'>
        <div className={ this.state.newPlayer ? 'Welcome-one slide-out' : 'Welcome-one' }>
          <h1 className='welcome-title'>CSS Flashcards</h1>
          <button className='new-player-btn' type='button' onClick={this.newPlayerNameInputScreen}>New Player</button>
          <button className='returning-player-btn' type='button' onClick={this.returningPlayerNameSelection}> Returning Player</button>
        </div>
        <div className={ this.state.newPlayer ? 'Welcome-two slide-in' : 'Welcome-two' }>
          <h1>Enter your name</h1>
          <input className='new-player-input' type='text' placeholder='Type name here' />
          <button className='new-player-input-back-btn' type='button' onClick={this.changeStateToPreviousState}><i className="fas fa-angle-left"></i></button>
        </div>
      </div>
    );    
  }
}