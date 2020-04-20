import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, Id } from "../interfaces";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {} as Cart,
  reducers: {
    addProduct: (state, action: PayloadAction<Id>) => {
      const { payload } = action;
      const curValue = state[payload] || 0;
      return {
        ...state,
        [payload]: curValue + 1,
      };
    },
    removeProduct: (state, action: PayloadAction<Id>) => {
      const { payload } = action;
      const curValue = state[payload] || 0;
      return {
        ...state,
        [payload]: curValue >= 1 ? curValue - 1 : 0,
      };
    },
    deleteProduct: (state, action: PayloadAction<Id>) => {
      const { payload } = action;
      delete state[payload];
    },
    dropCart: (state) => (state = {} as Cart),
  },
});

export default cartSlice.reducer;
