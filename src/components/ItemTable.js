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
        if(!category.includes(item.category)) {
            category.push(
                <ItemCategoryRow
                    key={item._id}
                    category={item.category}
                />
            )
        }
        rows.push(
            <ItemRow
                key={item._id}
                item={item}
            />
        )
        console.log(item)
        console.log(category)
        console.log(rows)
    })

  return (
    <table>
        <thead>
            <tr>
                <th className="th-descripcion">Descripción</th>
                <th className="th-cantidad">Cantidad</th>
            </tr>
        </thead>
        <tbody>{category}</tbody>
        <tbody>{rows}</tbody>
    </table>
  )
}

export default ItemTable