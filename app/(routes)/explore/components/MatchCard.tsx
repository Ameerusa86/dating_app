"use client";

import Image from "next/image";

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
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      {/* Profile Image */}
      <Image
        src={match.image}
        alt={match.name}
        className="w-full h-72 object-cover rounded-lg mb-4"
        width={500}
        height={500}
      />
      {/* Profile Details */}
      <h2 className="text-lg font-bold text-gray-800 dark:text-white">
        {match.name}, {match.age}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{match.bio}</p>
      {/* Actions */}
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
