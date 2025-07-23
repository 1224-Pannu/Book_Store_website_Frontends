import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const BookCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent link navigation
    console.log("✅ Adding to cart:", data); // Debug log
    dispatch(addToCart(data));
  };

  return (
    <Link to={`/view-book-details/${data._id}`}>
      <div className="bg-[#26263a] rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 group border border-[#3b3b50]">
        <div className="w-full h-56 overflow-hidden">
          <img
            src={data.url}
            alt={data.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-yellow-100 group-hover:text-yellow-300 transition-colors duration-200">
            {data.title}
          </h3>
          <p className="text-sm text-gray-300">by {data.author}</p>
          <p className="text-xs text-gray-400 italic">{data.language}</p>
          <p className="text-base font-bold text-green-400">₹{data.price}</p>
          {data.desc && (
            <p className="text-xs text-gray-400 line-clamp-2">{data.desc}</p>
          )}

          {/* ✅ Add to Cart Button */}
          <button
            className="mt-2 px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition"
            onClick={handleAddToCart}
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
