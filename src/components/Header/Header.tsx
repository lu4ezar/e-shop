import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.scss";
import CartWidget from "../CartWidget";

const Header = () => (
  <header className="Header">
    <nav className="container">
      <Link to="/">
        <h1>E-Shop</h1>
      </Link>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  </header>
);

export default Header;
