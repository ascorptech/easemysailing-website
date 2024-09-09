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
    
    <div className=" lg:ml-[4.3rem] relative flex items-center justify-center w-[90%] lg:w-[1372px]  lg:h-[280.52px] ">
      {/* Left Arrow */}
     
      <button
        onClick={scrollLeft}
        className="absolute left-1 z-10 bg-[#D9D9D9] w-[23.6px] h-[23.6px]  rounded-full shadow-md ml-1  mr-2"
      >
        &lt;
      </button>

      {/* Carousel Wrapper */}
     
       <div
        ref={card}
        className=" flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory lg:w-[1272.78px] lg:h-[202.52px]  gap-8  "
      >
        {/* Video Card 1 */}
        <div className="snap-center ">
          <div className="w-[20rem] bg-gray-500 h-[12rem] p-1  border lg:w-[294.78px] lg:h-[202.52px] rounded-md shadow-md">
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
        <div className="snap-center ">
        <div className="w-[20rem] h-[12rem] p-1  border lg:w-[294.78px] lg:h-[202.52px] rounded-md bg-gray-500 shadow-md">
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
        <div className="snap-center ">
        <div className="w-[20rem] bg-gray-500 h-[12rem] p-1  border lg:w-[294.78px] lg:h-[202.52px] rounded-md shadow-md">
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
        <div className="snap-center ">
        <div className="w-[20rem] bg-gray-500 h-[12rem] p-1  border lg:w-[294.78px] lg:h-[202.52px] rounded-md shadow-md">
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

     
       <button
        onClick={scrollRight}
        className="absolute right-1 mr-3 z-10 bg-[#D9D9D9] w-[23.6px] h-[23.6px] rounded-full shadow-md "
      >
        &gt;
      </button>
    </div>
  );
};

export default Islide;
