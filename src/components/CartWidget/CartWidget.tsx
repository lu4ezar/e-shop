import React from "react";
import { useSelector } from "react-redux";
import { getTotalProduct } from "../../redux/selectors";

const CartWidget = () => {
  const totalProducts = useSelector(getTotalProduct);
  return (
    <>
      <div>CartWidget</div>
      <div>{totalProducts}</div>
      <div>Go to cart</div>
    </>
  );
};
export default CartWidget;
