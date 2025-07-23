// src/components/Layout/Layout.jsx
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
      <Navbar />
      <main className="flex-grow px-4 md:px-8 py-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
