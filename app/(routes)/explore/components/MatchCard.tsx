"use client";

import Image from "next/image";
import { useTheme } from "next-themes"; // Import the `useTheme` hook

type Match = {
  id: number;
  name: string;
  age: number;
  bio: string;
  image: string;
};

type MatchCardProps = {
  match: Match;
  onLike: (id: number) => void;
  onDislike: (id: number) => void;
};

const MatchCard: React.FC<MatchCardProps> = ({ match, onLike, onDislike }) => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div
      className={`p-4 rounded-lg shadow-md transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <Image
        src={match.image}
        alt={match.name}
        className="w-full h-72 object-cover rounded-lg mb-4"
        width={500}
        height={500}
      />
      <h2 className="text-lg font-bold">{`${match.name}, ${match.age}`}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{match.bio}</p>
      <div className="flex justify-between">
        <button
          onClick={() => onDislike(match.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Dislike
        </button>
        <button
          onClick={() => onLike(match.id)}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
