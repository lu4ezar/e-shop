import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../interfaces";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {} as Cart,
  reducers: {
    addProduct: (state, action: PayloadAction<Cart["id"]>) => {
      const { payload } = action;
      const curValue = (state[payload as keyof Cart] as number) || 0;
      return {
        ...state,
        [payload]: curValue + 1,
      };
    },
    removeProduct: (state, action: PayloadAction<Cart["id"]>) => {
      const { payload } = action;
      const curValue = (state[payload as keyof Cart] as number) || 0;
      return {
        ...state,
        [payload]: curValue >= 1 ? curValue - 1 : 0,
      };
    },
    deleteProduct: (state, action: PayloadAction<Cart["id"]>) => {
      const { payload } = action;
      delete state[payload as keyof Cart];
    },
  },
});

export default cartSlice.reducer;
