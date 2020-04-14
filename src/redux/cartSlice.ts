import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../interfaces";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {} as Cart,
  reducers: {
    addProduct: (state, action: PayloadAction<Cart["id"]>) => {
      const { payload } = action;
      const prevValue = (state[payload as keyof Cart] as number) || 0;
      return {
        ...state,
        [payload]: prevValue + 1,
      };
    },
    removeProduct: (state, action) => {},
  },
});

export default cartSlice.reducer;
