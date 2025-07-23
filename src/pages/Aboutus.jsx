import React from "react";
import { FaAward, FaUsers, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="text-gray-800 bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Discover our mission, our journey, and how we’re revolutionizing the
          way you read and learn.
        </p>
      </section>

      {/* Vision */}
      <section className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">📌 Our Vision</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          We aim to make books and learning accessible, affordable, and engaging
          for every student and reader across the globe.
        </p>
      </section>

      {/* Why We Started */}
      <section className="bg-gray-100 py-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Why We Started</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          The idea sparked when we saw students struggling to find good books
          and resources. We wanted to bridge this gap with a user-friendly
          platform.
        </p>
        <img
          src="https://cdn.dribbble.com/users/324310/screenshots/6402311/reader.gif"
          alt="Why we started"
          className="w-full max-w-lg mx-auto mt-8 rounded-lg shadow-lg"
        />
      </section>

      {/* How We Help You */}
      <section className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🙌 How We Help You</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-700">
          Whether you're a curious reader or a competitive aspirant, we provide:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaLightbulb className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold">Smart Recommendations</h3>
            <p className="text-gray-600 mt-2">
              Get personalized book suggestions based on your interests.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaUsers className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold">Community Driven</h3>
            <p className="text-gray-600 mt-2">
              Connect with like-minded readers and learn together.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaAward className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold">Top Quality Content</h3>
            <p className="text-gray-600 mt-2">
              Access handpicked, reviewed, and up-to-date material.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-50 py-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🏆 Achievements So Far</h2>
        <div className="flex flex-wrap justify-center gap-10 mt-8">
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">20K+</h3>
            <p className="text-gray-700">Books Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">10K+</h3>
            <p className="text-gray-700">Happy Users</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">1M+</h3>
            <p className="text-gray-700">Pages Read</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">💬 Appreciations</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-gray-700 italic">
              "A brilliant initiative! Helped me prepare for exams with the
              right resources."
            </p>
            <h4 className="mt-4 font-semibold">- Riya Sharma, DU Student</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="text-gray-700 italic">
              "My child loves the clean interface and reads every day now!"
            </p>
            <h4 className="mt-4 font-semibold">- Mr. Abhishek Singh, Parent</h4>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 text-white py-10 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Join Our Community Today 🚀</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Be a part of our mission to make learning joyful, accessible, and
          affordable!
        </p>
        <button className="bg-white text-indigo-600 font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300">
          Explore Now
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
