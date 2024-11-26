import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import Chatbot from './components/Chatbot';

import './App.css';

export const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [subView, setSubView] = useState('');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const showHomeCards = !subView || subView === '';

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div className="app-container">
      <Navbar onChatbotToggle={toggleChatbot} /> {/* Passa a função toggle como prop */}
      <Chatbot isOpen={isChatbotOpen} onClose={closeChatbot} /> {/* Passa o estado e a função onClose como props */}
      <div className="content-wrapper">
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen}
          currentView={currentView}
          setCurrentView={setCurrentView}
          subView={subView}
          setSubView={setSubView}
        />
        <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          {showHomeCards && <Home />}
          {!showHomeCards && (
            <div className="subview-content">
              <h2>{subView}</h2>
              {/* Content for the selected subview will be rendered here */}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
