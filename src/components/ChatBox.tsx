import React, { useState } from 'react';

interface ChatBoxProps {
    onSendMessage: (message: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ onSendMessage }) => {
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            onSendMessage(input);
            setInput('');
        }
    };

    return (
        <div className="chat-box">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="p-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <button
                onClick={handleSendMessage}
                className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
            >
                Send
            </button>
        </div>
    );
};

export default ChatBox;
