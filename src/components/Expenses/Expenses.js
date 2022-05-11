import React, {useState} from 'react'
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const yearFilter = (expenses, selectedYear) => {
        return expenses.filter(expense => expense.date.getFullYear().toString() == selectedYear)
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />             
                {yearFilter(props.expenses, filteredYear).map(expense =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )}
            </Card>
        </div>
    )


}

export default Expenses