import { configureStore } from "@reduxjs/toolkit";
import fundReducer from "../features/fund/fundSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    funds: fundReducer,
    auth: authReducer,
  },
});
