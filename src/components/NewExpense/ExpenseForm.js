import { useState } from 'react';
import styled from 'styled-components';

const FormControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const FormActions = styled.div`
  text-align: right;
`;

const FormControl = styled.div`
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: ${(props) => (props.invalid ? '#ad0000' : '#000')};
  }

  & input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid ${(props) => (props.invalid ? '#ad0000' : '#000')};
    width: 20rem;
    max-width: 100%;
  }
`;

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid #464646;
  background-color: #464646;
  color: #e5e5e5;
  border-radius: 12px;
  margin-right: 1rem;

  &:hover,
  &:active {
    background-color: #AFAFAF;
    border-color: #AFAFAF;
    color: #000;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

function ExpenseForm({onSaveExpense}) {
  const [data, setData] = useState({
    title: '',
    amount: '',
    date: ''
  })
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!data.title.trim().length) {
      setIsTitleValid(false);
      return
    }

    if (!data.amount.trim().length) {
      setIsAmountValid(false);
      return
    }

    if (!data.date.trim().length) {
      setIsDateValid(false);
      return
    }

    onSaveExpense({
      ...data,
      // Aqui es donde tuve el problema del date object
      // Agregando el convertir a un objeto de fecha
      // el problema se detiene, al usar un solo tipo
      // de datos...
      date: new Date(data.date)
    });

    setData({
      title: '',
      amount: '',
      date: ''
    });
  }

  const titleChangeHandler = (event) => {
    setIsTitleValid(true);
    setData((prevState) => ({
      ...prevState,
      title: event.target.value
    }));
  }

  const amountChangeHandler = (event) => {
    setIsAmountValid(true);
    setData((prevState) => (
      {
        ...prevState,
        amount: event.target.value
    }));
  }

  const dateChangeHandler = (event) => {
    setIsDateValid(true);
    setData((prevState) => (
      {
        ...prevState,
        date: event.target.value
    }))
  }

  return (
    <form onSubmit={submitHandler}>
      <FormControls>
        <FormControl invalid={!isTitleValid}>
          <label>Descripción</label>
          <input value={data.title} onChange={titleChangeHandler} type="text" />
        </FormControl>
        <FormControl invalid={!isAmountValid}>
          <label>Monto</label>
          <input value={data.amount} onChange={amountChangeHandler} type="number" min="1" step="1" />
        </FormControl>
        <FormControl invalid={!isDateValid}>
          <label>Fecha</label>
          <input value={data.date} onChange={dateChangeHandler} type="date" min="2019-01-01" max="2024-12-31" />
        </FormControl>
      </FormControls>
      <FormActions>
        <Button type="submit">Agregar</Button>
      </FormActions>
    </form>
  );
}

export default ExpenseForm;