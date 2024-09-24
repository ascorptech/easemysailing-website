"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BackgroundSlider() {
  const [currentBackground, setCurrentBackground] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalSlides = 3; // Total slides: 2 images, 1 video

  // Cycle through the background items every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Disable transition at the end of the loop for seamless looping
      setIsTransitioning(true);
      setCurrentBackground((prev) => (prev + 1) % (totalSlides + 1)); // Add one more for loop effect
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Check if we reached the end of the slides to reset the position seamlessly
  useEffect(() => {
    if (currentBackground === totalSlides) {
      setTimeout(() => {
        // Instantly go back to the first slide (no transition)
        setIsTransitioning(false);
        setCurrentBackground(0);
      }, 1); // Delay to complete the current transition before resetting
    }
  }, [currentBackground, totalSlides]);

  return (
    <div className="absolute top-0 left-0 w-full h-full  overflow-hidden z-0">
      {/* Slider container */}
      <div
        className={`absolute top-0 left-0 w-full h-full flex ${
          isTransitioning
            ? "transition-transform duration-1000 ease-in-out"
            : ""
        }`}
        style={{ transform: `translateX(-${currentBackground * 100}%)` }}
      >
        {/* First Image */}
        <div className="w-full h-full flex-shrink-0 relative">
          <Image
            src="/banner.png"
            alt="Background 1"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

      

        {/* Background Video */}
        <div className="w-full h-full flex-shrink-0 relative">
          <video
            src="/seaview.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>

        {/* Repeat First Image for Loop Effect */}
        <div className="w-full h-full flex-shrink-0 relative">
          <Image
            src="/banner.png"
            alt="Background 1"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
