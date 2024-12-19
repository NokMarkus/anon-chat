import React, { useState } from 'react';
import ChatBox from './ChatBox';
import Message from './Message';

const PrivateChat: React.FC = () => {
    const [messages, setMessages] = useState<
        { sender: string; text: string; isOwnMessage: boolean }[]
    >([]);
    const [recipientId, setRecipientId] = useState('');

    const sendMessage = (message: string) => {
        setMessages((prev) => [
            ...prev,
            { sender: 'You', text: message, isOwnMessage: true },
        ]);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white">
            <div className="p-4 bg-gray-800">
                <input
                    type="text"
                    placeholder="Recipient ID"
                    value={recipientId}
                    onChange={(e) => setRecipientId(e.target.value)}
                    className="p-2 w-full rounded-md bg-gray-700 text-white focus:outline-none"
                />
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                {messages.map((msg, index) => (
                    <Message
                        key={index}
                        sender={msg.sender}
                        text={msg.text}
                        isOwnMessage={msg.isOwnMessage}
                    />
                ))}
            </div>
            <ChatBox onSendMessage={sendMessage} />
        </div>
    );
};

export default PrivateChat;