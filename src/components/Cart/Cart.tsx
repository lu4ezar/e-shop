import React from "react";
import { Link } from "react-router-dom";
import HeadingText from "../shared/HeadingText";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../../redux/cartSlice";
import {
  getTotalProduct,
  getTotalPrice,
  getCartProductsInfo,
} from "../../redux/selectors";
import { CartInfo, Id } from "../../interfaces";
import "./Cart.scss";

const Cart = () => {
  const totalProduct = useSelector(getTotalProduct);
  const totalPrice = useSelector(getTotalPrice);
  const cartInfo = useSelector(getCartProductsInfo);
  const { removeProduct, deleteProduct } = cartSlice.actions;
  const dispatch = useDispatch();
  const handleDelete = (id: Id) => {
    dispatch(deleteProduct(id));
  };
  const handleDecrement = (id: Id) => {
    dispatch(removeProduct(id));
  };
  return (
    <div className="Cart">
      <HeadingText pxSize={32}>Cart</HeadingText>
      <div className="cart_products">
        {cartInfo.map(({ id, title, price, quantity }: CartInfo) => (
          <div className="cart_product" key={id}>
            {title}
            <span>{price}</span>
            <span>Qty: {quantity}</span>
            <button onClick={() => handleDecrement(id)}> -1 </button>
            <button onClick={() => handleDelete(id)}>DELETE</button>
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
