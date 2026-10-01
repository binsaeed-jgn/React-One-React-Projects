import ProductItems from  "./ProductItems"

export default function ProductList({products, onDelete}){

/*   const products = [
    {id:1, name:"Abaya", quantity:1, packed: false},
    {id:2, name:"Abaya", quantity:6, packed: false},
    {id:3, name:"Abaya", quantity:1, packed: true}
  ] */
  return (
    <div className="product-list">
      <ul>
      {products.map((product)=>(
        <ProductItems
          key = {product.id} 
          product = {product} 
          onDelete = {onDelete}

         />
      ))}
    </ul>

    </div>
    
  )
  
}
