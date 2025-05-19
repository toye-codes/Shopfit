import React, { useEffect, useState } from "react";



const backgroundImage = [
  { name: "image_1", link: "https://i.ibb.co/kskgW88f/IMG-1308.png" },
  { name: "image_2", link: "https://i.ibb.co/sc42Qf6/IMG-1307.png" },
  { name: "image_3", link: "https://i.ibb.co/k2Qq8sX0/IMG-1298.png" },
];

const getCenteredImages = (images, currentIndex, visibleCount) => {
  const total = images.length;
  const half = Math.floor(visibleCount / 2);
  const result = [];
  for (let i = -half; i <= half; i++) {
    const index = (currentIndex + i + total) % total;
    result.push(images[index]);
  }
  return result;
};

const HeroPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5; // Always odd for centered layout

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImage.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const centeredImages = getCenteredImages(
    backgroundImage,
    currentIndex,
    visibleCount
  );

  return (
    <div className="relative w-full bg-gradient-to-r from-[#8b7b68] via-[#b8a68a] to-[#d6bfa2] py-20 md:py-24 overflow-hidden">
      {/* Background Scrolling Images */}
      <div className="absolute inset-0 flex justify-center items-end z-0 overflow-hidden pointer-events-none">
        <div className="flex gap-2 transition-transform duration-[7000ms] ease-in">
          {centeredImages.map((img, index) => (
            <img
              key={`${img.name}_${index}`}
              src={img.link}
              alt={img.name}
              className={`w-auto h-[300px] md:h-[380px] object-contain transition-all duration-1000 ease-out ${
                index === Math.floor(visibleCount / 2)
                  ? "scale-110 z-10 opacity-100"
                  : "opacity-60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text & CTA */}
      <div className="relative z-10 flex flex-col items-center md:items-start px-4 md:px-24 text-white text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Discover Quality <br /> That Speaks for Itself
        </h1>
        <p className="text-xs md:text-xl mt-3 text-neutral-100 max-w-xl">
          From everyday essentials to standout pieces, shop curated styles that
          elevate your lifestyle — all in one place.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#8b7b68] hover:bg-[#b8a68a] text-white rounded-xl font-medium transition duration-300">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
