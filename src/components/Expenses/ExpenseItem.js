import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';

function ExpenseItem({date, title, amount}) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item-description">
        <h2>
          {title}
        </h2>
        <div className="expense-item-price">${amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;