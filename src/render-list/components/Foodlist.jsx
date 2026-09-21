
function FoodList(props) {
  return (
    <div className="pizza-img">
      <img
        src={props.pizzaObj.photoName}
        alt={props.pizzaObj.name}
      />

      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>${props.pizzaObj.price + 5}</span>
      </div>
    </div>
  );
}

export default FoodList;
