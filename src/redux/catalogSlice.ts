import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "catalog/fetchCatalog",
  async () => {
    const url = "https://api.itbook.store/1.0/new";
    const proxy = "https://cors-anywhere.herokuapp.com";
    const response = await fetch(`${proxy}/${url}`);
    const catalog = await response.json();
    return catalog;
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {} as any,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.catalog = action.payload;
    });
  },
});

export default catalogSlice.reducer;
