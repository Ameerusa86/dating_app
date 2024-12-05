"use client";

import { useState, useEffect } from "react";
import MatchCard from "./components/MatchCard";
import { useTheme } from "next-themes"; // Import the `useTheme` hook

type Match = {
  id: number;
  name: string;
  age: number;
  bio: string;
  image: string;
};

const ExplorePage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false); // Track hydration
  const { theme } = useTheme(); // Get the current theme (light/dark)

  const [matches, setMatches] = useState<Match[]>([
    {
      id: 1,
      name: "Jane Doe",
      age: 27,
      bio: "Loves hiking and photography.",
      image: "/images/avatars/person1.jpg",
    },
    {
      id: 2,
      name: "John Smith",
      age: 30,
      bio: "A foodie and tech enthusiast.",
      image: "/images/avatars/person2.jpg",
    },
    {
      id: 3,
      name: "Emma Brown",
      age: 25,
      bio: "Avid reader and coffee lover.",
      image: "/images/avatars/person3.jpg",
    },
  ]);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If not mounted, avoid rendering dark/light dependent styles
  if (!isMounted) {
    return null;
  }

  const handleLike = (id: number) => {
    alert(`You liked ${matches.find((match) => match.id === id)?.name}`);
  };

  const handleDislike = (id: number) => {
    alert(`You disliked ${matches.find((match) => match.id === id)?.name}`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1
        className={`text-3xl font-bold mb-6 ${
          theme === "dark"
            ? "text-white drop-shadow-lg"
            : "text-gray-800 drop-shadow-md"
        }`}
      >
        Explore Matches
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
            onLike={handleLike}
            onDislike={handleDislike}
          />
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
