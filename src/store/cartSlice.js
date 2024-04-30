import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartVisible: false,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state) => {
      state.isCartVisible = true;
    },
    hideCart: (state) => {
      state.isCartVisible = false;
    },
    addItem: (state, action) => {
      const { item, quantity } = action.payload;

      const newItem = item;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id,
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity =
          state.items[existingItemIndex].quantity + quantity;
      } else {
        state.items.push({ ...newItem, quantity: quantity });
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
