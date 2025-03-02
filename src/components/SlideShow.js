import { useState } from "react";

// Function to dynamically load images from the folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../SlideShowNew", false, /\.(png|jpe?g|svg)$/));

const SlideShow = () => {
  const [isPaused, setIsPaused] = useState(false);

  

  return (
    <div className="relative overflow-hidden w-full bg-white dark:bg-darkBg py-8 lg:py-10 border-t-2 dark:border-t-0">
      <div
        className={`flex gap-6 animate-scroll ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="h-44 md:h-56 lg:h-72 w-auto rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
