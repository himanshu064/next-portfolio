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
    <div className="centerer">
      <div className="wrap">
        <a className="btn-6" href="#">
          Position Aware<span></span>
        </a>
      </div>
    </div>
  );
};

export default CreativeButton;
