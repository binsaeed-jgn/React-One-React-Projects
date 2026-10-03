import {useState} from "react"
/* const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "ID-card", quantity: 1, packed: false },
  { id: 3, description: "Clothes", quantity: 12, packed: false },
]; */
export default function PackageList({items, onDeleteItem, onToggleItem,onClearList}){
  const [sortBy, setSortBy] = useState("input")
  let sortedItems;
  if(sortBy === "input" ) sortedItems = items;

  if (sortBy === "description") 
    sortedItems = items
    .slice()
    .sort((a,b)=> a.description.localeCompare(b.description));
    
  if (sortBy === "packed") 
    sortedItems = items
    .slice()
    .sort((a,b)=> Number(a.packed - b.packed));

  return(
    <div className="list">
      <ul>
        {sortedItems.map((item)=>(
          <Item 
            key={item.id}
            item={item} 
            onDeleteItem= {onDeleteItem} 
            onToggleItem = {onToggleItem}
            />
        ))}
      </ul>

      <select 
        value = {sortBy}
        onChange = {(e)=> setSortBy(e.target.value) }
      >
        <option value="input">Sort by input</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed</option>
      </select>
      <button onClick= {onClearList}>Clear List</button>
    
    </div>
  )
}

function Item({item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox"
        //value={item.packed}
        onChange = {()=> onToggleItem(item.id)}
      />
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
