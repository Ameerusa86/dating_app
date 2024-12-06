import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const LogoutComponent = () => {
  const handleGithubLogout = () => {
    signOut();
  };

  return (
    <div>
      <Button
        className="flex w-16 px-4 py-2 bg-white text-pink-500 font-bold rounded-md hover:bg-pink-800 hover:text-white"
        onClick={handleGithubLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default LogoutComponent;
