"use client";

import { useState } from "react";
import ConversationList from "./components/ConversationList";
import ChatWindow from "./components/ChatWindow";

type Conversation = {
  id: number;
  name: string;
  image: string;
  lastMessage: string;
};

const MessagesPage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 1,
      name: "Jane Doe",
      image: "/images/avatars/person1.jpg",
      lastMessage: "Hi, how are you?",
    },
    {
      id: 2,
      name: "John Smith",
      image: "/images/avatars/person2.jpg",
      lastMessage: "Let’s catch up soon!",
    },
    {
      id: 3,
      name: "Emma Brown",
      image: "/images/avatars/person3.jpg",
      lastMessage: "Sounds great!",
    },
  ]);

  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);

  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Messages
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Conversation List */}
        <div className="md:w-1/3">
          <ConversationList
            conversations={conversations}
            onSelect={(conversation) => setSelectedConversation(conversation)}
          />
        </div>

        {/* Chat Window */}
        <div className="md:w-2/3">
          {selectedConversation ? (
            <ChatWindow conversation={selectedConversation} />
          ) : (
            <p className="text-gray-600 dark:text-gray-300">
              Select a conversation to start chatting.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
