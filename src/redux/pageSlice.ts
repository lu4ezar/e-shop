import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: 1,
  reducers: {
    incrementPage: (state) => state + 1,
    decrementPage: (state) => {
      if (state > 1) return state - 1;
    },
    dropPage: (state) => 1,
  },
});

export default pageSlice.reducer;
