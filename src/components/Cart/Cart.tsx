import React from "react";
import { Link } from "react-router-dom";

const Cart = () => (
  <div>
    Cart<div>У вас уже 500 товаров в корзине.</div>
    <Link to="/order">Оформить заказ</Link>
  </div>
);

export default Cart;
