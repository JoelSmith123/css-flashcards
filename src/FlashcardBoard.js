import React, { Component } from 'react';

export default class FlashcardBoard extends Component {
  constructor() {
    super();
    this.state = {
      phoneyState: null
    };
  }



  render() {
    return (
      <div className='FlashcardBoard'>
        <Flashcard />
        <Flashcard />
      </div>
    );
  }
}