import React from "react";
import ProductCard from "../ProductCard";
import "./Homepage.scss";
import { cartSlice } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Product, Id } from "../../interfaces";
import { getVisibleList } from "../../redux/selectors";
import Catalog from "../Catalog";
import Pager from "../Pager";

const Homepage = () => {
  const dispatch = useDispatch();
  const { addProduct } = cartSlice.actions;
  const catalog = useSelector(getVisibleList);
  const handleClick = (id: Id) => {
    dispatch(addProduct(id));
  };
  return (
    <div className="Homepage">
      <Catalog />
      <div className="product_gallery">
        {catalog
          ? catalog.map((product: Product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => handleClick(product.id)}
              />
            ))
          : null}
      </div>
      <Pager />
    </div>
  );
};

export default Homepage;
