import { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [...prevState, expense])
  }

  return (
    <div style={{padding: '10px'}}>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
