import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: [],
      question: ""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    // write your code here!
    // random number generator associated with an answer
    const randomNum = Math.floor(Math.random() * 6)
    // potential answers
    answerArray.push("Absolutely.") // 0
    answerArray.push("Perhaps...") // 1
    answerArray.push("The future is unclear.") // 2
    answerArray.push("Maybe some day.") // 3
    answerArray.push("I don't see why not!") // 4
    answerArray.push("Please ask again. Question is unclear.") // 5
    // Update the return statement below to reflect the outcome of your code.
    return this.state.answerArray[randomNum]
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer()
    this.setState({ answer: answer })
  }

  render(){
    return (
      <div>
        <h1>Magic 8 Ball</h1>
        <input
          id="inputBox"
          type='text'
          onChange={ this.handleChange }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          Ask the Magic 8 Ball a Question
        </button>
        <p> { this.state.answer } </p>
      </div>
    )
  }
}

export default App;
