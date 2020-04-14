import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../interfaces";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Cart,
  reducers: {
    addProduct: (state, action) => action.payload,
    removeProduct: (state, action) => action.payload,
  },
});

export default cartSlice.reducer;
