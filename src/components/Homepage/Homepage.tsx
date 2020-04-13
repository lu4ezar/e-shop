import React from "react";
import HeadingText from "../shared/HeadingText";
import ProductCard from "../ProductCard";
import "./Homepage.scss";

const Home = () => (
  <div>
    <HeadingText pxSize={32}>Homepage</HeadingText>
    <HeadingText pxSize={16}>Products we sell:</HeadingText>
    <div className="product_gallery">
      <ProductCard productName="Lady Bg Pillow" />
      <ProductCard productName="Lady Gaga Pillow" />
      <ProductCard productName="Gucci Gang Pillow" />
    </div>
  </div>
);

export default Home;
