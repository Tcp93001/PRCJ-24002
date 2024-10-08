import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../Card/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import PropTypes from 'prop-types';

function Expenses({items}) {
  const [year, setYear] = useState('todos')

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear)
  }

  // Agregué una optimización que no pudimos revisar en clase, usando la opción de
  // poner en pantalla todos los años en lugar de uno por uno
  const filteredExpenses = year === 'todos'? [...items] : items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  })

  const estilo = 'text-2xl font-bold';

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.length === 0 ? (

        <h3 className={estilo}>
          No se encontraron gastos
        </h3>

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

Expenses.propTypes = {
  items: PropTypes.array
}

export default Expenses;
