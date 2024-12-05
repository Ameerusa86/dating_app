"use client";

import { useState } from "react";
import MatchCard from "./components/MatchCard";

type Match = {
  id: number;
  name: string;
  age: number;
  bio: string;
  image: string;
};

const ExplorePage: React.FC = () => {
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

  const handleLike = (id: number) => {
    alert(`You liked ${matches.find((match) => match.id === id)?.name}`);
  };

  const handleDislike = (id: number) => {
    alert(`You disliked ${matches.find((match) => match.id === id)?.name}`);
  };

  return (
    <div className="container mx-auto mt-20 px-4 ">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white dark:drop-shadow-lg mb-6">
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
