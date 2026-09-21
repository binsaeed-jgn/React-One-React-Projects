/* import { useState } from 'react' */
import Navbar from "./components/Navbar";
import Tuwo from "./components/Tuwo";
import "../index.css"


function FoodCo() {
  return (
    <div className ="container">
      <Navbar />
      <Header/>
      <Menu/>
      <Footer />
    </div>
  );
}

function Header() {

  return(
    <header  className="header">
      <h1 >Welcome to</h1>
      <h2 className="h2">Hausawa Food CO.</h2>
    </header>
  
  )
}

function Menu(){
  return(
    <main className="menu">
      <h2>Our Menu</h2>
      <Tuwo
        name = "Tuwon Shinkafa"
        photoName = "tuwo/shinkafaT.png"
        ingredients = "Tomatoe, Shinkafa, spinach and spices"
        price = {12}
      />
      <Tuwo 
        name = "Tuwon Masara "
        photoName = "tuwo/masaraT.png"
        ingredients = "Tomatoe, Spices, Funghi and Masara"
        price = {12}
      />
      <Tuwo
        name = "Tuwon Dawa "
        photoName = "tuwo/dawaT.png"
        ingredients = "Tomatoe, Spices, Funghi and Dawa"
        price = {12}
      />
      <Tuwo
        name = "Tuwon Alkama"
        photoName = "tuwo/alkamaT.png"
        ingredients = "Tomatoe, Spices, Funghi and Alkama"
        price = {12}
      />
    </main>
  )
}
function Footer(){
  /* const hour = new Date().getHours();
  const openHour = 7;
  const closeHour = 16; */

/*   if(hour >= openHour && hour <= closeHour ){
    alert("We're Opened");
  }else{alert("Sorry! We're closed")}
 */
  return (
  <footer className="footer">
    {new Date().toLocaleTimeString()}.We are Open
  </footer>
)
}

export default FoodCo;
