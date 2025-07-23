import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard/BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await axios.get("http://localhost:1000/api/v1/all");
        console.log("✅ All books response:", response.data);
        if (response.data && Array.isArray(response.data.books)) {
          setBooks(response.data.books);
        } else {
          console.error("❌ Invalid structure:", response.data);
        }
      } catch (error) {
        console.error("❌ Error fetching all books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827]">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 mb-8 text-center">
        📚 Explore Our Book Collection
      </h2>

      {loading ? (
        <p className="text-gray-300 text-center">Loading books...</p>
      ) : books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book._id} data={book} />
          ))}
        </div>
      ) : (
        <p className="text-red-300 text-center">No books found.</p>
      )}
    </div>
  );
};

export default AllBooks;
