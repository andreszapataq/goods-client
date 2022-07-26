import FilterableItemTable from "./components/FilterableItemTable";

function App() {
  const ITEMS = [
    {category: "Documentos", quantity: 3, stocked: true, name: "AZ movimientos contables 2021"},
    {category: "Equipos", quantity: 2, stocked: true, name: "PC Smart"},
    {category: "Insumos", quantity: 1, stocked: true, name: "Rollo toallas baño"},
    {category: "Publicidad", quantity: 0, stocked: false, name: "Carpetas portafolio"}
  ]

  return (
    <div className="App">
      <FilterableItemTable items={ITEMS} />
    </div>
  );
}

export default App;
