
export default function Bill({bill, onSetBill}){

  
  return(
    <div className="service-1">
      <p>What is your bill?</p>
      <input 
        type="text" 
        placeholder="Enter your bill"
        value={bill}  
        onChange={(e)=> onSetBill(Number(e.target.value)) }
      />
    </div>
  )
};
