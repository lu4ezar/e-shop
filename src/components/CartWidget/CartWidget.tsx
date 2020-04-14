import React from "react";
import { useSelector } from "react-redux";
import { getTotalProduct } from "../../redux/selectors";
import "./CartWidget.scss";

const CartWidget = () => {
  const totalProducts = useSelector(getTotalProduct);
  return (
    <div className="CartWidget">
      <div>CartWidget</div>
      <div>{totalProducts}</div>
      <div>Go to cart</div>
    </div>
  );
};
export default CartWidget;
