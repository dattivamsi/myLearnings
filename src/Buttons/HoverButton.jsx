import React from "react";
import './HoverButton.css'

function HoverButton() {
  return (
    <div className="button_container">
      <button>BUTTON</button>
      <button className="botder-effect">button
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <button className="hover_message"></button>
      <button className="folded_button">button</button>
    </div>
  );
}

export default HoverButton;
