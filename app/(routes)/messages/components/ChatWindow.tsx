"use client";

import { useState } from "react";

type Conversation = {
  id: number;
  name: string;
  image: string;
};

type ChatWindowProps = {
  conversation: Conversation;
};

const ChatWindow: React.FC<ChatWindowProps> = ({ conversation }) => {
  const [messages, setMessages] = useState<string[]>([
    "Hi, how are you?",
    "I'm doing well, how about you?",
  ]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage.trim()]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={conversation.image}
          alt={conversation.name}
          className="w-12 h-12 rounded-full"
        />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {conversation.name}
        </h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((message, index) => (
          <p
            key={index}
            className={`${
              index % 2 === 0
                ? "text-left text-gray-800 dark:text-white"
                : "text-right text-gray-600 dark:text-gray-300"
            }`}
          >
            {message}
          </p>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
