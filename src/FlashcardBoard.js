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
          question={this.state.flashcardProblems ? this.state.flashcardProblems.question ? this.state.flashcardProblems.question : null : null}
          codeFormatQuestion={this.state.flashcardProblems ? this.state.flashcardProblems.codeFormatQuestion ? this.state.flashcardProblems.codeFormatQuestion : null : null}
          correctAnswerIndex={this.state.flashcardProblems ? this.state.flashcardProblems.correctAnswerIndex : null}/>
        <Flashcard 
          answers={this.state.flashcardProblems ? this.state.flashcardProblems.answers ? this.state.flashcardProblems.answers: null : null}
          codeFormatAnswers={this.state.flashcardProblems ? this.state.flashcardProblems.codeFormatAnswers ? this.state.flashcardProblems.codeFormatAnswers: null : null}
          correctAnswerIndex={this.state.flashcardProblems ? this.state.flashcardProblems.correctAnswerIndex : null}
          correctAnswerCodeFormat={this.state.flashcardProblems ? this.state.flashcardProblems.codeFormatAnswers ? this.state.flashcardProblems.codeFormatAnswers[this.state.flashcardProblems.correctAnswerIndex] : null : null}
          correctAnswer={this.state.flashcardProblems ? this.state.flashcardProblems.answers ? this.state.flashcardProblems.answers[this.state.flashcardProblems.correctAnswerIndex] : null : null}/>
      </div>
    );
  }
}