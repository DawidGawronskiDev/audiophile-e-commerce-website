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
    removeAll: (state) => {
      state.items = [];
    },
    addItem: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find(
        (existingItem) => existingItem.id === item.id,
      );

      if (!existingItem) {
        state.items.push({ ...item, quantity: 1 });
      } else {
        existingItem.quantity += quantity; // Increment the quantity
      }
    },
    substractItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (!existingItem) {
        return state;
      }

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
