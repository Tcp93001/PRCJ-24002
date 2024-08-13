import "./ExpensesFilter.css";

function ExpensesFilter({onChangeFilter, year}) {

  // Faltó en clase agregar el onChange event para controlar el select
  // donde filtramos por año
  const changeHandler = (event) => {
    onChangeFilter(event.target.value);
  }
  //

  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filtrar por año</label>
        <select selected={year} onChange={changeHandler}>
          <option value="todos">Todos</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;