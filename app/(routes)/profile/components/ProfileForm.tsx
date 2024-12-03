"use client";

const ProfileForm = () => {
  return (
    <form className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Bio
        </label>
        <textarea
          placeholder="Tell us about yourself..."
          className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={4}
        ></textarea>
      </div>

      {/* Save Changes */}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Save Changes
      </button>
    </form>
  );
};

export default ProfileForm;
