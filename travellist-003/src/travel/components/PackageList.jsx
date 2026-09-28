const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "ID-card", quantity: 1, packed: false },
  { id: 3, description: "Clothes", quantity: 12, packed: false },
];
export default function PackageList(){
  return(
    <div className="list">
      <ul>
        {initialItems.map((item)=>(
          <Item items={item} key={item.id} />
        ))}
      </ul>
      <p>hi</p>
    </div>
  )
}

function Item({items}) {
  return (
    <li>
      <span style={items.packed ? {textDecoration: "line-through"} :{}}>
        {items.quantity}
        {items.description}
      </span>
      <button className="btn">❌</button>
    
    </li>
  )
}
