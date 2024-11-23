import React, { useEffect } from "react";
import "./index.css";

const AnimatedImageCard: React.FC = () => {
  useEffect(() => {
    const tiles = document.querySelectorAll<HTMLDivElement>(".tile");
    tiles.forEach((tile) => {
      // Add a photo container
      const photo = document.createElement("div");
      photo.className = "photo";
      const imageUrl = tile.getAttribute("data-image");
      if (imageUrl) {
        photo.style.backgroundImage = `url(${imageUrl})`;
      }

      // Add text to show zoom level
      const txt = document.createElement("div");
      txt.className = "txt";
      const scale = tile.getAttribute("data-scale") || "1";
    //   txt.innerHTML = `<div class="x">${scale}x</div>ZOOM ON<br>HOVER`;

      tile.appendChild(photo);
      tile.appendChild(txt);

      // Tile mouse actions
      const handleMouseOver = () => {
        photo.style.transform = `scale(${scale})`;
      };

      const handleMouseOut = () => {
        photo.style.transform = "scale(1)";
      };

      const handleMouseMove = (e: MouseEvent) => {
        const rect = tile.getBoundingClientRect();
        const xPercent = ((e.pageX - rect.left) / rect.width) * 100;
        const yPercent = ((e.pageY - rect.top) / rect.height) * 100;
        photo.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      };

      tile.addEventListener("mouseover", handleMouseOver);
      tile.addEventListener("mouseout", handleMouseOut);
      tile.addEventListener("mousemove", handleMouseMove);

      // Cleanup event listeners on component unmount
      return () => {
        tile.removeEventListener("mouseover", handleMouseOver);
        tile.removeEventListener("mouseout", handleMouseOut);
        tile.removeEventListener("mousemove", handleMouseMove);
      };
    });
  }, []);

  return (
    <div className="tiles">
      <div
        className="tile"
        data-scale="1.01"
        data-image="https://picsum.photos/1200/1200/?1"
      ></div>
    </div>
  );
};

export default AnimatedImageCard;
