const ItemRow = ({ item }) => {
    const name = item.stocked ? item.name :
        <span style={{color: 'red' }}>
            {item.name}
        </span>

    const quantity = item.quantity > 0 ? item.quantity :
        <span style={{ color: 'red' }}>
            {item.quantity}
        </span>

  return (
    <tr>
        <td>{name}</td>
        <td className="td-cantidad">{quantity}</td>
    </tr>
  )
}

export default ItemRow