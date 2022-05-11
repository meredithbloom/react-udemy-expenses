import React from 'react'
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Equinox', amount: 185, date: new Date(2022, 5, 23) },
    { id: 'e2', title: 'Boxing', amount: 99.99, date: new Date(2022, 5, 10) },
    { id: 'e3', title: 'Plane Ticket', amount: 300, date: new Date(2022, 6, 10) },
    { id: 'e4', title: 'Medicine', amount: 100, date: new Date(2022, 5, 6) }
  ]

  const addExpenseHandler = (expense) => {
    console.log('in app.js')
    console.log(expense)
  }



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App;
