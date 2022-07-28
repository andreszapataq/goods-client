const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <form>
        <input type="text" className="searchbar" value={filterText} placeholder="Buscar..." onChange={(e) => onFilterTextChange(e.target.value)} />
        <label>
            <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
            {' '}
            Mostrar solo items con stock
        </label>
    </form>
  )
}

export default SearchBar