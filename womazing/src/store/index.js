import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    [filterSlice.name]: filterSlice.reducer,
    [productsSlice.name]: productsSlice.reducer,
  },
});
