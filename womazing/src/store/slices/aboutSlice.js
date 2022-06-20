import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { dataUrls } from "../../utils/constants";

export const fetchAbout = createAsyncThunk("about/fetchAbout", async () => {
  const { data } = await axios.get(dataUrls.ABOUT);
  return data;
});

const initialState = {
  items: null,
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  extraReducers: {
    [fetchAbout.pending]: (state) => {
      state.status = "loading";
      state.items = null;
    },
    [fetchAbout.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchAbout.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export default aboutSlice;
