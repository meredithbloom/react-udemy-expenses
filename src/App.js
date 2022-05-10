import ExpenseItem from './components/ExpenseItem'


function App() {
  const expenses = [
    { id: 'e1', title: 'Equinox', amount: 185, date: new Date(2022, 5, 23) },
    { id: 'e2', title: 'Boxing', amount: 99.99, date: new Date(2022, 5, 10) },
    { id: 'e3', title: 'Plane Ticket', amount: 300, date: new Date(2022, 6, 10) },
    { id: 'e4', title: 'Medicine', amount: 100, date: new Date(2022, 5, 6) }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date }/>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date }/>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date }/>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date }/>
    </div>
  )
}

export default App;
