import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../Card/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses({items}) {
  const [year, setYear] = useState('2024')

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear)
  }

  // Agregué una optimización que no pudimos revisar en clase, usando la opción de
  // poner en pantalla todos los años en lugar de uno por uno
  const filteredExpenses = year === 'todos'? [...items] : items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.length === 0 ? (
        <h3>No se encontraron gastos</h3>
      ) : (filteredExpenses.map((item) => {
          return (
            <ExpenseItem
              key={item.id}
              date={item.date}
              title={item.title}
              amount={item.amount}
            />
          )
        })
      )}
    </Card>
  )
}

export default Expenses;
