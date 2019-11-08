import React from "react";
import "./index.css";
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active game-nav-item">Clicky Game! </li>
        <li className="nav-item active game-nav-item">{props.result} </li>
        <li className="nav-item active">
          Score: {props.score} | Top Score: {props.topScore}{" "}
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;