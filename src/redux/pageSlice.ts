import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: 1,
  reducers: {
    incrementPage: (state) => {
      state = state + 1;
    },
    decrementPage: (state) => {
      if (state > 1) state = state - 1;
    },
  },
});

export default pageSlice.reducer;
