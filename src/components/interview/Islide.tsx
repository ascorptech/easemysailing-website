"use client";
import React, { useRef, useEffect } from "react";

const Islide = () => {
  const card = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (card.current) {
      card.current.scrollBy({ left: -800, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (card.current) {
      card.current.scrollBy({ left: 800, behavior: "smooth" });
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      scrollLeft();
    } else if (event.key === "ArrowRight") {
      scrollRight();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="ml-[4rem] relative flex items-center justify-center w-[90%]">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-10 z-10 p-2 bg-white border rounded-full shadow-md ml-2 mr-2"
      >
        &lt;
      </button>

      {/* Carousel Wrapper */}
      <div
        ref={card}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory mx-[6rem]"
      >
        {/* Video Card 1 */}
        <div className="snap-center p-2">
          <div className="w-[20rem] h-[12rem] p-4 bg-white border rounded-lg shadow-md">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lm6CLMLSZBc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Video Card 2 */}
        <div className="snap-center p-2">
          <div className="w-[20rem] h-[12rem] p-4 bg-white border rounded-lg shadow-md">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/TVAF5Fr_2QA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Video Card 3 */}
        <div className="snap-center p-2">
          <div className="w-[20rem] h-[12rem] p-4 bg-white border rounded-lg shadow-md">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WovyjecUtaU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Video Card 4 */}
        <div className="snap-center p-2">
          <div className="w-[20rem] h-[12rem] p-4 bg-white border rounded-lg shadow-md">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZjAqacIC_3c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Continue adding more video cards as needed */}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-10 z-10 p-2 bg-white border rounded-full shadow-md -mr-2"
      >
        &gt;
      </button>
    </div>
  );
};

export default Islide;
