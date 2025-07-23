// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth.js";

import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ViewBookDetails from "./components/ViewBookDetails/ViewBookDetails";
import Favourites from "./components/Profile/Favourites";
import UserOrderHistory from "./components/Profile/UserOrderHistory";
import Settings from "./components/Profile/Settings";
import AboutUs from "./pages/AboutUs";

import Layout from "./components/Layout/Layout";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const savedRole = localStorage.getItem("role");

    if (userId && token && savedRole) {
      dispatch(authActions.login());
      dispatch(authActions.ChangeRole(savedRole));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about-us"
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />
      <Route
        path="/all-books"
        element={
          <Layout>
            <AllBooks />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <SignUp />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />
      <Route
        path="/view-book-details/:id"
        element={
          <Layout>
            <ViewBookDetails />
          </Layout>
        }
      />

      {/* Profile and Nested Routes */}
      <Route
        path="/profile"
        element={
          <Layout>
            <Profile />
          </Layout>
        }
      >
        <Route index element={<Favourites />} />
        <Route path="favorites" element={<Favourites />} />
        <Route path="orders" element={<UserOrderHistory />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
