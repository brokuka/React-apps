import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchByProductsStatus",
  async (params) => {
    const res = await axios.get(
      `http://localhost:3005/products/${params ? params : ""}`
    );
    return res.data;
  }
);

const initialState = {
  items: null,
  status: "loading",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const {} = productsSlice.actions;
export default productsSlice;
