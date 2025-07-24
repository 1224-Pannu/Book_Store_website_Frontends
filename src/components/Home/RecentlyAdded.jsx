import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";

const RecentlyAdded = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://book-store-website-tq7n.onrender.com/api/v1/recent"
        );
        console.log("✅ Response from backend:", response.data);
        if (response.data && Array.isArray(response.data.books)) {
          setData(response.data.books);
        } else {
          console.error("❌ Invalid response structure", response.data);
        }
      } catch (error) {
        console.error("❌ Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  console.log("📘 Current state:", data);

  return (
    <div className="mt-8 px-4">
      <h4 className="text-3xl text-yellow-100 mb-4">Recently Added Books</h4>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : data && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {data.map((item) => (
            <BookCard key={item._id} data={item} />
          ))}
        </div>
      ) : (
        <p className="text-white">No books found.</p>
      )}
    </div>
  );
};

export default RecentlyAdded;
