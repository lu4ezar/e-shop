import React from "react";
import HeadingText from "../shared/HeadingText";
import ProductCard from "../ProductCard";
import "./Homepage.scss";
import { cartSlice } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { addProduct } = cartSlice.actions;
  const handleClick = (product: number) => {
    dispatch(addProduct(1));
  };
  return (
    <div>
      <HeadingText pxSize={32}>Homepage</HeadingText>
      <HeadingText pxSize={16}>Products we sell:</HeadingText>
      <div className="product_gallery">
        <ProductCard productName="Lady Bg Pillow" onClick={handleClick} />
        <ProductCard productName="Lady Gaga Pillow" onClick={handleClick} />
        <ProductCard productName="Gucci Gang Pillow" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Home;
