import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import catalogReducer from "./catalogSlice";
import pageReducer from "./pageSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    cart: cartReducer,
    catalog: catalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
