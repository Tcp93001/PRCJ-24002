import { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [...prevState, expense])
  }

  return (
    <>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
