import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const LogoutComponent = () => {
  const handleGithubLogout = () => {
    signOut();
  };

  return (
    <div>
      <Button onClick={handleGithubLogout}>Logout</Button>
    </div>
  );
};

export default LogoutComponent;
