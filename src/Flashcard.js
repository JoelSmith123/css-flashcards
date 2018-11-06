import React, { Component } from 'react';

export default class Flashcard extends Component {
  constructor() {
    super();
    this.state = {
      phoneyState: null
    };
  }



  render() {
    console.log(this.props)
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
                return <p key={key}>{answer}</p>
              })
            : null
          }
        </section>
        <section className='question-two'>

        </section>
      </div>
    );
  }
}