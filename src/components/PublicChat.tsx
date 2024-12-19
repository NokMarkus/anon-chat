import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import ChatBox from './ChatBox';
import Message from './Message';

const socket: Socket = io('http://localhost:3000');

interface MessageData {
    sender: string;
    text: string;
}

const PublicChat: React.FC = () => {
    const [messages, setMessages] = useState<MessageData[]>([]);
    const [username] = useState<string>(`Anon-${Math.floor(Math.random() * 10000)}`);

    useEffect(() => {
        socket.on('chat-message', (message: MessageData) => {
            setMessages((prev) => [...prev, message]);
        });
        return () => {
            socket.off('chat-message');
        };
    }, []);

    const sendMessage = (text: string) => {
        const message = { sender: username, text };
        socket.emit('chat-message', message);
        setMessages((prev) => [...prev, { ...message, sender: `${username} (You)` }]);
    };

    return (
        <div className="flex flex-col h-full bg-black text-green-500 container">
            <div className="flex-1 overflow-y-auto p-4">
                {messages.map((msg, index) => (
                    <Message
                        key={index}
                        sender={msg.sender}
                        text={msg.text}
                        isOwnMessage={msg.sender.includes('(You)')}
                    />
                ))}
            </div>
            <ChatBox onSendMessage={sendMessage} />
        </div>
    );
};

export default PublicChat;
