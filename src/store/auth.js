import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    role: "user",
    user: null, // ✅ Added
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.user; // ✅ Added
      state.role = action.payload.user?.role || "user"; // ✅ Added
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null; // ✅ Reset user
      state.role = "user"; // ✅ Reset role
    },
    ChangeRole(state, action) {
      const role = action.payload; // ✅ Fixed spelling
      state.role = role;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
