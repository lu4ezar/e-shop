import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Product, CartItem, CartPrice, Id } from "../interfaces";

const PAGE_SIZE = 12;

const selectCart = (state: RootState) => state.cart;

export const selectPage = (state: RootState) => state.page;

const selectProducts = (state: RootState) => state.catalog.products;

export const selectCategories = (state: RootState) => state.catalog.categories;

export const selectFilterCatalog = (state: RootState) => state.filterCatalog;

const getFilteredProductList = createSelector(
  [selectProducts, selectFilterCatalog],
  (products, filter) => {
    return products.filter((product: Product) =>
      filter === "all" ? true : product.category === filter
    );
  }
);

export const getVisibleList = createSelector(
  [getFilteredProductList, selectPage],
  (products, page) =>
    products
      .filter(
        (_, index) =>
          index >= PAGE_SIZE * (page - 1) && index < PAGE_SIZE * page
      )
      .sort((a, b) => a.name.localeCompare(b.name))
);

export const getTotalPages = createSelector(
  getFilteredProductList,
  (filteredList) => Math.ceil(filteredList.length / PAGE_SIZE)
);

export const getTotalProduct = createSelector(selectCart, (cart) =>
  Object.values(cart).reduce(
    (acc, cartItemQuantity) => acc + cartItemQuantity,
    0
  )
);

const getCartIds = createSelector(selectCart, (cart) =>
  Object.keys(cart).map((id): Id => +id)
);

const getCartPrices = createSelector(
  [selectProducts, getCartIds],
  (products, ids) => {
    return ids.reduce((acc, id) => {
      const product = products.find((product) => product.id === +id);
      return { ...acc, [id]: product?.price || 0 };
    }, {} as CartPrice);
  }
);

const getCartQuantities = createSelector(
  [selectCart, getCartIds],
  (cart, ids): CartItem =>
    ids.reduce(
      (acc, cur) => ({ ...acc, [cur as number]: cart[cur] }),
      {} as CartItem
    )
);

export const getTotalPrice = createSelector(
  [getCartIds, getCartPrices, getCartQuantities],
  (cartIds, prices, quantities) => {
    const sum = cartIds.reduce((acc, id) => {
      const price = prices[id as keyof CartPrice];
      const quantity = quantities[id];
      return acc + price * quantity;
    }, 0);
    return Math.round((sum + Number.EPSILON) * 100) / 100;
  }
);

export const getCartProductsInfo = createSelector(
  [getCartIds, getCartQuantities, selectProducts],
  (cartIds, quantities, products) => {
    return cartIds.map((id) => {
      const product = products.find((product: Product) => product.id === id)!;
      const { name, price } = product;
      const quantity = quantities[id as keyof CartItem];
      return { id, name, price, quantity };
    });
  }
);
