

function Tuwo(props) {
  return(
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>${props.price + 5}</span>
      </div>
    </div>
  )
}

export default  Tuwo;
