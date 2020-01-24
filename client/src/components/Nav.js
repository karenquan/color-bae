import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Col&bull;or</Link>
      </li>
      <li>
        <Link to="/palettes">Palettes</Link>
      </li>
      <li>
        <Link to="/colors">Colors</Link>
      </li>
    </ul>
  );
};

export default Nav;
