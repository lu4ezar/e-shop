import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.scss";
import CartWidget from "../CartWidget";

const Header = () => (
  <header className="Header">
    <nav className="container">
      <h1>
        <Link to="/">E-Shop</Link>
      </h1>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  </header>
);

export default Header;
