import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { dataUrls } from "../../utils/constants";

export const fetchSliders = createAsyncThunk(
  "sliders/fetchSliders",
  async () => {
    const { data } = await axios.get(dataUrls.ABOUT);
    return data;
  }
);

const initialState = {
  items: null,
  status: "loading",
};

export const sliderSlice = createSlice({
  name: "sliders",
  initialState,
  extraReducers: {
    [fetchSliders.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchSliders.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export default sliderSlice;
