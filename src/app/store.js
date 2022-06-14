import { configureStore } from "@reduxjs/toolkit";
import baseSlice from "./features/baseSlice";
export const store = configureStore({
  reducer: {
    base: baseSlice,
  },
});
