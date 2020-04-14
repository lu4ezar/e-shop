import React from "react";
import { Link } from "react-router-dom";
import HeadingText from "../shared/HeadingText";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/selectors";

const Cart = () => {
  const totalSum = useSelector(getTotalPrice);
  return (
    <div>
      <HeadingText pxSize={32}>Cart</HeadingText>
      <div>There are about 500 products in your cart.</div>
      <div>Total Sum: ${totalSum}</div>
      <Link to="/order">BUY</Link>
    </div>
  );
};

export default Cart;
