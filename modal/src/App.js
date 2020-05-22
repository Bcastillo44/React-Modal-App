/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './App.css';
import './Advice.css';
import './AdviceTwo.css';
import Advice from './Advice.js';
import AdviceTwo from './AdviceTwo.js';
import AdviceThree from './AdviceThree.js';

class App extends Component {

  constructor(){
    super();

    this.state = {
      show: false, 
      // advice: "",  
      // adviceTwo: "data.slip.advice",
      // adviceThree: "data.slip.advice"
    }

  };
  
  
  showModal = () => {
    this.setState({ show: true});
  }
  
  hideModal = () => {
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


 
render() {

  console.log(this.state)

    return (
      <div className="container"> 
        <div className="App">

        <h1> You Have Come to the "Pool of Advice"</h1>

    
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <Advice advice={this.state.advice}/>
        </Modal>
        

        <button type='button' className="newAdvice" onClick={this.showModal}>8</button>
        <button type='button' className="newAdviceTwo" onClick={this.showModal}>9</button>

       {/* <button type="submit" className="newAdvice" onClick={this.handleNewAdvice}>8</button> */}
    
        </div>
      </div> 
    );
  }
  
}

  const Modal = ({ handleClose, show, children, }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
  


export default App;
