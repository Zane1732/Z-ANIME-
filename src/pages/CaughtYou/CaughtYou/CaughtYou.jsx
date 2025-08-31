import React from "react";
import "./CaughtYou.css"; // custom CSS for glitch

export default function CaughtYou() {
  return (
    <div className="caught-container">
      <h1 className="caught-title glitch" data-text="Caught You!!">
        Caught You!!
      </h1>
      <p className="caught-subtitle">👀 Are you a dev? Thought so!</p>

      <div className="caught-messages">
        <p>🔒 Inspecting this site won’t reveal secrets.</p>
        <p>🚫 But hey… curiosity is dangerous.</p>
        <p>💻 Go touch some grass 🌱 instead of my code.</p>
        <p className="funny">Anikaisen doesnt want you to open Devtools 😎</p>
      </div>

      <button
        className="caught-btn"
        onClick={() => (window.location.href = "/home")}
      >
        🚀 Back to Safety
      </button>
    </div>
  );
}
