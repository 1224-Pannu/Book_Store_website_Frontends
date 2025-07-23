import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Current cartItems from Redux store:", cartItems);
  }, [cartItems]);

  const handleRemove = (id) => {
    console.log("Removing item with id:", id);
    dispatch(removeFromCart(id));
  };

  return (
    <div className="min-h-[90vh] bg-[#0f172a] text-white px-4 sm:px-8 lg:px-20 pt-10 pb-20">
      <h1 className="text-4xl text-yellow-300 font-bold text-center mb-10">
        Your Shopping Cart 🛒
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl text-gray-400">
          Cart is empty. Start adding some books!
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((book) => (
            <div
              key={book._id}
              className="bg-[#1e293b] p-5 rounded-xl shadow-md flex flex-col justify-between"
            >
              <img
                src={book.url}
                alt={book.title}
                className="w-full h-64 object-contain mb-4 rounded-lg"
              />
              <h2 className="text-xl font-bold text-yellow-200">
                {book.title}
              </h2>
              <p className="text-gray-400">by {book.author}</p>
              <p className="text-green-400 font-semibold text-lg">
                ₹{book.price}
              </p>
              <button
                onClick={() => handleRemove(book._id)}
                className="mt-4 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full"
              >
                <FaTrash />
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
