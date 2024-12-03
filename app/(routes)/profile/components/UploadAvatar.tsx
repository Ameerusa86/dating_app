"use client";

import Images from "@/public/images";
import Image from "next/image";
import { useState } from "react";

const UploadAvatar = () => {
  const [image, setImage] = useState("/images/default-avatar.png");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setImage(reader.result.toString());
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="text-center">
      <Image
        src={Images.DefaultAvatar}
        alt="Profile Avatar"
        className="w-32 h-32 rounded-full border border-gray-300 dark:border-gray-700 mb-4"
      />
      <label
        htmlFor="upload-avatar"
        className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
      >
        Upload Photo
      </label>
      <input
        type="file"
        id="upload-avatar"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default UploadAvatar;
