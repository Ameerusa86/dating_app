"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import LoginComponent from "@/components/Auth/Login";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 -mt-20">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
          Login to Your Account
        </h1>
        <form className="space-y-4">
          <Input type="email" placeholder="Email" className="w-full" required />
          <Input
            type="password"
            placeholder="Password"
            className="w-full"
            required
          />
          <Button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white"
          >
            Login
          </Button>
        </form>
        <div className="mt-4 flex items-center justify-center gap-4">
          <LoginComponent />
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-pink-600 hover:underline dark:text-pink-400"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
