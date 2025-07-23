// src/pages/User/UserSettings.jsx
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPalette, FaBell } from "react-icons/fa";

const UserSettings = () => {
  const [form, setForm] = useState({
    name: "Priyanshu Kumar",
    email: "priyanshu@example.com",
    theme: "dark",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings saved:", form);
    alert("✅ Settings saved!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-10 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">⚙️ User Settings</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-[#0f172a] p-8 rounded-2xl shadow-xl space-y-6"
      >
        {/* Name */}
        <div>
          <label className="block mb-2 font-semibold flex items-center gap-2">
            <FaUser className="text-blue-400" /> Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-semibold flex items-center gap-2">
            <FaEnvelope className="text-blue-400" /> Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Theme */}
        <div>
          <label className="block mb-2 font-semibold flex items-center gap-2">
            <FaPalette className="text-blue-400" /> Theme
          </label>
          <select
            name="theme"
            value={form.theme}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        {/* Notifications */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="notifications"
            checked={form.notifications}
            onChange={handleChange}
            className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded"
          />
          <label className="flex items-center text-sm font-medium gap-2">
            <FaBell className="text-yellow-400" />
            Enable Notifications
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-lg font-bold text-lg shadow-md"
        >
          💾 Save Settings
        </button>
      </form>
    </div>
  );
};

export default UserSettings;
