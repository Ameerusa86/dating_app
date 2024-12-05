"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const RegisterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 -mt-20">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
          Create Your Account
        </h1>
        <form className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            className="w-full"
            required
          />
          <Input type="email" placeholder="Email" className="w-full" required />
          <Input
            type="password"
            placeholder="Password"
            className="w-full"
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            className="w-full"
            required
          />
          <Button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white"
          >
            Register
          </Button>
        </form>
        <div className="mt-4 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FcGoogle className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FaGithub className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-pink-600 hover:underline dark:text-pink-400"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
