import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal(state, action) {
      state.active = action.payload;
    },
  },
});
export const { setModal } = modalSlice.actions;
export default modalSlice;
