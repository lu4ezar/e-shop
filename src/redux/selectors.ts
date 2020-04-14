import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const selectCart = (state: RootState) => state.cart;

export const selectCatalog = (state: RootState) => state.catalog;

export const getTotalPrice = createSelector([selectCart], (cart) =>
  cart.reduce((sum, { price }) => {
    const formattedPrice = parseFloat(price.replace(/[$]/g, ""));
    return sum + formattedPrice;
  }, 0)
);
