import React from "react";
import "../css/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-home-link" to={"/"}>
        <h1 className="navbar-title">Pokedex</h1>
        {/* <img className="pokemon-logo" alt="pokemon-logo" /> */}
      </Link>
    </div>
  );
};

export default Navbar;
