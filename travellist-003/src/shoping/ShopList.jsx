import {useState} from "react"
import Logo  from "./components/Logo"
import Form  from "./components/Form"
import ProductList  from "./components/ProductList"
import Stats from "./components/Stats"
import "./ShopList.css"



export default function ShopList() {
  const [products, setProduct] = useState([])

  function addNewProduct(product){
    setProduct((products) => [...products, product])
  }
  function handleDelete(id) {
    setProduct((products)=> products.filter((products)=> products.id !== id))

  }
  return(
    <div className="shoplist">
      <Logo/>
      <Form  onProduct= {addNewProduct}/>
      <ProductList products = {products } onDelete={handleDelete}/>
      <Stats/>
    </div>
  )
  
}
