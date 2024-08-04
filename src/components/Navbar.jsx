// src/components/Navbar.js

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 font-nunito">
      <div className="xl:px-20 xl:py-4 px-6 py-4 flex justify-between items-center text-gray-600">
        <div className="flex items-center">
          <h1 className="text-blue-500 font-black text-2xl md:text-3xl">
            Koding<span className="text-gray-600">Kidz</span>
          </h1>
        </div>
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-500 transition-all duration-300"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/program"
                className="text-gray-600 hover:text-blue-500 transition-all duration-300"
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                to="/promo"
                className="text-gray-600 hover:text-blue-500 transition-all duration-300"
              >
                Promo
              </Link>
            </li>
            <li>
              <Link
                to="/layanan"
                className="text-gray-600 hover:text-blue-500 transition-all duration-300"
              >
                Layanan
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-gray-600 text-xl hover:text-blue-500 transition-colors duration-300"
          />
          <Link
            to="/daftar"
            className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full text-center block"
          >
            Daftar
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-600 text-xl"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex flex-col p-4">
            {/* Close Button */}
            <button
              className="self-end text-gray-600 text-xl"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            {/* Logo for Mobile View */}
            <div className="flex items-center mb-4">
              <h1 className="text-blue-500 font-bold text-3xl">
                Koding<span className="text-gray-600">Kidz</span>
              </h1>
            </div>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-500 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/program"
                  className="text-gray-600 hover:text-blue-500 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Program
                </Link>
              </li>
              <li>
                <Link
                  to="/promo"
                  className="text-gray-600 hover:text-blue-500 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Promo
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan"
                  className="text-gray-600 hover:text-blue-500 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Layanan
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                to="/daftar"
                className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full text-center block"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
