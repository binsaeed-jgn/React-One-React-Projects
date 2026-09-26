import "./Counter.css"
import {useState} from "react"
export default function Counter(){
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const date = new Date("June-02-2026")
  date.setDate(date.getDate() + count)

  
  return(
    <div className =" container">
      <div className="steps">
        <button className="btn"
            onClick={()=> setStep((step)=> step-1)}
        >-</button>
        <p>Step:{step}</p>
        <button className="btn"
          onClick={()=> setStep((step)=> step+1)}
        >+</button>
      </div>
      <div className="counter">
        <button className="btn"
            onClick={()=> setCount((count)=> count-step)}
        >-</button>
        <p>Count:{count}</p>
        <button className="btn"
            onClick={()=> setCount((count)=> count+step)}
        >+</button>
      </div>
      <p>
        <span>
        {count===0 
          ? "Today is"
          : count > 0 
          ? `${count} days from today is`
          :`${Math.abs(count)} day ago was`
        }
      </span>
      <span> {date.toDateString()}</span>

      </p>
    </div>
  )

}
