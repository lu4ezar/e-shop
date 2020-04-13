import { createSlice } from "@reduxjs/toolkit";

export type Cart = Array<{
  title: string;
  price: string;
  quantity: number;
}>;

export const cartSlice = createSlice({
  name: "cart",
  initialState: {} as Cart,
  reducers: {
    addProduct: (state, action) => action.payload,
    removeProduct: (state, action) => action.payload,
  },
});

export default cartSlice.reducer;
