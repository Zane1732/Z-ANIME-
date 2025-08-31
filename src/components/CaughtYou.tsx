
import React, { useState, useEffect } from "react";

export function CaughtYou() {
  const [typedText, setTypedText] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const messages = [
    "👀 Are you a dev? Thought so!",
    "🔒 Inspecting this site won't reveal secrets.",
    "🚫 But hey… curiosity is dangerous.",
    "💻 Go touch some grass 🌱 instead of my code.",
    "Anikaisen doesnt want you to open Devtools 😎"
  ];

  useEffect(() => {
    if (!isTyping) return;

    const currentMessage = messages[currentMessageIndex];
    
    if (typedText.length < currentMessage.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentMessage.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (currentMessageIndex < messages.length - 1) {
          setCurrentMessageIndex(currentMessageIndex + 1);
          setTypedText("");
        } else {
          setIsTyping(false);
        }
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentMessageIndex, isTyping, messages]);

  return (
    <div className="caught-container">
      {/* Rick Roll background - smaller */}
      <div 
        className="rick-roll-bg"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          width: '200px',
          height: '200px',
          transform: 'translate(-50%, -50%)',
          backgroundImage: 'url(https://media.tenor.com/4YCgHLAsE3UAAAAm/rick-roll.webp)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15,
          zIndex: -3,
          borderRadius: '15px'
        }}
      />
      
      <h1 className="caught-title glitch" data-text="Caught You!!">
        Caught You!!
      </h1>

      <div className="caught-messages typing-container">
        <p className="typing-text">
          {typedText}
          {isTyping && <span className="cursor">|</span>}
        </p>
        {!isTyping && (
          <div className="all-messages">
            {messages.map((message, index) => (
              <p key={index} className="fade-in-message">
                {message}
              </p>
            ))}
          </div>
        )}
      </div>

      <button className="caught-btn">
        🚀 Back to Safety
      </button>
    </div>
  );
}
