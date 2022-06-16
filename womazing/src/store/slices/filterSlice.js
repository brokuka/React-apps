import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: null,
  items: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setFilteredItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setCategoryId, setFilteredItems } = filterSlice.actions;
export default filterSlice;
