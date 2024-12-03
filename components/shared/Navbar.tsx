"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegMoon, FaSun, FaBell } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // For theme toggle
  const [isMounted, setIsMounted] = useState(false); // To check if the component is mounted
  const isAuthenticated = false; // Replace with actual auth check
  const user = { name: "Ameer", profileImage: "/images/user-avatar.png" }; // Replace with actual user data

  // Ensure the component is mounted before rendering client-dependent elements
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-lg font-bold text-gray-800 dark:text-white">
          <Link href="/">DatingApp</Link>
        </div>

        {/* Search Bar (Hidden on small screens) */}
        <div className="hidden md:flex w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Notifications */}
          <button
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            aria-label="Notifications"
          >
            <FaBell className="w-5 h-5" />
          </button>

          {/* Theme Toggle */}
          {isMounted && (
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <FaRegMoon className="w-5 h-5" />
              ) : (
                <FaSun className="w-5 h-5" />
              )}
            </button>
          )}

          {/* User Auth Buttons */}
          {isMounted && isAuthenticated ? (
            <div className="relative">
              <Image
                src={user.profileImage}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
              />
            </div>
          ) : (
            isMounted && (
              <>
                <Link
                  href="/auth/login"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Sign Up
                </Link>
              </>
            )
          )}
        </div>

        {/* Mobile Section */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Notifications */}
          <button
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            aria-label="Notifications"
          >
            <FaBell className="w-5 h-5" />
          </button>

          {/* Theme Toggle */}
          {isMounted && (
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <FaRegMoon className="w-5 h-5" />
              ) : (
                <FaSun className="w-5 h-5" />
              )}
            </button>
          )}

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 dark:text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <IoClose className="w-5 h-5" />
            ) : (
              <RxHamburgerMenu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-3">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-600 dark:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/profile"
            className="block px-4 py-2 text-gray-600 dark:text-gray-300"
          >
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
