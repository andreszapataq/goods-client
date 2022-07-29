const ItemCategoryRow = ({ category }) => {
  return (
    <tr>
        <th className="th-categoria" colSpan='2'>
            {category}
        </th>
    </tr>
  )
}

export default ItemCategoryRow