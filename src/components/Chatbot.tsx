import React from 'react';
import './Chatbot.css';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="chatbot-content">
          <div className="chatbot-header">
            <img src="./src/assets/image/chatbot.png" alt="Chatbot Logo" className="chatbot-logo" />
            <button className="chatbot-close" onClick={onClose}>X</button>
          </div>
          <p>Olá! Como posso ajudar você?</p>
          <input type="text" className="chatbot-input" placeholder="Digite sua mensagem..." />
        </div>
      )}
    </div>
  );
};

export default Chatbot;


