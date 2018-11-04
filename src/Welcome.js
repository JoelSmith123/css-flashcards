import React, { Component } from 'react';


export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className='Welcome'>
        <h1 className='welcome-title'>CSS Flashcards</h1>
        <button className='new-player-btn' type='button'>New Player</button>
        <button className='returning-player-btn' type='button'> Returning Player</button>
      </div>
    );
  }
}