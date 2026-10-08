import {useState} from "react"
import Button from "./Button"
export default function FormSplitBill({selectedFriend, onSplitBill}){
  const [billValue, setBillValue] = useState("");
  const [paidbyUser, setPaidbyUser] = useState("");
  const paidbyFriend = billValue ? billValue - paidbyUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  function handleSubmit(e){
    e.preventDefault();
    if(!billValue || !paidbyUser) return;
    console.log(billValue, paidbyUser, paidbyFriend, whoIsPaying)
    onSplitBill(whoIsPaying === "user" ? paidbyFriend : -paidbyUser)
  }

  return(
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input
       type="text"
       value={billValue}
       onChange={(e) => setBillValue(e.target.value)}
      />

      <label>Your Expense</label>
      <input 
        type="text" 
        value={paidbyUser}
        onChange={(e) => setPaidbyUser(
          Number(e.target.value) > billValue ? paidbyUser : Number(e.target.value)
        )}
      />

      <label>{selectedFriend.name}'s Expense</label>
      <input type="text" disabled value={paidbyFriend} />

      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button type="submit">Split Bill</Button>
    </form> 
    
  )
}
