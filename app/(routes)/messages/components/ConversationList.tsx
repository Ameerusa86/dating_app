"use client";

type Conversation = {
  id: number;
  name: string;
  image: string;
  lastMessage: string;
};

type ConversationListProps = {
  conversations: Conversation[];
  onSelect: (conversation: Conversation) => void;
};

const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  onSelect,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 space-y-4">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          onClick={() => onSelect(conversation)}
          className="flex items-center gap-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-lg"
        >
          <img
            src={conversation.image}
            alt={conversation.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              {conversation.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {conversation.lastMessage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
