import React, { Component } from 'react';

export default class Flashcard extends Component {
  constructor() {
    super();
    this.state = {
      showAnswer: false,
      correctAnswerKey: null
    };
  }

  checkAnswer = (key) => {
    if (this.props.correctAnswerIndex) {
      if (key === this.props.correctAnswerIndex) {
        this.setState({
          showAnswer: true,
          correctAnswerKey: key
        })
      }      
    }
  } 


  render() {
    return (
      <div className='Flashcard'>
        <section className='question-one'>
          <p>
            {
              this.props.question ?
                this.props.question
              : null
            }
          </p>
          {
            this.props.answers ? 
              this.props.answers.map((answer, key) => {
                if (this.state.correctAnswerKey){
                  if (key === this.state.correctAnswerKey) {
                    return <p className='possible-answer correct-answer' key={key}>{answer}</p>
                  } else {
                    return <p className='possible-answer wrong-answer' key={key} onClick={() => { this.checkAnswer(key)} }>{answer}</p>
                  }                  
                } else {
                  return <p className='possible-answer' key={key} onClick={() => { this.checkAnswer(key)} }>{answer}</p>
                }
              })
            : null
          }
        </section>
        <section className='question-two'>
          <p>
            {
              this.state.showAnswer ?
                this.props.correctAnswer ?
                  this.props.correctAnswer
                : null
              : null
            }
          </p>
        </section>
      </div>
    );
  }
}