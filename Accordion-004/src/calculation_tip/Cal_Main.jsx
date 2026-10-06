import Percentage_1 from "./components/Service_1"
import Percentage_2 from "./components/Service_2"
import Bill from "./components/Bill"
import Display from "./components/Display"
import Reset from "./components/Reset"
import "./Style.css"
import {useState} from "react"
export default function Cal_Main(){
    const [bill, setBill] = useState("");
    const [percent_1, setPercent_1] = useState("");
    const [percent_2, setPercent_2] = useState("")
    const tip = bill *(((percent_1 + percent_2)/2)/100)

    function handleReset(){
      setPercent_1("");
      setPercent_2("");
      setBill("");
    }
  return(
    <div className="container">
      <Bill bill = {bill} onSetBill={setBill}/>
      <Percentage_1 
        percent = {percent_1}
        onPercent = {setPercent_1}
      >How did you enjoy it?</Percentage_1>

      <Percentage_2
        percent = {percent_2}
        onPercent = {setPercent_2}
      >How did your friend enjoy it?</Percentage_2>
      
      {bill && (
        <>
          <Display bill= {bill} tip = {tip}/>
          <Reset onReset={handleReset}/>  
        </>
      )}
    </div>
  )
}







