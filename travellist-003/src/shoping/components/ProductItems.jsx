export default function ProductItems({product, onDelete}){
  return(
      <li>
        <p>
          <span style={product.packed ? {textDecoration: "line-through"}: {}} >
            {product.quantity} {product.name}
          </span>
        
          <button className="delete-btn"
            onClick = {()=> onDelete(product.id)}
          >X</button>
        
        </p>

      
        
      </li>


    
  )
  
}
