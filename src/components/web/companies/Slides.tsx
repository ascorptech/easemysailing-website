"use client";
import React, { useRef, useEffect } from "react";

const Slides = () => {
  const card = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (card.current) {
      card.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (card.current) {
      card.current.scrollBy({ left: 200, behavior: "smooth" });
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
    <div className=" lg:ml-[4rem] relative flex items-center justify-center w-[90%]  ">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-1 lg:left-10 z-10 p-2 bg-white border rounded-full shadow-md ml-1 lg:ml-2 mr-2"
      >
        &lt;
      </button>

      {/* Carousel Wrapper */}
      <div
        ref={card}
        className=" flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory lg:mx-[7rem] mx-[2rem] ml-[3rem] "
      >
        {/* Card 1 */}
        <div className="snap-center p-2">
          <div className="w-32 h-32 p-4 bg-white border rounded-lg shadow-md">
            <img src="/images/logo1.png" alt="Maersk Line" />
          </div>
        </div>
        {/* Card 2 */}
        <div className="snap-center p-2">
          <div className="w-32 h-32 p-4 bg-white border rounded-lg shadow-md">
            <img src="/images/logo2.png" alt="Evergreen" />
          </div>
        </div>
        {/* Repeat for other cards */}
        <div className="snap-center p-2">
          <div className="w-32 h-32 p-4 bg-white border rounded-lg shadow-md">
            <img src="/images/logo3.png" alt="MSC" />
          </div>
        </div>
        <div className="snap-center p-2">
          <div className="w-32 h-32 p-4 bg-white border rounded-lg shadow-md">
            <img src="/images/logo4.png" alt="CMA CGM" />
          </div>
        </div>
        {/* Continue adding cards as needed */}
        {/* Repeat for other cards */}
        <div className="snap-center p-2">
          <div className="w-32 h-32 p-4 bg-white border rounded-lg shadow-md">
            <img src="/images/logo5.png" alt="MSC" />
          </div>
        </div>
        <div className="snap-center p-2">
          <div className="w-32 h-32 p-4 bg-white border rounded-lg shadow-md">
            <img src="/images/logo1.png" alt="CMA CGM" />
          </div>
        </div>
        {/* Continue adding cards as needed */}
        {/* Repeat for other cards */}
        <div className="snap-center p-2">
          <div className="w-32 h-32 p-4 bg-white border rounded-lg shadow-md">
            <img src="/images/logo2.png" alt="MSC" />
          </div>
        </div>
        <div className="snap-center p-2">
          <div className="w-32 h-32 p-4 bg-white border rounded-lg shadow-md">
            <img src="/images/logo3.png" alt="CMA CGM" />
          </div>
        </div>
        {/* Continue adding cards as needed */}
        {/* Repeat for other cards */}
        <div className="snap-center p-2">
          <div className="w-32 h-32 p-4 bg-white border rounded-lg shadow-md">
            <img src="/images/logo4.png" alt="MSC" />
          </div>
        </div>
        <div className="snap-center p-2">
          <div className="w-32 h-32 p-4 bg-white border rounded-lg shadow-md">
            <img src="/images/logo5.png" alt="CMA CGM" />
          </div>
        </div>
        {/* Continue adding cards as needed */}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-1 lg:right-10 z-10 p-2 bg-white border rounded-full shadow-md -mr-7 lg:-mr-2"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slides;
