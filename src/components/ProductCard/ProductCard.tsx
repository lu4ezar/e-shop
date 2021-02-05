import React from "react";
import { uuid } from "uuidv4";
import "./ProductCard.scss";
import HeadingText from "../shared/HeadingText";
import { ProductCardProps } from "../../interfaces";

const ProductCard = ({ name, image, price, onClick }: ProductCardProps) => (
  <div className="ProductCard">
    <HeadingText pxSize={16}>{name}</HeadingText>
    <img alt="product" src={`${image}${uuid()}`} />
    <div className="buy_button">
      <div className="buy_button__item">${price}</div>
      <button className="buy_button__item" onClick={onClick}>
        Add to cart
      </button>
    </div>
  </div>
);

export default ProductCard;
