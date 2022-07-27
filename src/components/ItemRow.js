const ItemRow = ({ item }) => {
    const name = item.stocked ? item.name :
        <span style={{color: 'red' }}>
            {item.name}
        </span>

  return (
    <tr>
        <td>{name}</td>
        <td>{item.quantity}</td>
    </tr>
  )
}

export default ItemRow