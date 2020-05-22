import React from 'react';

// Modal component

//Passes handleClose, show, and children down as props into the main App component. 

// showHideClassName variable which will either display the Modal or not by means of checking the value of show. If show is true, the showHideClassname of modal will display-block, otherwise, it will be modal display-none.

// Children of Modal will be passed the API Adivce component

// Close button has the onClick handler of handleClose

// Close button will set show in App component to false.

const Modal = ({ handleClose, show, children }) => {
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


export default Modal;