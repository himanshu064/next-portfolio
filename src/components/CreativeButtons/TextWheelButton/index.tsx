import React from "react";
import "./index.css";

const TextWheelButton = () => {
  return (
    <button className="btn arrow-btn">
      <div>
        <span className="btn-text-one">Hover Me</span>
        <span className="btn-text-two">Hover Me</span>
      </div>
      <div className="arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right "
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default TextWheelButton;
