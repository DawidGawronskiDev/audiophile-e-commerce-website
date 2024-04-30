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
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
