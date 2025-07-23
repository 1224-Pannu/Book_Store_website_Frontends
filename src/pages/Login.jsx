import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth"; // ✅ path check kar lena

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:1000/api/v1/sign-in",
        form
      );
      setMessage(res.data.message);

      // ✅ Save token in localStorage
      localStorage.setItem("token", res.data.token);

      // ✅ Dispatch with user details
      dispatch(
        authActions.login({
          user: {
            _id: res.data.id,
            role: res.data.role,
          },
        })
      );

      navigate("/");

      setForm({ email: "", password: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#121212] to-[#1a1a2e] px-4 py-10">
      <div className="w-full max-w-lg bg-[#1e1e2f] border border-gray-700 rounded-2xl shadow-2xl p-10">
        <h2 className="text-4xl font-extrabold text-yellow-100 text-center mb-8">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <div>
            <label className="block mb-2 text-yellow-200">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-lg bg-[#2c2c3e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-yellow-200">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-5 py-3 rounded-lg bg-[#2c2c3e] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="text-green-400 mt-4 text-center">{message}</p>
        )}
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}

        {/* OR Divider */}
        <div className="flex items-center gap-4 my-6">
          <hr className="flex-grow border-gray-600" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-300">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-yellow-400 hover:underline font-semibold"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
