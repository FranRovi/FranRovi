import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');  

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0) {
            // console.log("Must provide a name for user");
            // alert("User name must provided");
            return;
        } else {
            console.log(enteredUsername);
            setEnteredUsername("");
        }
        if (enteredAge.trim().length === 0 || +enteredAge < 1) {
            // console.log("User age must be provide, and be greater than 0");
            // alert("User age must be provided, and be greater than 0");
            return;
        } else {
            console.log(enteredAge);
            setEnteredAge("");
        }
        // console.log(enteredUsername, enteredAge);
        // setEnteredUsername("");
        // setEnteredAge("");
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id ="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id ="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;