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
    <div className="overflow-x-scroll  no-scrollbar mt-7 mb-3 lg:items-center  scroll-smooth snap-mandatory space-x-0 lg:space-x-8  flex flex-col sm:flex-row w-full lg:w-[83%] md:w-[94%] px-1 sm:px-0 lg:px-0 lg:mx-[110px] mx-auto">
      {/* Carousel Wrapper */}

      <div
        ref={card}
        className=" flex overflow-x-scroll  no-scrollbar scroll-smooth snap-x snap-mandatory  gap-7 "
      >
        {/* Video Card 1 */}
        <div className="snap-center ">
          <div className="w-[20rem] h-[15rem] sm:lg:ml-0    lg:w-[18rem] lg:h-[220px]  ">
            <iframe
              className="w-full border-4 shadow-md rounded-lg h-full"
              src="https://www.youtube.com/embed/afKjXPA5f0E"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Video Card 2 */}
        <div className="snap-center ">
          <div className="w-[20rem] h-[12rem]  lg:w-[18rem] lg:h-[220px]  ">
            <iframe
              className="w-full border-4 shadow-md rounded-lg h-full"
              src="https://www.youtube.com/embed/roz9sXFkTuE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Video Card 3 */}
        <div className="snap-center ">
          <div className="w-[20rem] h-[12rem]     lg:w-[18rem] lg:h-[220px] ">
            <iframe
              className="w-full border-4 shadow-md rounded-lg h-full"
              src="https://www.youtube.com/embed/Tl4bQBfOtbg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Video Card 4 */}
        <div className="snap-center ">
          <div className="w-[20rem] h-[12rem]   lg:w-[18rem] lg:h-[220px]  ">
            <iframe
              className="w-full border-4 shadow-md rounded-lg h-full"
              src="https://www.youtube.com/embed/VYslt8bc-4Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Islide;
