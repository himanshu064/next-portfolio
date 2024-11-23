import React from "react";
import "./index.css";

const PositionAwareButton = () => {
  return (
    <button id="header-right-sound-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-minus"
      >
        <path d="M5 12h14" />
      </svg>
    </button>
  );
};

export default PositionAwareButton;
