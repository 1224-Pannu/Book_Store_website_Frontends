import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { FaCartArrowDown, FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import { addToCart } from "../../store/cartSlice"; // ✅ import addToCart

const ViewBookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch(); // ✅ required for redux update
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  const userId = useSelector((state) => state.auth.user?._id);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:1000/api/v1/${id}`);
        setBook(res.data.book);
      } catch (err) {
        console.error("❌ Error fetching book:", err);
      }
    };
    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        const res = await axios.delete(
          `http://localhost:1000/api/v1/delete-book`,
          {
            headers: {
              bookid: book._id,
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert(res.data.message || "Book deleted successfully ✅");
      } catch (err) {
        alert("Failed to delete book");
        console.error(err);
      }
    }
  };

  const handleEdit = () => {
    alert("Redirect to edit form here or open a modal.");
  };

  const handleAddToFavourites = async () => {
    try {
      const response = await axios.put(
        "http://localhost:1000/api/v1/add-book-to-favourite",
        {
          bookid: book._id,
          id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      setLiked(true);
    } catch (error) {
      console.error("❌ Add to Favourites Error:", error);
      alert("Failed to add to favourites");
    }
  };

  const handleAddToCart = async () => {
    try {
      const response = await axios.put(
        "http://localhost:1000/api/v1/add-to-cart",
        null,
        {
          headers: {
            bookid: book._id,
            id: userId,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      console.log("✅ Cart API success:", response.data);

      // ✅ update Redux cart
      dispatch(addToCart(book));
    } catch (error) {
      console.error("❌ Add to Cart Error:", error);
      alert("Failed to add to cart");
    }
  };

  if (!book) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#0f172a]">
        <p className="text-white text-lg">Loading book details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#0f172a] text-white py-10 px-4 sm:px-6 lg:px-20 xl:px-36">
      <div className="w-full bg-[#1e293b] rounded-2xl shadow-2xl overflow-hidden border border-gray-700 transition-all duration-300 hover:shadow-yellow-200/10">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 p-6 flex flex-col items-center bg-[#111827]">
            <img
              src={book.url}
              alt={book.title}
              className="w-full max-w-[500px] h-auto max-h-[700px] object-contain rounded-xl shadow-lg transition-transform duration-300"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x400?text=Image+Not+Available";
              }}
            />

            {(isLoggedIn || role === "admin") && (
              <>
                <div className="hidden lg:flex absolute top-6 right-6 flex-col gap-3">
                  {isLoggedIn && role !== "admin" && (
                    <>
                      <button
                        onClick={handleAddToFavourites}
                        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110 ${
                          liked
                            ? "bg-red-500 text-white"
                            : "bg-gray-700 text-white"
                        }`}
                        title="Add to Wishlist"
                      >
                        <FaHeart className="text-xl" />
                      </button>
                      <button
                        onClick={handleAddToCart}
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-400 text-white shadow-md hover:bg-yellow-200 transition-all duration-300 hover:scale-110"
                        title="Add to Cart"
                      >
                        <FaCartArrowDown className="text-xl" />
                      </button>
                    </>
                  )}

                  {role === "admin" && (
                    <>
                      <button
                        onClick={handleEdit}
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 text-white shadow-md hover:bg-green-400 transition-all duration-300 hover:scale-110"
                        title="Edit Book"
                      >
                        <FaEdit className="text-xl" />
                      </button>
                      <button
                        onClick={handleDelete}
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-red-600 text-white shadow-md hover:bg-red-500 transition-all duration-300 hover:scale-110"
                        title="Delete Book"
                      >
                        <FaTrash className="text-xl" />
                      </button>
                    </>
                  )}
                </div>

                <div className="flex lg:hidden w-full justify-center flex-wrap gap-4 mt-6">
                  {isLoggedIn && role !== "admin" && (
                    <>
                      <button
                        onClick={handleAddToFavourites}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md ${
                          liked
                            ? "bg-red-500 text-white"
                            : "bg-gray-700 text-white"
                        }`}
                      >
                        <FaHeart />
                        <span>Wishlist</span>
                      </button>
                      <button
                        onClick={handleAddToCart}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-semibold shadow-md hover:bg-yellow-300 transition-all duration-300"
                      >
                        <FaCartArrowDown />
                        <span>Add to Cart</span>
                      </button>
                    </>
                  )}

                  {role === "admin" && (
                    <>
                      <button
                        onClick={handleEdit}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold shadow-md hover:bg-green-400 transition-all duration-300"
                      >
                        <FaEdit />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={handleDelete}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold shadow-md hover:bg-red-500 transition-all duration-300"
                      >
                        <FaTrash />
                        <span>Delete</span>
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="w-full lg:w-1/2 p-8 space-y-6">
            <div>
              <h1 className="text-4xl font-extrabold text-yellow-300 mb-1">
                {book.title}
              </h1>
              <p className="text-lg text-gray-400">by {book.author}</p>
            </div>

            <p className="text-sm text-indigo-300">Language: {book.language}</p>
            <p className="text-2xl font-bold text-green-400">₹{book.price}</p>

            {book.desc && (
              <div>
                <h4 className="text-xl font-semibold text-yellow-200 mb-2">
                  Description
                </h4>
                <p className="text-md text-gray-300 leading-relaxed">
                  {book.desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBookDetails;
