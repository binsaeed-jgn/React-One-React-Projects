/* import { useState } from 'react' */
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import "./List.css"




function List() {
  return (
    <div className ="list-container">
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




export default List;
