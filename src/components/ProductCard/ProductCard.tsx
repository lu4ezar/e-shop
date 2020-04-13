import React from "react";
import "./ProductCard.scss";
import HeadingText from "../shared/HeadingText";

const ProductCard = (props: any) => (
  <div className="ProductCard">
    <HeadingText pxSize={16}>{props.productName}</HeadingText>
    <img alt="product" src="https://www.fillmurray.com/250/300" />
    <span>Super Price: $99</span>
    <button onClick={props.onClick}>Add to cart</button>
  </div>
);

export default ProductCard;
