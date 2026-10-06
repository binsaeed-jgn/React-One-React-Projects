
export default function Percentage_2({children, percent, onPercent}){

  return(
    <div className="service-2">
      <lebel>{children}</lebel>
      <select 
        value ={percent}
        onChange = {(e)=> onPercent(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%) </option>
        <option value="5">Not bad (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It amazing!(20%)</option>
      </select>
    </div>
  )
}
