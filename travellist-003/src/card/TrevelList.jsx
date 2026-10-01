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

  return(

    <div className="app">
      <Logo />
      <Form onAddItems= {handleAddItem}/>
      <PackageList items = {items} onDeleteItem={handleDeleteItem}/>
      <Stats/>

    </div>
  )
}
