import React from "react";

export function CaughtYou() {

  return (
    <div className="caught-container">
      {/* Rick Roll background */}
      <div 
        className="rick-roll-bg"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://media.tenor.com/4YCgHLAsE3UAAAAm/rick-roll.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15,
          zIndex: -3
        }}
      />
      
      <h1 className="caught-title glitch" data-text="Caught You!!">
        Caught You!!
      </h1>
      <p className="caught-subtitle">👀 Are you a dev? Thought so!</p>

      <div className="caught-messages">
        <p>🔒 Inspecting this site won't reveal secrets.</p>
        <p>🚫 But hey… curiosity is dangerous.</p>
        <p>💻 Go touch some grass 🌱 instead of my code.</p>
        <p className="funny">Z-ANIME doesnt want you to open Devtools 😎</p>
      </div>

      <button className="caught-btn">
        🚀 Back to Safety
      </button>
    </div>
  );
}
