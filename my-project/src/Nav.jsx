import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
   
      <div className="flex items-center space-x-2">
        <img
          src="https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-1024.png"
          alt="Logo"
          className="w-10 h-10"
        />
        <span className="font-bold text-xl">MyPortfolio</span>
      </div>

      {/* Hamburger (mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      
      <div
        className={`flex-col md:flex-row md:flex md:items-center md:space-x-8 absolute md:static bg-gray-900 w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <Link
          to="/"
          className="block px-4 py-2 hover:bg-gray-700 rounded md:inline"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block px-4 py-2 hover:bg-gray-700 rounded md:inline"
          onClick={() => setIsOpen(false)}
        >
          About Me
        </Link>
        <Link
          to="/resume"
          className="block px-4 py-2 hover:bg-gray-700 rounded md:inline"
          onClick={() => setIsOpen(false)}
        >
          Resume
        </Link>
        <Link
          to="/contacts"
          className="block px-4 py-2 hover:bg-gray-700 rounded md:inline"
          onClick={() => setIsOpen(false)}
        >
          Contacts
        </Link>
      </div>
    </nav>
  );
}

export default Nav;



