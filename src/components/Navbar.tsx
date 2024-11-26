import React from 'react';
import { Bot, UserCircle } from 'lucide-react';
import { Logo } from './Logo';
import './Navbar.css';

interface NavbarProps {
  onChatbotToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onChatbotToggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Logo />
        <span className="nav-title">Arpol Services and Planning</span>
      </div>
      <div className="nav-right">
        <button className="nav-button" title="Chatbot" onClick={onChatbotToggle}>
          <Bot size={24} />
        </button>
        <button className="nav-button" title="Usuário">
          <UserCircle size={24} />
        </button>
      </div>
    </nav>
  );
};
