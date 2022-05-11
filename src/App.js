import React, {useState} from 'react'
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';


const DUMMY_EXPENSES = [
    { id: 'e1', title: 'Equinox', amount: 185, date: new Date(2022, 3, 23) },
    { id: 'e2', title: 'Boxing', amount: 99.99, date: new Date(2020, 5, 10) },
    { id: 'e3', title: 'Plane Ticket', amount: 300, date: new Date(2020, 6, 10) },
    { id: 'e4', title: 'Medicine', amount: 100, date: new Date(2021, 10, 6) }
  ]


const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)


  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App;
