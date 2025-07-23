import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (!existing) {
        state.cartItems.push(action.payload);
        console.log("✅ Added to cart:", action.payload);
      } else {
        console.log("⚠️ Item already in cart:", action.payload);
      }

      console.log("🛒 Cart Items after add:", state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      console.log("❌ Removed item with ID:", action.payload);
      console.log("🛒 Cart Items after remove:", state.cartItems);
    },

    clearCart: (state) => {
      state.cartItems = [];
      console.log("🧹 Cart cleared");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
