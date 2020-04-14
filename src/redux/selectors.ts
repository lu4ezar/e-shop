import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Product, Cart } from "../interfaces";

export const selectCart = (state: RootState) => state.cart;

export const selectCatalog = (state: RootState) => state.catalog;

export const getTotalProduct = createSelector(selectCart, (cart) =>
  Object.values(cart).reduce((acc, cur) => acc + cur, 0)
);

const getCartIds = createSelector(selectCart, (cart) => Object.keys(cart));

const getCartPrices = createSelector(
  [selectCatalog, getCartIds],
  (catalog, ids) => {
    return ids.map((id) => {
      const { price } = catalog.find(
        (product: Product) => product.isbn13 === id
      )!;
      return { [id]: parseFloat(price.replace(/[$]/g, "")) };
    });
  }
);

export const getCartQuantities = createSelector(
  [selectCart, getCartIds],
  (cart, ids) => {
    return ids.map((id) => {
      return { [id]: cart[id as keyof Cart] as number };
    });
  }
);

export const getTotalPrice = createSelector(
  [getCartIds, getCartPrices, getCartQuantities],
  (cartIds, prices, quantities) => {
    const sum = cartIds.reduce((acc, id) => {
      const price = prices.find((p) => p[id])![id];
      let quantity = quantities.find((q) => q[id])?.id;
      return acc + price * (quantity || 0);
    }, 0);
    return Math.round((sum + Number.EPSILON) * 100) / 100;
  }
);

export const getProductsByIds = createSelector(
  [getCartIds, getCartQuantities, selectCatalog],
  (cartIds, quantities, catalog) => {
    return cartIds.map((id) => {
      const product = catalog.find((product) => product.isbn13 === id)!;
      const { title, price } = product;
      const quantity = quantities.find((q) => q[id])![id];
      return { id, title, price, quantity };
    });
  }
);
