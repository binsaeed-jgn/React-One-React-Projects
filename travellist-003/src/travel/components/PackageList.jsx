/* const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "ID-card", quantity: 1, packed: false },
  { id: 3, description: "Clothes", quantity: 12, packed: false },
]; */
export default function PackageList({items, onDeleteItem}){
  return(
    <div className="list">
      <ul>
        {items.map((item)=>(
          <Item items={item} onDeleteItem= {onDeleteItem} key={item.id} />
        ))}
      </ul>
    
    </div>
  )
}

function Item({item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration: "line-through"} :{}}>
        {item.quantity}
        {item.description}
      </span>
      <button className="btn" 
      onClick = {()=> onDeleteItem(item.id)}
      >❌</button>
    
    </li>
  )
}
