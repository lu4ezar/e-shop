import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.scss";

const Header = () => (
  <header>
    <nav>
      <h1>
        <Link to="/">E-Shop</Link>
      </h1>
      <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;
