import { createSlice } from "@reduxjs/toolkit";
import { Catalog } from "../interfaces";
import data from "../data.new";

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: data as Catalog,
  reducers: {},
});

export default catalogSlice.reducer;
