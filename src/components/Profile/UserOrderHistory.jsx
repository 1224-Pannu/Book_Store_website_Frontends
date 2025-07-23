// src/pages/User/UserOrderHistory.jsx
import React, { useEffect, useState } from "react";

const UserOrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sample data
  const sampleOrders = [
    {
      _id: "ORD123456",
      book: {
        title: "The Alchemist",
        price: 299,
      },
      deliveryStatus: "Delivered",
    },
    {
      _id: "ORD123457",
      book: {
        title: "Atomic Habits",
        price: 450,
      },
      deliveryStatus: "Shipped",
    },
    {
      _id: "ORD123458",
      book: {
        title: "Deep Work",
        price: 370,
      },
      deliveryStatus: "Processing",
    },
    {
      _id: "ORD123459",
      book: {
        title: "Rich Dad Poor Dad",
        price: 310,
      },
      deliveryStatus: "Delivered",
    },
    {
      _id: "ORD123460",
      book: {
        title: "Ikigai",
        price: 260,
      },
      deliveryStatus: "Processing",
    },
  ];

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setOrders(sampleOrders);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-300 text-lg animate-pulse">
        Loading your orders...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-8 ">
        📦 Your Order History
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-[#1f2937] text-white rounded-2xl shadow-xl p-6 hover:scale-[1.02] transition-all border border-gray-600"
          >
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-blue-400">
                {order.book?.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Order ID: <span className="text-white">{order._id}</span>
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-base">
                💰 Price:{" "}
                <span className="font-semibold text-green-400">
                  ₹{order.book?.price}
                </span>
              </p>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  order.deliveryStatus === "Delivered"
                    ? "bg-green-600 text-white"
                    : order.deliveryStatus === "Shipped"
                    ? "bg-yellow-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {order.deliveryStatus}
              </span>
            </div>
          </div>
        ))}
      </div>

      {orders.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No orders found.</p>
      )}
    </div>
  );
};

export default UserOrderHistory;
