"use client";
import React, { useRef, useEffect } from "react";

const Card = () => {
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
    <div className="ml-[8rem] relative flex items-center my-4 justify-center w-[80%] ">
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
        {/* Card 1 */}
        <div className="snap-center p-2">
          <div className="w-40 h-40 p-2 bg-white border border-black rounded-full shadow-md">
            <img
              src="/images/maersk.png"
              alt="Maersk Line"
              className="rounded-full"
            />
          </div>
        </div>
        {/* Card 2 */}
        <div className="snap-center p-2">
          <div className="w-40 h-40 p-2 bg-white border border-black rounded-full shadow-md">
            <img
              src="/images/evergreen.png"
              alt="Evergreen"
              className="rounded-full"
            />
          </div>
        </div>
        {/* Repeat for other cards */}
        <div className="snap-center p-2">
          <div className="w-40 h-40 p-2 bg-white border border-black rounded-full shadow-md">
            <img src="/images/msc.png" alt="MSC" className="rounded-full" />
          </div>
        </div>
        <div className="snap-center p-2">
          <div className="w-40 h-40 p-2 bg-white border border-black rounded-full shadow-md">
            <img
              src="/images/cma-cgm.png"
              alt="CMA CGM"
              className="rounded-full"
            />
          </div>
        </div>
        {/* Continue adding cards as needed */}
        <div className="snap-center p-2">
          <div className="w-40 h-40 p-2 bg-white border border-black rounded-full shadow-md">
            <img src="/images/msc.png" alt="MSC" className="rounded-full" />
          </div>
        </div>
        <div className="snap-center p-2">
          <div className="w-40 h-40 p-2 bg-white border border-black rounded-full shadow-md">
            <img
              src="/images/cma-cgm.png"
              alt="CMA CGM"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="snap-center p-2">
          <div className="w-40 h-40 p-2 bg-white border border-black rounded-full shadow-md">
            <img src="/images/msc.png" alt="MSC" className="rounded-full" />
          </div>
        </div>
        <div className="snap-center p-2">
          <div className="w-40 h-40 p-2 bg-white border border-black rounded-full shadow-md">
            <img src="/images/msc.png" alt="MSC" className="rounded-full" />
          </div>
        </div>
        <div className="snap-center p-2">
          <div className="w-40 h-40 p-2 bg-white border border-black rounded-full shadow-md">
            <img src="/images/msc.png" alt="MSC" className="rounded-full" />
          </div>
        </div>
        {/* Continue adding cards as needed */}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-10 z-10 p-2 bg-white border rounded-full shadow-md -mr-2"
      >
        &gt;
      <button/>
    </div>
  );
};

export default Card;
