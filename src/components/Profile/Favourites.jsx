import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const userId = useSelector((state) => state.auth.user?._id);

  const fetchFavourites = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-favourite-books",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFavourites(response.data.books);
    } catch (error) {
      console.error("❌ Error fetching favourites:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (bookId) => {
    try {
      const res = await axios.put(
        "http://localhost:1000/api/v1/remove-book-from-favourite",
        null,
        {
          headers: {
            bookid: bookId,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(res.data.message);
      setFavourites(favourites.filter((book) => book._id !== bookId));
    } catch (err) {
      console.error("❌ Error removing book:", err);
      alert("Failed to remove book from favourites");
    }
  };

  useEffect(() => {
    if (userId) fetchFavourites();
  }, [userId]);

  return (
    <div className="min-h-screen bg-[#0f172a] px-4 py-10">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 xl:px-36 py-10">
        <h1 className="text-4xl font-bold text-yellow-300 mb-10 text-center">
          Your Favourite Books ❤️
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-60">
            <p className="text-white text-lg">Loading favourites...</p>
          </div>
        ) : favourites.length === 0 ? (
          <div className="flex justify-center items-center h-60">
            <p className="text-white text-xl">No favourites added yet ❤️</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {favourites.map((book) => (
              <div
                key={book._id}
                className="bg-[#1e293b] rounded-xl shadow-lg p-5 flex flex-col justify-between"
              >
                <img
                  src={book.url}
                  alt={book.title}
                  className="w-full h-64 object-contain rounded-lg mb-4"
                />
                <div className="flex flex-col gap-1 mb-4">
                  <h2 className="text-xl font-bold text-yellow-200">
                    {book.title}
                  </h2>
                  <p className="text-gray-400">by {book.author}</p>
                  <p className="text-green-400 font-semibold">₹{book.price}</p>
                </div>
                <button
                  onClick={() => handleRemove(book._id)}
                  className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition"
                >
                  <FaTrash />
                  <span>Remove</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Favourites;
