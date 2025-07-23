import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth"; // adjust the path as per your folder
import { FaGripLines } from "react-icons/fa";
import logo from "../../assets/websitelogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => setMobileNavVisible(!mobileNavVisible);
  const closeMobileNav = () => setMobileNavVisible(false);

  const handleLogout = () => {
    dispatch(authActions.logout());
    closeMobileNav();
    navigate("/login");
  };

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
    { title: "All Books", link: "/all-books" },
  ];

  const authLinks = isLoggedIn
    ? [
        { title: "Cart", link: "/cart" },
        { title: "Profile", link: "/profile" },
      ]
    : [];

  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between shadow-md">
        <Link to="/" className="flex items-center">
          <img className="h-10 me-4" src={logo} alt="logo" />
          <h1 className="text-2xl font-semibold">Gyan Mandir</h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {[...navLinks, ...authLinks].map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="hover:text-blue-500 transition duration-300"
            >
              {item.title}
            </Link>
          ))}

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-1 bg-red-500 rounded hover:bg-white hover:text-zinc-800 transition"
            >
              Logout
            </button>
          )}
        </div>

        <button
          className="md:hidden text-2xl text-white hover:text-zinc-400"
          onClick={toggleMobileNav}
        >
          <FaGripLines />
        </button>
      </nav>

      {/* Mobile nav overlay */}
      {mobileNavVisible && (
        <div className="bg-zinc-900 h-screen fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center">
          {[...navLinks, ...authLinks].map((item, i) => (
            <Link
              key={i}
              to={item.link}
              onClick={closeMobileNav}
              className="text-white text-4xl font-semibold hover:text-blue-500 mb-8 transition"
            >
              {item.title}
            </Link>
          ))}

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                onClick={closeMobileNav}
                className="px-8 py-2 border border-blue-500 text-3xl text-white font-semibold rounded hover:bg-white hover:text-zinc-800 mb-6 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={closeMobileNav}
                className="px-8 py-2 bg-blue-500 rounded text-3xl font-semibold hover:bg-white hover:text-zinc-800 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-8 py-2 bg-red-500 rounded text-3xl font-semibold text-white hover:bg-white hover:text-zinc-800 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
