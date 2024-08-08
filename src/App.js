import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: Math.random(),
      date: new Date(2022, 4, 23),
      title: "Libros",
      amount: 250,
    },
    {
      id: Math.random(),
      date: new Date(2022, 2, 20),
      title: "Café",
      amount: 50,
    },
    {
      id: Math.random(),
      date: new Date(2022, 3, 18),
      title: "Comida",
      amount: 600,
    },
    {
      id: Math.random(),
      date: new Date(2022, 3, 18),
      title: "Cena",
      amount: 600,
    },
    {
      id: Math.random(),
      date: new Date(2022, 3, 18),
      title: "Desayno",
      amount: 600,
    },
    {
      id: Math.random(),
      date: new Date(2022, 3, 18),
      title: "Brunch",
      amount: 600,
    },
    {
      id: Math.random(),
      date: new Date(2022, 3, 18),
      title: "Tarjeta",
      amount: 300,
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
