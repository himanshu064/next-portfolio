"use client";

import React, { useEffect } from "react";
import "./index.css";

const CreativeButton = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll<HTMLAnchorElement>(".btn-6");

    buttons.forEach((button) => {
      const handleMouseEnter = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        const span = button.querySelector<HTMLSpanElement>("span");
        if (span) {
          span.style.top = `${relY}px`;
          span.style.left = `${relX}px`;
        }
      };

      const handleMouseOut = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        const span = button.querySelector<HTMLSpanElement>("span");
        if (span) {
          span.style.top = `${relY}px`;
          span.style.left = `${relX}px`;
        }
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseout", handleMouseOut);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseout", handleMouseOut);
      };
    });
  }, []);

  return (
    <a className="btn-6" href="#">
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
      <span></span>
    </a>
  );
};

export default CreativeButton;
