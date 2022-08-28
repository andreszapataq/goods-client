import ItemCategoryRow from "./ItemCategoryRow"
import ItemRow from "./ItemRow"

const ItemTable = ({ items, filterText, inStockOnly }) => {
    const rows = []
    const category = []

    items.forEach((item) => {
        if(item.name.toLowerCase().indexOf(
            filterText.toLowerCase()
        ) === -1 ) {
            return
        }
        if(inStockOnly && !item.stocked) {
            return
        }
        if(category.indexOf(item.category) === -1) {
            category.push(
                // item.category
                <ItemCategoryRow
                    key={item._id}
                    category={item.category}
                />
            )
            console.log(item.category)
        }
        rows.push(
            <ItemRow
                key={item.name}
                item={item}
            />
        )
        // category = item.category
        console.log(rows)
        console.log(category)
    })

  return (
    <table>
        <thead>
            <tr>
                <th className="th-descripcion">Descripción</th>
                <th className="th-cantidad">Cantidad</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
  )
}

export default ItemTable