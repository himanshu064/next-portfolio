import React, { useEffect } from "react";
import "./index.css";

const NextPageScroller: React.FC = () => {
  useEffect(() => {
    let progress = 0;
    let scrollTimeout: NodeJS.Timeout | null = null;
    const progressBar = document.querySelector<HTMLDivElement>(".progress-bar");
    let hasAlerted = false;

    if (!progressBar) return;

    const handleWheel = (event: WheelEvent) => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (atBottom && event.deltaY > 0) {
        progress = Math.min(progress + 2, 100);
        progressBar.style.width = `${progress}%`;

        if (progress === 100 && !hasAlerted) {
          alert("100%");
          hasAlerted = true;
        }
      } else if (!atBottom && event.deltaY < 0 && progress > 0) {
        progress = Math.max(progress - 1, 0);
        progressBar.style.width = `${progress}%`;

        if (progress < 100) {
          hasAlerted = false;
        }
      }

      scrollTimeout = setTimeout(() => {
        const decrementInterval = setInterval(() => {
          if (progress > 0) {
            progress -= 1;
            progressBar.style.width = `${progress}%`;

            if (progress < 100) {
              hasAlerted = false;
            }
          } else {
            clearInterval(decrementInterval);
          }
        }, 90);
      }, 350);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar"></div>
    </div>
  );
};

export default NextPageScroller;
