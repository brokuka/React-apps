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
  categoryId: null,
  current: {
    product: null,
    related: null,
  },
  status: "loading",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.current.product = action.payload.item;
      state.current.related = action.payload.related;
    },
    setCategory(state, action) {
      state.categoryId = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.items = null;
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

export const { setProduct, setRelated, setCategory } = productsSlice.actions;
export default productsSlice;
