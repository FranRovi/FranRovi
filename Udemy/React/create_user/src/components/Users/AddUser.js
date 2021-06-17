import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';


const AddUser = (props) => {
    const  nameInputRef = useRef();
    const  ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');

    const [hasError, setHasError] = useState();

    const addUserHandler = (event) => {
        // console.log("addUserHandler function called")
        event.preventDefault();
        const refEnteredName = nameInputRef.current.value;
        const refEnteredAge = ageInputRef.current.value;

        if (refEnteredName.trim().length === 0 || refEnteredAge.trim().length === 0) {
            setHasError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)"
            });
            return;
        }
        if (+refEnteredAge < 1) {
            setHasError({
                title: "Invalid age",
                message: "Please enter a valid age (age must be greater than zero)"
            });
            return;
        }
        props.onAddUser(refEnteredName, refEnteredAge);
        // setEnteredUsername("");
        // setEnteredAge("");
        // ONE SHOULD RARELY CHANGE THE DOM DIRECTLY, SHOULD USE REACT TO DO SO
        // BUT IN THIS CASE SINCE WE ARE ONLY CLEANING AN INPUT FIELD, ONE MAY ARGUE
        // THAT WE ARE NOT CHANGING THE DOM (CREATING OR DELETING AN ELEMENT OR 
        // ADDING OR REMOVING A CLASS)
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';



        // if (enteredUsername.trim().length === 0) {
        //     // console.log("Must provide a name for user");
        //     // alert("User name must provided");
        //     return;
        // } else {
        //     console.log(enteredUsername);
        //     setEnteredUsername("");
        // }
        // if (enteredAge.trim().length === 0 || +enteredAge < 1) {
        //     // console.log("User age must be provide, and be greater than 0");
        //     // alert("User age must be provided, and be greater than 0");
        //     return;
        // } else {
        //     console.log(enteredAge);
        //     setEnteredAge("");
        // }
        // console.log(enteredUsername, enteredAge);
        // setEnteredUsername("");
        // setEnteredAge("");
    }

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value)
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value)
    // }

    const errorHandler = () => {
        setHasError(null);
    }

    return(
        <Wrapper>
            {hasError && <ErrorModal title={hasError.title} message={hasError.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    {/* <input id ="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} ref={nameInputRef} /> */}
                    <input id ="username" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    {/* <input id ="age" type="number" value={enteredAge} onChange={ageChangeHandler} ref={ageInputRef} /> */}
                    <input id ="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;