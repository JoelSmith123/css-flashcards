import React, { Component } from 'react';
import Flashcard from './Flashcard';

export default class FlashcardBoard extends Component {
  constructor() {
    super();
    this.state = {
      flashcardProblems: null,
      showAnswerIndicator: false
    };
  }

  componentDidMount() {
    this.newAPICall();
  }

  newAPICall = () => {
    fetch('http://memoize-datasets.herokuapp.com/api/v1/cssFlashcardsData')
      .then(response => response.json()) 
      .then(cssFlashcardsData => {
        this.setState({
          flashcardProblems: cssFlashcardsData.cssFlashcardsData.easier[Math.floor(Math.random() * cssFlashcardsData.cssFlashcardsData.easier.length) + 1]
        })
      })
      .catch(error => console.error(error));    
  }

  updateShowAnswerIndicator = (boolean) => {
    this.setState({
      showAnswerIndicator: boolean
    })
  }

  newFlashcardProblem = (e) => {
    e.preventDefault();
    this.newAPICall();
    this.setState({
      showAnswerIndicator: false
    })
  }

  render() {
    return (
      <div className='FlashcardBoard'>
        <Flashcard 
          question={this.state.flashcardProblems ? this.state.flashcardProblems.question ? this.state.flashcardProblems.question : null : null}
          codeFormatQuestion={this.state.flashcardProblems ? this.state.flashcardProblems.codeFormatQuestion ? this.state.flashcardProblems.codeFormatQuestion : null : null}
          correctAnswerIndex={this.state.flashcardProblems ? this.state.flashcardProblems.correctAnswerIndex : null}
          correctAnswerIndication={this.state.showAnswerIndicator}
          updateShowAnswerIndicator={this.updateShowAnswerIndicator}/>

        <Flashcard 
          answers={this.state.flashcardProblems ? this.state.flashcardProblems.answers ? this.state.flashcardProblems.answers: null : null}
          codeFormatAnswers={this.state.flashcardProblems ? this.state.flashcardProblems.codeFormatAnswers ? this.state.flashcardProblems.codeFormatAnswers: null : null}
          correctAnswerIndex={this.state.flashcardProblems ? this.state.flashcardProblems.correctAnswerIndex : null}
          correctAnswerCodeFormat={this.state.flashcardProblems ? this.state.flashcardProblems.codeFormatAnswers ? this.state.flashcardProblems.codeFormatAnswers[this.state.flashcardProblems.correctAnswerIndex] : null : null}
          correctAnswer={this.state.flashcardProblems ? this.state.flashcardProblems.answers ? this.state.flashcardProblems.answers[this.state.flashcardProblems.correctAnswerIndex] : null : null}
          correctAnswerIndication={this.state.showAnswerIndicator}
          updateShowAnswerIndicator={this.updateShowAnswerIndicator}/>

          <footer className='flashcard-board-footer'>
            <button className='flashcard-board-footer-btn'></button>
            <button className='flashcard-board-footer-btn'></button>
            <button className='flashcard-board-footer-btn'></button>
            <button className='flashcard-board-footer-btn' onClick={(e) => this.newFlashcardProblem(e)}><i className="fas fa-angle-right"></i></button>
          </footer>
      </div>
    );
  }
}