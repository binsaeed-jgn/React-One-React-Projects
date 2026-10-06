

export default function Display({bill, tip}){
  return(
    <div className="display">
      <h3>Your bill is : {bill}</h3>
      <h3>Your tip is : {tip}</h3>
      <h3>You are to pay total of : {/*  ${bill} + ${tip} = */} ${bill + tip} </h3>
    </div>
  )
}
