import React from "react";

interface MessageProps {
  sender: string;
  text: string;
  isOwnMessage?: boolean;
}

const Message: React.FC<MessageProps> = ({ sender, text, isOwnMessage }) => {
  return (
    <div
      className={`flex ${isOwnMessage ? "justify-end" : "justify-start"} mb-2`}
    >
      <div
        className={`message ${isOwnMessage ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-200"}`}
      >
        <p className="sender">{sender}</p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default Message;
