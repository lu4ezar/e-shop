import React from "react";
import { Link } from "react-router-dom";
import HeadingText from "../shared/HeadingText";
import { useSelector } from "react-redux";
import {
  getTotalProduct,
  getTotalPrice,
  getProductsByIds,
} from "../../redux/selectors";
import { CartInfo } from "../../interfaces";
import "./Cart.scss";

const Cart = () => {
  const totalProduct = useSelector(getTotalProduct);
  const totalPrice = useSelector(getTotalPrice);
  const cartInfo = useSelector(getProductsByIds);
  return (
    <div className="Cart">
      <HeadingText pxSize={32}>Cart</HeadingText>
      <div className="cart_products">
        {cartInfo.map(({ id, title, price, quantity }: CartInfo) => (
          <div className="cart_product" key={id}>
            {title}
            <span>{price}</span>
            <span>Qty: {quantity}</span>
          </div>
        ))}
      </div>
      <div>Total Products: {totalProduct}</div>
      <div>Total Sum: {totalPrice}</div>
      <Link to="/order">BUY</Link>
    </div>
  );
};

export default Cart;
