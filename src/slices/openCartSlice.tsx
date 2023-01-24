import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const openCartSlice = createSlice({
  name: "openCart",
  initialState,
  reducers: {
    openCart: (state, action) => {
      state.isOpen = true;
    },
    closeCart: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openCart, closeCart } = openCartSlice.actions;
export default openCartSlice.reducer;
