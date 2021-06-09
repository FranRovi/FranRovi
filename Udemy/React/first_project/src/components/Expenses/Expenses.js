import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from '../Chart/ExpensesChart';
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {
    const [yearSelected, setYearSelected] = useState("2021");

    const filterChangeHandler = (selectedYear) => {
        // console.log("Expenses.js");
        // console.log(selectedYear);
        setYearSelected(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === yearSelected;
    });

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter defaultYear={yearSelected} onChangeFilter ={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
                
                {/* full list display syntax */}
                {/* {props.items.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))} */}
                
                {/* conditional filterd list ternary display syntax short */}
                {/* returns the condition evaluated to false, if the other is evaluated to true */}
                {/* { filteredExpenses.length === 0 && <p>No Expenses Found</p> }
                { filteredExpenses.length > 0 && filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))
                } */}

                {/* filterd list display ternary syntax */}
                {/* { filteredExpenses.length === 0 ? <p>No Expenses Found</p> : (
                    filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)))
                } */}

                {/* filterd list display syntax */}
                {/* 
                    filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)))
                } */}
                
                {/* hard-coded list display syntax */}
                {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
                <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
            </Card>
        </div>
        );
}

export default Expenses;