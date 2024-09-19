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
    <div className="  lg:ml-[2.9rem] relative flex items-center justify-center md:lg:w-[92%]  mt-6 ">
      {/* Left Arrow */}

      <button
        onClick={scrollLeft}
        className="absolute left-1 cursor-default z-10  w-[23.6px] h-[23.6px]  ml-0 lg:ml-2  mr-2"
      >
        {/* &lt; */}
      </button>

      {/* Carousel Wrapper */}

      <div
        ref={card}
        className=" flex overflow-x-scroll   no-scrollbar scroll-smooth snap-x snap-mandatory mx-[1rem] md:mx-[2rem] md:lg:mx-[3.8rem]  gap-9  "
      >
        {/* Video Card 1 */}
        <div className="snap-center ">
          <div className="w-[20rem] h-[12rem] ml-3 sm:lg:ml-0    lg:w-[250px] lg:h-[170px]  ">
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
          <div className="w-[20rem] h-[12rem] ml-3 sm:lg:ml-0 lg:w-[250px] lg:h-[170px]  ">
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
          <div className="w-[20rem] h-[12rem] ml-3 sm:lg:ml-0    lg:w-[250px] lg:h-[170px]  ">
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
          <div className="w-[20rem] h-[12rem] ml-3 sm:lg:ml-0    lg:w-[250px] lg:h-[170px]  ">
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

        {/* Video Card 5*/}

        <div className="snap-center ">
          <div className="w-[20rem] h-[12rem] ml-3 sm:lg:ml-0    lg:w-[250px] lg:h-[170px]  ">
            <iframe
              className="w-full border-4 shadow-md rounded-lg h-full"
              src="https://www.youtube.com/embed/lm6CLMLSZBc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Continue adding more video cards as needed */}
      </div>

      {/* <button
        onClick={scrollRight}
        className="absolute right-1 mr-3 z-10 bg-[#D9D9D9] w-[23.6px] h-[23.6px] rounded-full shadow-md "
      >
        &gt;
      </button> */}
      <button
        onClick={scrollRight}
        className="absolute right-1 cursor-default md:mr-3 z-10  w-[23.6px] h-[23.6px] mr-0   "
      >
        {/* &gt; */}
      </button>
    </div>
  );
};

export default Islide;
