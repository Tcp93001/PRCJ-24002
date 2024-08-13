import Card from "../Card/Card";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense({addExpense}) {

  const saveExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString()
    }

    addExpense(newExpense);
  }


  return (
    <Card className="new-expense">
      <ExpenseForm onSaveExpense={saveExpense} />
    </Card>
  )
}

export default NewExpense;