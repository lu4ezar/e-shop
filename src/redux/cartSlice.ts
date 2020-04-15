import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem } from "../interfaces";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {} as CartItem,
  reducers: {
    addProduct: (state, action: PayloadAction<Cart["id"]>) => {
      const { payload } = action;
      const curValue = state[payload] || 0;
      return {
        ...state,
        [payload]: curValue + 1,
      };
    },
    removeProduct: (state, action: PayloadAction<Cart["id"]>) => {
      const { payload } = action;
      const curValue = state[payload] || 0;
      return {
        ...state,
        [payload]: curValue >= 1 ? curValue - 1 : 0,
      };
    },
    deleteProduct: (state, action: PayloadAction<Cart["id"]>) => {
      const { payload } = action;
      delete state[payload];
    },
  },
});

export default cartSlice.reducer;
