import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const Sidebar = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(authActions.logout());
    navigate("/login");
  };

  if (!data) {
    return (
      <div className="text-white p-4 text-center">Loading user data...</div>
    );
  }

  return (
    <div className="bg-zinc-800 rounded-2xl shadow-lg p-6 w-full h-[92%] text-white flex flex-col justify-between">
      {/* Top: Profile Info */}
      <div className="flex flex-col items-center gap-2">
        <img
          src={data.avatar}
          alt="User Avatar"
          className="h-20 w-20 rounded-full object-cover border-2 border-yellow-400"
        />
        <p className="text-xl font-semibold text-yellow-300">{data.username}</p>
        <p className="text-sm text-gray-300">{data.email}</p>

        {/* Border line after profile info */}
        <div className="w-full mt-6 border-t border-zinc-600" />
      </div>

      {/* Middle: Navigation Links */}
      <div className="w-full mt-6 space-y-3">
        <Link
          to="/profile/favorites"
          className="block hover:bg-zinc-700 py-2 px-4 rounded-lg transition"
        >
          💖 Favorites
        </Link>
        <Link
          to="/profile/orders"
          className="block hover:bg-zinc-700 py-2 px-4 rounded-lg transition"
        >
          📦 Order History
        </Link>
        <Link
          to="/profile/settings"
          className="block hover:bg-zinc-700 py-2 px-4 rounded-lg transition"
        >
          ⚙️ Settings
        </Link>
      </div>

      {/* Bottom: Logout Button */}
      <div className="w-full mt-6 border-t border-zinc-600 pt-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 text-left py-2 px-4 bg-red-600 hover:bg-red-500 rounded-lg transition font-semibold"
        >
          Logout
          <img
            src="https://www.shutterstock.com/image-vector/logout-vector-icon-illustration-web-260nw-1888955377.jpg"
            alt="Logout Icon"
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
