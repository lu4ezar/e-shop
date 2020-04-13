import React from "react";
import HeadingText from "../shared/HeadingText";
import ProductCard from "../ProductCard";
import "./Homepage.scss";

const Home = () => (
  <div>
    <HeadingText pxSize={32}>Homepage</HeadingText>
    <HeadingText pxSize={16}>Products we sell:</HeadingText>
    <div className="product_gallery">
      <ProductCard productName="Lady Bg Pillow">PRODUCT 1</ProductCard>
      <ProductCard productName="Lady Gaga Pillow">PRODUCT 2</ProductCard>
      <ProductCard productName="Gucci Gang Pillow">PRODUCT 3</ProductCard>
    </div>
  </div>
);

export default Home;
