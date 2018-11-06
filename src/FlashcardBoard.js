import React, { Component } from 'react';
import Flashcard from './Flashcard';

export default class FlashcardBoard extends Component {
  constructor() {
    super();
    this.state = {
      flashcardProblems: null
    };
  }

  componentDidMount() {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/cssFlashcardsData')
      .then(response => response.json()) 
      .then(cssFlashcardsData => {
        this.setState({
          flashcardProblems: cssFlashcardsData.cssFlashcardsData.easier[Math.floor(Math.random() * cssFlashcardsData.cssFlashcardsData.easier.length) + 1]
        })
      })
      .catch(error => console.error(error));
  }


  render() {
    return (
      <div className='FlashcardBoard'>
        <Flashcard 
          question={this.state.flashcardProblems ? this.state.flashcardProblems.question : null}
          correctAnswerIndex={this.state.flashcardProblems ? this.state.flashcardProblems.correctAnswerIndex : null}/>
        <Flashcard 
          answers={this.state.flashcardProblems ? this.state.flashcardProblems.answers : null}
          codeFormatAnswers={this.state.flashcardProblems ? this.state.flashcardProblems.codeFormatAnswers : null}
          correctAnswerIndex={this.state.flashcardProblems ? this.state.flashcardProblems.correctAnswerIndex : null}
          correctAnswer={this.state.flashcardProblems ? this.state.flashcardProblems.answers[this.state.flashcardProblems.correctAnswerIndex] : null}/>
      </div>
    );
  }
}