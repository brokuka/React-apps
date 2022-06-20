import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import aboutSlice from "./slices/aboutSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [aboutSlice.name]: aboutSlice.reducer,
  },
});
