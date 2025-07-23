import React from "react";
import logo from "../../assets/imagebook-removebg-preview.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-center px-6 lg:px-16 py-10">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-100 leading-tight">
          Welcome to <span className="text-yellow-300">Gyan Mandir</span>
        </h1>
        <p className="mt-6 text-base md:text-lg lg:text-xl text-zinc-300 max-w-md">
          From timeless classics to modern masterpieces, explore a collection
          curated to spark curiosity, inspire minds, and nurture the lifelong
          learner in you.
        </p>
        <Link
          to="/all-books"
          className="mt-8 bg-yellow-100 text-zinc-900 font-semibold px-8 py-3 text-lg rounded-full hover:bg-yellow-200 transition"
        >
          📚 Discover Books
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={logo}
          alt="Bookstore illustration"
          className="w-[80%] md:w-[90%] lg:w-[600px] xl:w-[700px] max-h-[80vh] md:max-h-[100vh] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
