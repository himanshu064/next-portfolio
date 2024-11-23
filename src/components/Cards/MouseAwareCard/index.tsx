import React, { useState } from "react";
import "./index.css";

const MouseAwareCard = () => {
  const [bgPosition, setBgPosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the card
    const y = e.clientY - rect.top; // y position within the card
    const xPercent = (x / rect.width) * 100; // Percentage of x within the card
    const yPercent = (y / rect.height) * 100; // Percentage of y within the card

    setBgPosition({ x: `${xPercent}%`, y: `${yPercent}%` });
  };

  const handleMouseLeave = () => {
    setBgPosition({ x: "50%", y: "50%" }); // Reset to center
  };

  return (
    <div
      className="card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundPosition: `${bgPosition.x} ${bgPosition.y}`,
      }}
    >
      <div className="card-content">
        <h3>Interactive Card</h3>
        <p>Move your mouse to see the background shift!</p>
      </div>
    </div>
  );
};

export default MouseAwareCard;
