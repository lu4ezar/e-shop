import { createSlice } from "@reduxjs/toolkit";
import { FilterCatalog } from "../interfaces";

export const filterCatalogSlice = createSlice({
  name: "filterCatalog",
  initialState: "all",
  reducers: {
    setFilter: (_, { payload }: { payload: FilterCatalog }) => {
      return payload;
    },
  },
});

export default filterCatalogSlice.reducer;
