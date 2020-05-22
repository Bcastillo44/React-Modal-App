/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './App.css';
import './Advice.css';
import './AdviceTwo.css';
import './AdviceThree.css';
import './AdviceFour.css';
import './AdviceFive.css';
import './AdviceSix.css';
import './AdviceSeven.css';
import './AdviceEight.css';
import './AdviceNine.css';

import Advice from './Advice.js';
import Modal from './Modal.js';


class App extends Component {

  constructor(){
    super();

    this.state = {
      show: false, 
      advice: "",  
    }

  };
  //  created show state
  // onClick handler will toggle the show state to true below in render

  showModal = (event) => {
    this.setState({ show: true});
  }

  // This state is togglable via the showModal and hideModal class properties
  
  hideModal = (event) => {
    this.setState({ show: false });
  }

  componentDidMount(){
    let url = "https://api.adviceslip.com/advice";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
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

//  Added Modal into the App component render method and 
// Passed down show and handleClose as props
// The modal’s this.props.children property is the Advice API component


render() {

  // console.log(this.state)

    return (
      <div className="container"> 
        <div className="App">

        <h1> You Have Come to the "Pool of Advice"</h1>
        <h2> Click any Cue Ball to get Advice</h2>

    
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <Advice advice={this.state.advice}/>
        </Modal>
        
        

        <button type='button' className="newAdvice" onClick= { () => {this.showModal(); this.handleNewAdvice()}}>1</button>
        
        <button type='button' className="newAdviceTwo" onClick= { () => {this.showModal(); this.handleNewAdvice()}}>2</button>

        <button type='button' className="newAdviceThree" onClick= { () => {this.showModal(); this.handleNewAdvice()}}>3</button>

        <button type='button' className="newAdviceFour" onClick= { () => {this.showModal(); this.handleNewAdvice()}}>4</button>

        <button type='button' className="newAdviceFive" onClick= { () => {this.showModal(); this.handleNewAdvice()}}>5</button>

        <button type='button' className="newAdviceSix" onClick= { () => {this.showModal(); this.handleNewAdvice()}}>6</button>

        <button type='button' className="newAdviceSeven" onClick= { () => {this.showModal(); this.handleNewAdvice()}}>7</button>

        <button type='button' className="newAdviceEight" onClick= { () => {this.showModal(); this.handleNewAdvice()}}>8</button>

        <button type='button' className="newAdviceNine" onClick= { () => {this.showModal(); this.handleNewAdvice()}}>9</button>
    

    
        </div>

      </div> 
    );
  }
  
}


export default App;
