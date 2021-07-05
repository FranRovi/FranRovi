// We don't need useRef and useState, to validate form inputs, just one. 
//import React, { useState, useRef } from 'react';

// import { useState } from 'react';

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { 
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetFunction: resetNameInput
  } = useInput(value => value.trim() !=='');
  
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetFunction: resetEmailInput,
  } = useInput(value => value.includes('@'));

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };
  
  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    // setEnteredNameIsValid(true);
    console.log(enteredName);
    console.log(enteredEmail);
    
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // setEnteredName('');
    // setEnteredNameTouched(false);
    // resetNameInput();
    
    // setEnteredEmail('');
    // setEnteredEmailTouched(false);
    
    resetNameInput();
    resetEmailInput();

  };


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          // ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName} />
        { nameInputHasError && <p className='error-text'> Name must not be empty</p> }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        { emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled = { !formIsValid } >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
