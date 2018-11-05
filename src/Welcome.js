import React, { Component } from 'react';


export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      welcomePage: true,
      newPlayer: null,
      previousState: null
    };
  }

  changeStateToPreviousState = () => {
    this.setState({
      welcomePage: true
    })
  }

  newPlayerNameInputScreenState = () => {
    this.setState({
      welcomePage: false,
      newPlayer: true
    })
    console.log('1st!')
  }

  returningPlayerNameSelectionScreenState = () => {
    this.setState({
      welcomePage: false,
      newPlayer: false
    })
    console.log('2nd!')
  }

  render() {      
    return (
      <div className='Welcome'>
        <div className={ this.state.welcomePage ? 'Welcome-one' : 'Welcome-one slide-out' }>
          <h1 className='welcome-title'>CSS Flashcards</h1>
          <button className='new-player-btn' type='button' onClick={this.newPlayerNameInputScreenState}>New Player</button>
          <button className='returning-player-btn' type='button' onClick={this.returningPlayerNameSelectionScreenState}> Returning Player</button>
        </div>
        {this.state.newPlayer ? (
            <div className={ this.state.welcomePage ? 'Welcome-two' : 'Welcome-two slide-in' }>
             <h1>Enter your name</h1>
             <input className='new-player-input' type='text' placeholder='Type name here' />
             <button className='new-player-input-back-btn' type='button' onClick={this.changeStateToPreviousState}><i className="fas fa-angle-left"></i></button>
           </div>
          ) : (
            <div className={ this.state.welcomePage ? 'Welcome-two' : 'Welcome-two slide-in' }>
              <button className='returning-player-select-btn'>Player One</button>
              <button className='returning-player-select-btn'>Player Two</button>
              <button className='returning-player-select-btn'>Player Three</button>
              <button className='returning-player-select-btn'>Player Four</button>
             <button className='new-player-input-back-btn' type='button' onClick={this.changeStateToPreviousState}><i className="fas fa-angle-left"></i></button>
            </div>
          )}
      </div>
    );    
  }
}