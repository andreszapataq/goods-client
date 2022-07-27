import ItemCategoryRow from "./ItemCategoryRow"
import ItemRow from "./ItemRow"

const ItemTable = ({ items, filterText, inStockOnly }) => {
    const rows = []
    let lastCategory = null

    items.forEach((item) => {
        if(item.name.toLowerCase().indexOf(
            filterText.toLowerCase()
        ) === -1 ) {
            return
        }
        if(inStockOnly && !item.stocked) {
            return
        }
        if(item.category !==lastCategory) {
            rows.push(
                <ItemCategoryRow
                    key={item.category}
                    category={item.category}
                />
            )
        }
        rows.push(
            <ItemRow
                key={item.name}
                item={item}
            />
        )
        lastCategory = item.category
    })

  return (
    <table>
        <thead>
            <tr>
                <th>Descripción</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
  )
}

export default ItemTable