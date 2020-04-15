import React from "react";
import HeadingText from "../shared/HeadingText";
import ProductCard from "../ProductCard";
import "./Homepage.scss";
import { cartSlice } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Product, Id } from "../../interfaces";
import { selectCatalog } from "../../redux/selectors";

const Homepage = () => {
  const dispatch = useDispatch();
  const { addProduct } = cartSlice.actions;
  const catalog = useSelector(selectCatalog);
  const handleClick = (id: Id) => {
    dispatch(addProduct(id));
  };
  return (
    <div>
      <HeadingText pxSize={32}>Homepage</HeadingText>
      <HeadingText pxSize={16}>Products we sell:</HeadingText>
      <div className="product_gallery">
        {catalog
          ? catalog.map(({ isbn13, ...productData }: Product) => (
              <ProductCard
                key={isbn13}
                {...productData}
                onClick={() => handleClick(isbn13 as Id)}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Homepage;
