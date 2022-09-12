import ItemCategoryRow from "./ItemCategoryRow"
import ItemRow from "./ItemRow"

const ItemTable = ({ items, filterText, inStockOnly }) => {
    const rows = []
    const categories = []
    const categoryRows = []

    items.forEach((item) => {
        if(item.name.toLowerCase().indexOf(
            filterText.toLowerCase()
        ) === -1 ) {
            return
        }
        if(inStockOnly && !item.stocked) {
            return
        }
        if(categories.indexOf(item.category) === -1) {
            categories.push(
                item.category
                // <ItemCategoryRow
                //     key={item._id}
                //     category={item.category}
                // />
            )
            categoryRows.push(
                <ItemCategoryRow
                    key={item._id}
                    category={categories.map((i) => console.log(i))}
                />
            )
        }
        rows.push(
            <ItemRow
                key={item._id}
                item={item}
            />
        )
        console.log(rows)
        console.log(categories)
        // console.log(item)
    })

  return (
    <table>
        <thead>
            <tr>
                <th className="th-descripcion">Descripción</th>
                <th className="th-cantidad">Cantidad</th>
            </tr>
        </thead>
        <tbody>{categoryRows}</tbody>
        <tbody>{rows}</tbody>
    </table>
  )
}

export default ItemTable