import React, { Component } from 'react';
import Flashcard from './Flashcard';

export default class FlashcardBoard extends Component {
  constructor() {
    super();
    this.state = {
      returningPlayerFlashcardsArray: null,
      flashcardProblems: null,
      showAnswerIndicator: false
    };
  }

  componentDidMount() {
    if (!localStorage[this.props.playerName]) {
      this.newAPICall();      
    } else {
      let storedPlayerFlashcards = JSON.parse(localStorage[this.props.playerName]);
      this.setState({
        flashcardProblems: storedPlayerFlashcards[Math.floor(Math.random() * storedPlayerFlashcards.length) + 1]
      })
      console.log(this.state.flashcardProblems)
    }
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
    this.updateShowAnswerIndicator(false)
    if (!localStorage[this.props.playerName] || !this.props.returningPlayer) {
      this.newAPICall();      
    } else {
      let storedPlayerFlashcards = JSON.parse(localStorage[this.props.playerName]);
      this.setState({
        flashcardProblems: storedPlayerFlashcards[Math.floor(Math.random() * storedPlayerFlashcards.length) + 1]
      })
      console.log(this.state.flashcardProblems)
    }
  }

  storeWrongAnswer = () => {
    if (!localStorage[this.props.playerName]) {
      localStorage.setItem([this.props.playerName], JSON.stringify([]))
      let playerStoredArray = JSON.parse(localStorage.getItem([this.props.playerName]))
      playerStoredArray.push(this.state.flashcardProblems)
      localStorage.setItem([this.props.playerName], JSON.stringify(playerStoredArray))
    } else {
      let playerStoredArray = JSON.parse(localStorage.getItem([this.props.playerName]))
      playerStoredArray.push(this.state.flashcardProblems)
      localStorage.setItem([this.props.playerName], JSON.stringify(playerStoredArray))      
    }
  }

  render() {
    console.log(this.state.flashcardProblems)
    return (
      <div className='FlashcardBoard'>
        <Flashcard 
          question={this.state.flashcardProblems ? this.state.flashcardProblems.question ? this.state.flashcardProblems.question : null : null}
          codeFormatQuestion={this.state.flashcardProblems ? this.state.flashcardProblems.codeFormatQuestion ? this.state.flashcardProblems.codeFormatQuestion : null : null}
          correctAnswerIndex={this.state.flashcardProblems ? this.state.flashcardProblems.correctAnswerIndex : null}
          correctAnswerIndication={this.state.showAnswerIndicator}
          updateShowAnswerIndicator={this.updateShowAnswerIndicator}
          storeWrongAnswer={this.storeWrongAnswer}/>

        <Flashcard 
          answers={this.state.flashcardProblems ? this.state.flashcardProblems.answers ? this.state.flashcardProblems.answers: null : null}
          codeFormatAnswers={this.state.flashcardProblems ? this.state.flashcardProblems.codeFormatAnswers ? this.state.flashcardProblems.codeFormatAnswers: null : null}
          correctAnswerIndex={this.state.flashcardProblems ? this.state.flashcardProblems.correctAnswerIndex : null}
          correctAnswerCodeFormat={this.state.flashcardProblems ? this.state.flashcardProblems.codeFormatAnswers ? this.state.flashcardProblems.codeFormatAnswers[this.state.flashcardProblems.correctAnswerIndex] : null : null}
          correctAnswer={this.state.flashcardProblems ? this.state.flashcardProblems.answers ? this.state.flashcardProblems.answers[this.state.flashcardProblems.correctAnswerIndex] : null : null}
          correctAnswerIndication={this.state.showAnswerIndicator}
          updateShowAnswerIndicator={this.updateShowAnswerIndicator}
          storeWrongAnswer={this.storeWrongAnswer}/>

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