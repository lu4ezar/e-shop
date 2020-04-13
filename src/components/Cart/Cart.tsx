import React from "react";
import { Link } from "react-router-dom";
import HeadingText from "../shared/HeadingText";

const Cart = () => (
  <div>
    <HeadingText pxSize={32}>Cart</HeadingText>
    <div>There are 500 products in your cart.</div>
    <Link to="/order">BUY</Link>
  </div>
);

export default Cart;
