import "./Navbar.css"
function Navbar() {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <img className="img" src="Hfoodco.png" alt="logo" />
        

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
