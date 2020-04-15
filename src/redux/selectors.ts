import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Product, CartItem } from "../interfaces";

export const selectCart = (state: RootState) => state.cart;

export const selectCatalog = (state: RootState) => state.catalog;

export const getTotalProduct = createSelector(selectCart, (cart) =>
  Object.values(cart).reduce((acc, cur) => acc + cur, 0)
);

const getCartIds = createSelector(selectCart, (cart) => Object.keys(cart));

const getCartPrices = createSelector(
  [selectCatalog, getCartIds],
  (catalog, ids): CartItem =>
    ids.reduce((acc, cur) => {
      const { price } = catalog.find(
        (product: Product) => product.isbn13 === cur
      ) as Product;
      const parsedPrice = parseFloat(price.replace(/[$]/g, ""));
      return { ...acc, [cur]: parsedPrice };
    }, {})
);

export const getCartQuantities = createSelector(
  [selectCart, getCartIds],
  (cart, ids): CartItem =>
    ids.reduce((acc, cur) => ({ ...acc, [cur]: cart[cur] }), {})
);

export const getTotalPrice = createSelector(
  [getCartIds, getCartPrices, getCartQuantities],
  (cartIds, prices, quantities) => {
    const sum = cartIds.reduce((acc, cur) => {
      const price = prices[cur];
      const quantity = quantities[cur];
      return acc + price * quantity;
    }, 0);
    return Math.round((sum + Number.EPSILON) * 100) / 100;
  }
);

export const getCartProductsInfo = createSelector(
  [getCartIds, getCartQuantities, selectCatalog],
  (cartIds, quantities, catalog) => {
    return cartIds.map((id) => {
      const product = catalog.find((product) => product.isbn13 === id)!;
      const { title, price } = product;
      const quantity = quantities[id];
      return { id, title, price, quantity };
    });
  }
);
