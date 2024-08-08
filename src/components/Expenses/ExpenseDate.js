import './ExpenseDate.css';

function ExpenseDate({date}) {
  const month = date.toLocaleString('es-MX', {month: 'long'});
  const day = date.toLocaleString('es-MX', {day: '2-digit'});
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expense-date-day">{day}</div>
    </div>
  )
}

export default ExpenseDate