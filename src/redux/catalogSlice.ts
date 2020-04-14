import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Catalog } from "../interfaces";

export const fetchProducts = createAsyncThunk(
  "catalog/fetchCatalog",
  async () => {
    const url = "https://api.itbook.store/1.0/new";
    const proxy = "https://cors-anywhere.herokuapp.com";
    const response = await fetch(`${proxy}/${url}`);
    const catalogJSON = await response.json();
    const { books } = catalogJSON;
    return books;
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: [] as Catalog,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export default catalogSlice.reducer;
