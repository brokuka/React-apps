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
    increaseProductCart(state, action) {
      const match = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          (obj.size || obj.color) ===
            (action.payload.size || action.payload.color)
      );

      if (match) {
        match.count += action.payload.count;
        match.totalPrice += action.payload.totalPrice;
        state.total += action.payload.count;
        state.price += action.payload.totalPrice;
      } else {
        state.items.push(action.payload);
        state.total += action.payload.count;
        state.price += action.payload.price * action.payload.count;
      }
    },
    increaseCartItem(state, action) {
      const match = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          (obj.size && obj.color) ===
            (action.payload.size && action.payload.color)
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
    decreaseCartItem(state, action) {
      const match = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          (obj.size && obj.color) ===
            (action.payload.size && action.payload.color)
      );

      if (match) {
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
    removeCartItem(state, action) {
      const match = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          (obj.size && obj.color) ===
            (action.payload.size && action.payload.color)
      );

      state.items = state.items.filter((item) => item !== match);
      state.total -= match.count;
      state.price -= match.price;
    },
    clearCart(state) {
      state.items = [];
      state.total = null;
      state.price = null;
    },
  },
});

export const {
  addItemToCart,
  increaseProductCart,
  increaseCartItem,
  decreaseCartItem,
  removeCartItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice;
