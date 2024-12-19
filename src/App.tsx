import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import PrivateChat from "./components/PrivateChat";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-900 text-white">
        <header className="flex items-center justify-between p-4 bg-gray-800">
          <h1 className="text-xl font-bold text-blue-400">Anonymous Chat</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/chat" className="hover:text-blue-400 transition-colors">
              Public Chat
            </Link>
            <Link
              to="/private"
              className="hover:text-blue-400 transition-colors"
            >
              Private Chat
            </Link>
          </nav>
        </header>
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/private" element={<PrivateChat />} />
          </Routes>
        </main>
        <footer className="p-4 bg-gray-800 text-center text-sm">
          Built with ❤️ by Markus
        </footer>
      </div>
    </Router>
  );
};

export default App;
