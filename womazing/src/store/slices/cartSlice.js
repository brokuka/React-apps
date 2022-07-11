import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: null,
  price: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.items.push(action.payload);
      state.total += action.payload.count;
      state.price += action.payload.price * action.payload.count;
    },
    increaseItemCart(state, action) {
      const match = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          (obj.size || obj.color) ===
            (action.payload.size || action.payload.color)
      );

      if (match) {
        match.count++;
        match.totalPrice += match.price;
        state.total++;
        state.price += match.price;
      } else {
        state.items.push(action.payload);
        state.total += action.payload.count;
        state.price += action.payload.price * action.payload.count;
      }
    },
    decreaseItemCart(state, action) {
      const match = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          (obj.size || obj.color) ===
            (action.payload.size || action.payload.color)
      );

      if (match && match.count > 1) {
        match.count--;
        match.totalPrice -= match.price;
        state.total--;
        state.price -= match.price;
      } else {
        state.items.push(action.payload);
        state.total += action.payload.count;
        state.price += action.payload.price * action.payload.count;
      }
    },
    removeItemFromCart(state, action) {
      const match = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          (obj.size || obj.color) ===
            (action.payload.size || action.payload.color)
      );

      state.items = state.items.filter((item) => item !== match);
      state.total -= match.count;
      state.price -= match.price;
    },
  },
});

export const {
  addItemToCart,
  increaseItemCart,
  decreaseItemCart,
  removeItemFromCart,
} = cartSlice.actions;
export default cartSlice;
