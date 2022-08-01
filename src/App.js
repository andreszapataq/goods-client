import { ITEMS } from "./data/data";
import FilterableItemTable from "./components/FilterableItemTable";

function App() {
  return (
    <div className="App">
      <FilterableItemTable items={ITEMS} />
    </div>
  );
}

export default App;
