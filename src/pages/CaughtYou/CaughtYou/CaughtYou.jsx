
import React, { useState, useEffect } from 'react';
import './CaughtYou.css';

export function CaughtYou() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showAllMessages, setShowAllMessages] = useState(false);

  const messages = [
    '🔒 Inspecting this site won\'t reveal secrets.',
    '🚫 But hey… curiosity is dangerous.',
    '💻 Go touch some grass 🌱 instead of my code.',
    '😎 Z-ANIME doesn\'t want you to open Devtools'
  ];

  useEffect(() => {
    if (messageIndex < messages.length) {
      if (charIndex < messages[messageIndex].length) {
        const timer = setTimeout(() => {
          setCurrentMessage(prev => prev + messages[messageIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setMessageIndex(prev => prev + 1);
          setCharIndex(0);
          setCurrentMessage('');
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else {
      setShowAllMessages(true);
    }
  }, [charIndex, messageIndex, messages]);

  return (
    <div className="caught-container">
      {/* Rick Roll background */}
      <div className="rick-roll-bg" />
      
      <h1 className="caught-title glitch" data-text="Caught You!!">
        Caught You!!
      </h1>
      <p className="caught-subtitle">👀 Are you a dev? Thought so!</p>

      <div className="typing-container">
        {!showAllMessages ? (
          <div className="typing-text">
            {currentMessage}
            <span className="cursor">|</span>
          </div>
        ) : (
          <div className="all-messages">
            {messages.map((message, index) => (
              <p key={index} className="fade-in-message">
                {message}
              </p>
            ))}
          </div>
        )}
      </div>

      <button className="caught-btn" onClick={() => window.location.reload()}>
        🚀 Back to Safety
      </button>
    </div>
  );
}

