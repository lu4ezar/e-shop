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
  const { addProduct, removeProduct, deleteProduct } = cartSlice.actions;
  const dispatch = useDispatch();
  const handleAdd = (id: Id) => {
    dispatch(addProduct(id));
  };
  const handleDelete = (id: Id) => {
    dispatch(deleteProduct(id));
  };
  const handleDecrement = (id: Id) => {
    dispatch(removeProduct(id));
  };
  return (
    <div className="Cart">
      <HeadingText pxSize={32}>Cart</HeadingText>
      {cartInfo.length ? (
        <div className="cart_products">
          {cartInfo.map(({ id, name, price, quantity }: CartInfo) => (
            <div className="cart_product" key={id.toString()}>
              <span className="grid_item">{name}</span>
              <span className="grid_item">${price * quantity}</span>
              <span className="grid_item">Qty: {quantity}</span>
              <div className="grid_item">
                <div className="btn-group">
                  <button
                    onClick={() => handleDecrement(id)}
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <button onClick={() => handleAdd(id)}>+</button>
                  <button onClick={() => handleDelete(id)}>&times;</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {totalProduct && totalPrice ? (
        <>
          <div>Total Products: {totalProduct}</div>
          <div>Total Sum: {totalPrice}</div>
        </>
      ) : (
        <div className="empty">Your cart is empty.</div>
      )}
      {totalProduct ? (
        <Link to="/order">
          <button className="cart_btn">Process Order</button>
        </Link>
      ) : (
        <div>
          <Link to="/">
            <button className="cart_btn">Go to main</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
