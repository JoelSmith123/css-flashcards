import React, { Component } from 'react';


export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      welcomePage: true,
      newPlayer: null,
      selectConfidence: null,
      gameReady: null
    };
  }

  changeStateToPreviousState = () => {
    if (this.state.gameReady ) {
      this.setState({        
        welcomePage: null,
        newPlayer: true,
        selectConfidence: true,
        gameReady: false
      })
    } else if (this.state.selectConfidence) {
      this.setState({
        welcomePage: null,
        newPlayer: true,
        selectConfidence: null
      })
    } else {      
      this.setState({
        welcomePage: true,
        selectConfidence: null
      })
    }
  }

  newPlayerNameInputScreenState = () => {
    this.setState({
      welcomePage: false,
      newPlayer: true
    })
  }

  returningPlayerNameSelectionScreenState = () => {
    this.setState({
      welcomePage: false,
      newPlayer: false
    })
  }

  selectConfidenceScreenState = () => {
    this.setState({
      welcomePage: false,
      selectConfidence: true,
    })
  }

  gameReadyScreenState = () => {
    this.setState({
      gameReady: true
    })
  }

  render() {      
    return (
      <div className='Welcome'>
        <div className={ this.state.welcomePage ? 'Welcome-one' : 'Welcome-one slide-out' }>
          <h1 className='welcome-title'>CSS Flashcards</h1>
          <button className='multipurpose-btn' type='button' onClick={this.newPlayerNameInputScreenState}>New Player</button>
          <button className='multipurpose-btn' type='button' onClick={this.returningPlayerNameSelectionScreenState}> Returning Player</button>
        </div>

        {this.state.newPlayer ? (
          <div className={ this.state.selectConfidence ? 'Welcome-two slide-out' : this.state.welcomePage ? 'Welcome-two' : 'Welcome-two slide-in' }>
           <h1>Enter your name</h1>
           <input className='new-player-input' type='text' placeholder='Type name here' />
           <button className='new-player-input-back-btn' type='button' onClick={this.changeStateToPreviousState}><i className="fas fa-angle-left"></i></button>
           <button className='new-player-input-forward-btn' type='button' onClick={this.selectConfidenceScreenState}><i className="fas fa-angle-right"></i></button>
          </div>
        ) : (
          <div className={ this.state.selectConfidence ? 'Welcome-two slide-out margin-remove' : this.state.welcomePage ? 'Welcome-two' : 'Welcome-two slide-in' }>
            <button className='multipurpose-btn'>Player One</button>
            <button className='multipurpose-btn'>Player Two</button>
            <button className='multipurpose-btn'>Player Three</button>
            <button className='multipurpose-btn'>Player Four</button>
           <button className='new-player-input-back-btn' type='button' onClick={this.changeStateToPreviousState}><i className="fas fa-angle-left"></i></button>
          </div>
        )}

        {this.state.selectConfidence ? (
          <div className={ this.state.gameReady ? 'Welcome-two slide-out' : this.state.selectConfidence ? 'Welcome-two slide-in' : 'Welcome-two' }>
            <h1 className='confidence-select-title'>How confident do you feel?</h1>
            <button className='multipurpose-btn' onClick={this.gameReadyScreenState}>I'm scared</button>
            <button className='multipurpose-btn' onClick={this.gameReadyScreenState}>I can handle this</button>
            <button className='new-player-input-back-btn' type='button' onClick={this.changeStateToPreviousState}><i className="fas fa-angle-left"></i></button>
          </div>
        ) : (
          <div className={'Welcome-two margin-remove'}>
            <h1>  </h1>
          </div>            
        )}

        {this.state.gameReady ? (
          <div className={this.state.gameReady ? 'Welcome-two slide-in' : 'Welcome-two'}>
            <h1 className='start-game-title'>Are you ready?</h1>
            <button className='multipurpose-btn' onClick={this.props.gameActive}>Let's go</button>
            <button className='new-player-input-back-btn' type='button' onClick={this.changeStateToPreviousState}><i className="fas fa-angle-left"></i></button>
          </div>
        ) : (
          <div className='Welcome-two margin-remove'>
            <h1>  </h1>
          </div> 
        )}
      </div>
    );    
  }
}