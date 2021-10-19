import { configureStore } from "@reduxjs/toolkit";
import fundReducer from "../features/fund/fundSlice";

export const store = configureStore({
  reducer: {
    funds: fundReducer,
  },
});
