import { useState } from "react"
import SearchBar from "./SearchBar"
import ItemTable from "./ItemTable"

const FilterableItemTable = ({ items }) => {
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div>
        <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
        <ItemTable items={items} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  )
}

export default FilterableItemTable