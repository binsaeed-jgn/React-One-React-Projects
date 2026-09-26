function Footer(){
  const hour = new Date().getHours();
  const openHour = 7;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour < closeHour;


  return (
  <footer className="footer">
    {isOpen ?  (
      <Order closeHour = {closeHour} openHour = {openHour}/>

    ): (<p>We're closed by {closeHour}</p>)}
    {new Date().toLocaleTimeString()}.
    
  </footer>
)
}

function Order({closeHour,openHour} ){
  return(
    <div className="order">
        <p>We're Open from {openHour}:00 to {closeHour}:00.Come visit us or order Online </p>
        <button className="btn">Order</button>
    </div>
  )
}
export default Footer;
