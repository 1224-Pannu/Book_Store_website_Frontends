// src/store/index.js or store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import cartReducer from "./cartSlice"; // ✅ Import your cartSlice

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
