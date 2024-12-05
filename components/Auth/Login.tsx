"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginComponent: React.FC = () => {
  const session = useSession();
  const router = useRouter();

  // Handle redirect after login
  useEffect(() => {
    if (session.data?.user) {
      router.push("/");
    }
  }, [session, router]);

  // General function to handle provider login
  const handleSignIn = (provider: "github" | "google") => {
    signIn(provider);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        onClick={() => handleSignIn("github")}
        variant="outline"
        className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <FaGithub className="w-5 h-5" />
      </Button>
      <Button
        onClick={() => handleSignIn("google")}
        variant="outline"
        className="text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <FaGoogle className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default LoginComponent;
