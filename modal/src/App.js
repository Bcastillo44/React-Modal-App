/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './App.css';
import './Advice.css';
import Advice from './Advice.js';
import AdviceTwo from './AdviceTwo.js';
import AdviceThree from './AdviceThree.js';

class App extends Component {

  constructor(){
    super();

    this.state = {
      advice: "data.slip.advice",
      // adviceTwo: "data.slip.advice",
      // adviceThree: "data.slip.advice",
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

  handleNewAdvice = (event) => {
    let url = "https://api.adviceslip.com/advice";
  
    fetch(url)
    .then(res => res.json())
    .then(data => {
   
    this.setState({
      advice: data.slip.advice,
    });
    });

  }


  render() {
    return (
      <div className="App">

      <h1>Random Advice from the Interweb</h1>

      <h2>
       <Advice advice={this.state.advice}/>
       {/* <AdviceTwo advice={this.state.advice}/>
       <AdviceThree advice={this.state.advice}/> */}
       </h2>

       <button type="submit" className="newAdvice" onClick={this.handleNewAdvice}>I Need New Advice</button>
       <button type="submit" className="newAdvice" onClick={this.handleNewAdvice}>I Need New Advice</button>
       <button type="submit" className="newAdvice" onClick={this.handleNewAdvice}>I Need New Advice</button>
       <button type="submit" className="newAdvice" onClick={this.handleNewAdvice}>I Need New Advice</button>
       <button type="submit" className="newAdvice" onClick={this.handleNewAdvice}>I Need New Advice</button>
       <button type="submit" className="newAdvice" onClick={this.handleNewAdvice}>I Need New Advice</button>
       
      </div>
    );
  }
}

export default App;
