import { useState, useEffect } from "react";
import FilterableItemTable from "./components/FilterableItemTable";

function App() {
  const [inventario, setInventario] = useState([])

  useEffect(() => {
    const getInventario = async () => {
      await fetchInventario()
    }

    getInventario()
  })

  const fetchInventario = async () => {
    const res = await fetch('http://localhost:5008/api/v1/inventario')

    const data = await res.json()

    setInventario(data.data)
  }

  return (
    <div className="App">
      <FilterableItemTable items={inventario} />
    </div>
  );
}

export default App;
