import React from "react";
import "./ProductCard.scss";
import HeadingText from "../shared/HeadingText";
import { ProductCardProps } from "../../interfaces";

const ProductCard = ({
  title,
  subtitle,
  image,
  price,
  onClick,
}: ProductCardProps) => (
  <div className="ProductCard">
    <HeadingText pxSize={16}>{title}</HeadingText>
    <div>{subtitle}</div>
    <img alt="product" src={image} />
    <span>Price: {price}</span>
    <button onClick={onClick}>Add to cart</button>
  </div>
);

export default ProductCard;
