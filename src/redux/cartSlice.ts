import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../interfaces";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Cart,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {},
  },
});

export default cartSlice.reducer;
