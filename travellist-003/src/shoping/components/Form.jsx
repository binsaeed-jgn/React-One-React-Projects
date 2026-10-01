import {useState} from "react"
export default function Form({onProduct}){
  const [name, setProductName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e){
    e.preventDefault();

    const newProduct = {
      name, quantity, packed:false, id: Date.now()
  }
    onProduct(newProduct)
    setQuantity(1)
    setProductName("")
    
  }

  return (
    <form className="add-form-shoplist" onSubmit= {handleSubmit} >
        <h2>Select your products</h2>
        <div className="inputs">
          <select name="" id=""
            value = {quantity}
            onChange = {(e)=> (setQuantity(Number(e.target.value)))}
          >
            {Array.from({length:20}, (_,i)=> i+1).map(
              (num)=> (<option value={num} key={num}>{num}</option>)
            )}
          </select>
          <input type="text"
            placeholder = "Enter Product name"
            value = {name}
            onChange = {(e)=> {setProductName(e.target.value)}}
          />

          <button type="submit">ADD</button>
        </div>
      </form>
  )
  
}
