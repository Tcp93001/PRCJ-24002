import { useState } from 'react';
import "./ExpenseForm.css";

function ExpenseForm({onSaveExpense}) {
  const [data, setData] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const submitHandler = (event) => {
    event.preventDefault();

    onSaveExpense({
      ...data,
      // Aqui es donde tuve el problema del date object
      // Agregando el coenevertir a un objeto de fecha
      // el problema se detiene, al usar un solo tipo
      // de datos...
      date: new Date(data.date)
    });

    setData({
      title: '',
      amount: '',
      date: ''
    })
  }

  const titleChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      title: event.target.value
    }))
  }

  const amountChangeHandler = (event) => {
    setData((prevState) => (
      {
        ...prevState,
        amount: event.target.value
    }))
  }

  const dateChangeHandler = (event) => {
    setData((prevState) => (
      {
        ...prevState,
        date: event.target.value
    }))
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Descripción</label>
          <input value={data.title} onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense-control">
          <label>Monto</label>
          <input value={data.amount} onChange={amountChangeHandler} type="number" min="1" step="1" />
        </div>
        <div className="new-expense-control">
          <label>Fecha</label>
          <input value={data.date} onChange={dateChangeHandler} type="date" min="2019-01-01" max="2024-12-31" />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}

export default ExpenseForm;