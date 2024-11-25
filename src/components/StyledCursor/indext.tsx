"use client";
import React, { useEffect } from "react";
import "./index.css";

const StyledCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector<HTMLDivElement>("#cursor");
    const cursorBorder =
      document.querySelector<HTMLDivElement>("#cursor-border");

    if (!cursor || !cursorBorder) return;

    const cursorPos = { x: 0, y: 0 };
    const cursorBorderPos = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      cursorPos.x = e.clientX;
      cursorPos.y = e.clientY;

      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animateCursorBorder = () => {
      const easing = 8;
      cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easing;
      cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easing;

      cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
      requestAnimationFrame(animateCursorBorder);
    };

    requestAnimationFrame(animateCursorBorder);

    const items = document.querySelectorAll<HTMLElement>("[data-cursor]");
    items.forEach((item) => {
      const handleMouseOver = () => {
        if (item.dataset.cursor === "pointer") {
          cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
          cursorBorder.style.setProperty("--size", "30px");
        } else if (item.dataset.cursor === "pointer2") {
          cursorBorder.style.backgroundColor = "white";
          cursorBorder.style.mixBlendMode = "difference";
          cursorBorder.style.setProperty("--size", "80px");
        }
      };

      const handleMouseOut = () => {
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.mixBlendMode = "unset";
        cursorBorder.style.setProperty("--size", "50px");
      };

      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseout", handleMouseOut);

      return () => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseout", handleMouseOut);
      };
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-border" />
    </>
  );
};

export default StyledCursor;
