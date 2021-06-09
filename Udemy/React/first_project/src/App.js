import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const dummyDataExpenses = [
  {
  id:'e1',
  title:'Toilet Paper',
  amount: 94.12,
  date: new Date(2020, 7, 14),
  },
  {
  id:'e2',
  title:'New TV',
  amount: 799.49,
  date: new Date(2019, 2, 12),
  },
  {
  id:'e3',
  title:'Car Insurance',
  amount: 294.67,
  date: new Date(2020, 4, 28),
  },
  {
  id:'e4',
  title:'New Desk (Wooden)',
  amount:450,
  date: new Date(2021, 5, 7),
  },
  {
  id:'e5',
  title:'PS 5',
  amount:499,
  date: new Date(2021, 6, 9),
  }
];


const App = () => {
  const[expenses, setExpenses] = useState(dummyDataExpenses);


  const addExpenseHandler = (expense) => {
    // Updating State from a Previous State correct syntax
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
      
      // console.log("In App.js")
      // console.log(expense);
    });
    // console.log(expense);
  };
  return (
    <div>
      {/* <h2>Let's get started!</h2>
      <p>This is also visible!</p> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
