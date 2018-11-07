import React, { Component } from 'react';

export default class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: this.props.correctAnswerIndication,
      correctAnswerKey: null
    };
  }

  checkAnswer = (key) => {
    console.log('CHECKED!')
    this.props.updateShowAnswerIndicator(false)
    if (this.props.correctAnswerIndex) {
      if (key === this.props.correctAnswerIndex) {
        console.log('MATCHES!')
        this.setState({
          showAnswer: true,
          correctAnswerKey: key
        })
      } else {
        this.props.storeWrongAnswer()
      }     
    }          
  } 


  render() {
    console.log('showAnswer:', this.state.showAnswer)
    return (
      <div className={this.props.question ? 'Flashcard-question' : 'Flashcard-answer'}>
        <section className={this.props.question ? 'question-one question-one-left' : 'question-one'}>
          {
            this.props.question ?
              <p className='question'>{this.props.question}</p>
            : null
          }
          {
            this.props.codeFormatQuestion ?
              <p className='question'><code>{this.props.codeFormatQuestion}</code></p>
            : null
          }
          {
            this.props.answers ? 
              this.props.answers.map((answer, key) => {
                if (this.state.correctAnswerKey){
                  if (key === this.state.correctAnswerKey) {
                    return <p className='possible-answer correct-answer' key={key} onClick={() => { this.checkAnswer(key)} }>{answer}</p>
                  } else {
                    return <p className='possible-answer wrong-answer' key={key} onClick={() => { this.checkAnswer(key)} }>{answer}</p>
                  }                  
                } else {
                  return <p className='possible-answer' key={key} onClick={() => { this.checkAnswer(key)} }>{answer}</p>
                }
              })
            : null
          }
          {
            this.props.codeFormatAnswers ? 
              this.props.codeFormatAnswers.map((answer, key) => {
                if (this.state.correctAnswerKey){
                  if (key === this.state.correctAnswerKey) {
                    return <p className='possible-answer correct-answer' key={key} onClick={() => { this.checkAnswer(key)} }><code>{answer}</code></p>
                  } else {
                    return <p className='possible-answer wrong-answer' key={key} onClick={() => { this.checkAnswer(key)} }><code>{answer}</code></p>
                  }                  
                } else {
                  return <p className='possible-answer' key={key} onClick={() => { this.checkAnswer(key)} }><code>{answer}</code></p>
                }
              })
            : null
          }
        </section>
        {
          this.props.question ? 
            null
          : <section className='question-two'>
              {
                this.state.showAnswer ?
                  this.props.correctAnswer ?
                    <p className='answer-display'>{this.props.correctAnswer}</p>
                  : null
                : null
              }
              {
                this.state.showAnswer ?
                  this.props.correctAnswerCodeFormat ?
                    <p className='answer-display'><code>{this.props.correctAnswerCodeFormat}</code></p>
                  : null
                : null
              }
            </section>
        }
      </div>
    );
  }
}