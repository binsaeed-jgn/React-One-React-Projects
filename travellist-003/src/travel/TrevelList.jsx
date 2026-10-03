import Logo from "./components/Logo"
import Form from "./components/Form"
import PackageList from "./components/PackageList"
import Stats from "./components/Stats"
import {useState} from "react"
import "./TravelList.css"

export default function TravelList(){
    const [items, setItems] = useState([]);

    function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id){
    setItems((items)=> items.filter((items)=> items.id !== id));
  }
  function handleToggleItem(id){
    setItems((items)=> items.map((item)=>
      item.id === id ? {...item, packed: !item.packed} : item
    ))
  }

  function handleClearList(){
    const confirm = window.confirm("Are sure you want to delete all the list")
    if (confirm)  setItems([])
  }
  return(

    <div className="app">
      <Logo />
      <Form onAddItems= {handleAddItem}/>
      <PackageList 
        items = {items}
        onDeleteItem={handleDeleteItem}
        onToggleItem = {handleToggleItem}  
        onClearList = {handleClearList}
      />
      <Stats items = {items} />

    </div>
  )
}
