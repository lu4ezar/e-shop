import React from "react";
import HeadingText from "../shared/HeadingText";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/selectors";

const Order = () => {
  const sum = useSelector(getTotalPrice);
  return (
    <div>
      <HeadingText pxSize={32}>Order</HeadingText>
      <div>{sum}</div>
    </div>
  );
};

export default Order;
