import React from "react";
import "./ProductCard.scss";
import HeadingText from "../shared/HeadingText";
import { ProductCardProps } from "../../interfaces";

const ProductCard = ({ name, image, price, onClick }: ProductCardProps) => (
  <div className="ProductCard">
    <HeadingText pxSize={16}>{name}</HeadingText>
    <img alt="product" src={image} />
    <span>${price}</span>
    <button onClick={onClick}>Add to cart</button>
  </div>
);

export default ProductCard;
