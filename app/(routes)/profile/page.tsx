"use client";

import ProfileForm from "./components/ProfileForm";
import UploadAvatar from "./components/UploadAvatar";

const ProfilePage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Your Profile
      </h1>

      {/* Profile Picture and Form */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <UploadAvatar />
        </div>

        {/* Profile Form */}
        <div className="flex-1">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
