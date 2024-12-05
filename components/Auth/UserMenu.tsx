"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import LogoutComponent from "./Logout";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  name: string;
  profileImage: string;
}

const UserMenu = ({ name, profileImage }: UserMenuProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative hidden lg:block">
      {/* Trigger */}
      <Button
        variant="ghost"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:py-5 rounded-lg"
      >
        <Avatar className="w-8 h-8">
          <AvatarImage src={profileImage} alt={name} />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="hidden sm:inline text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <FaChevronDown className="text-gray-500 dark:text-gray-400 w-4 h-4" />
      </Button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10">
          <div className="py-2">
            <Link
              href="/profile"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 "
            >
              Profile
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Settings
            </Link>
            <div className="block px-4 py-2 text-white">
              <LogoutComponent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
