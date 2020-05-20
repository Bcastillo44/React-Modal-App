/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './App.css';
import Advice from './Advice.js';

class App extends Component {

  constructor(){
    super();

    this.state = {
      advice: "data.slip.advice",
    };
  }

  componentDidMount(){
    let url = "https://api.adviceslip.com/advice";
  
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        advice: data.slip.advice,
      });
    });
  
    // console.log("componentDidMount")
  }


  render() {
    return (
      <div className="App">

      <h1>Random Advice from the Interweb</h1>

      <h2>
       <Advice advice={this.state.advice}/>
       <Advice advice={this.state.advice}/>
       <Advice advice={this.state.advice}/>
       </h2>


      </div>
    );
  }
}

export default App;
