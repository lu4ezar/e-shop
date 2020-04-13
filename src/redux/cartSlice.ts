import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {} as any,
  reducers: {
    addProduct: (state, action) => action.payload,
    removeProduct: (state, action) => action.payload,
  },
});

export default cartSlice.reducer;
