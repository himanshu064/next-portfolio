import React from "react";
import "./index.css";

const DotAnimatedButton = () => {
  return (
    <button
      id="home-reel-cta"
      style={{
        transform:
          "translateY(-75.8423px) translate3d(0px, 0%, 0px) rotate(0deg)",
        opacity: 1,
      }}
    >
      <span id="home-reel-cta-dot"></span>
      <span id="home-reel-cta-text">About us</span>
      <span id="home-reel-cta-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.343 8h11.314m0 0L8.673 3.016M13.657 8l-4.984 4.984"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default DotAnimatedButton;
