import React from "react";
import { useSelector } from "react-redux";
import { getTotalProduct, getTotalPrice } from "../../redux/selectors";
import cartSVG from "../../img/cart.svg";
import "./CartWidget.scss";

const CartWidget = () => {
  const totalProducts = useSelector(getTotalProduct);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div className="CartWidget">
      <img src={cartSVG} alt="cart" />
      {!!totalProducts && <div className="text">{totalProducts}</div>}
      {!!totalPrice && <div className="text">${totalPrice}</div>}
    </div>
  );
};
export default CartWidget;
