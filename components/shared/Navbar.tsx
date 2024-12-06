"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegMoon, FaSun, FaBell, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import links from "@/constants/NavLinks";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import UserMenu from "../Auth/UserMenu";
import LogoutComponent from "../Auth/Logout";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // To handle hydration issue
  const { theme, setTheme } = useTheme();
  const session = useSession();

  // Handle hydration mismatch
  useEffect(() => {
    setIsMounted(true); // Ensures hydration sync
  }, []);

  if (!isMounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <>
      <nav className="bg-gradient-to-r from-pink-500 to-red-500 fixed top-0 w-full z-50 shadow-lg">
        <div className="mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="text-xl font-extrabold text-white">
            <Link href="/">💖 DatingApp</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-medium hover:text-yellow-300 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons and User Info */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              className="text-white hover:text-yellow-300 transition duration-300"
              aria-label="Search"
              onClick={() => setIsSearchDialogOpen(true)}
            >
              <FaSearch className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button
              className="text-white hover:text-yellow-300 transition duration-300"
              aria-label="Notifications"
            >
              <FaBell className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-white hover:text-yellow-300 transition duration-300"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaRegMoon className="w-5 h-5" />
              )}
            </button>

            {/* Login/Logout */}
            {session.data?.user ? (
              <UserMenu
                name={session.data.user.name ?? "User"}
                profileImage={
                  session.data.user.image ?? "/images/default-avatar.png"
                }
              />
            ) : (
              <Link
                href="/auth/login"
                className="hidden lg:flex px-4 py-2 bg-white text-pink-700 font-bold rounded-md hover:bg-yellow-300 hover:text-pink-900 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <RxHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-pink-600 py-3 space-y-2 z-50">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-white hover:bg-pink-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {!session.data?.user ? (
              <Link
                href="/auth/login"
                className="block w-16 ml-4 px-4 py-2 bg-white text-pink-500 font-bold rounded-md hover:bg-pink-800 hover:text-white"
              >
                Login
              </Link>
            ) : (
              <div className="ml-4">
                <LogoutComponent />
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Search Dialog */}
      <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
        <DialogContent className="bg-white text-black rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-pink-500">
              Search
            </DialogTitle>
          </DialogHeader>
          <Input type="text" placeholder="Search..." className="w-full mb-4" />
          <Button
            className="w-full bg-pink-500 text-white hover:bg-red-500"
            onClick={() => setIsSearchDialogOpen(false)}
          >
            Search
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
