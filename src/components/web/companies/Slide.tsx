"use client";
import React, { useRef, useEffect } from "react";

interface Card {
  id: number;
  logo: string;
}

const Slide = () => {
  const card = useRef<HTMLDivElement>(null);

  const cards: Card[] = [
    {
      id: 1,
      logo: "/images/logo1.png",
    },
    {
      id: 2,
      logo: "/images/logo3.png",
    },
    {
      id: 3,
      logo: "/images/logo4.png",
    },
    {
      id: 4,
      logo: "/images/logo5.png",
    },
    {
      id: 5,
      logo: "/images/logo8.png",
    },
    {
      id: 1,
      logo: "/images/logo9.png",
    },
    {
      id: 2,
      logo: "/images/logo3.png",
    },
    {
      id: 3,
      logo: "/images/logo5.png",
    },
    {
      id: 4,
      logo: "/images/logo8.png",
    },
    {
      id: 5,
      logo: "/images/logo9.png",
    },
  ];

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
        {cards.map((card) => (
          <div key={card.id} className="flex-none w-full  sm:w-[16.9%] p-4">
            <div className="flex flex-col items-center bg-white rounded-lg border-2  shadow-md p-4">
              <div className="my-2 w-16 h-16">
                <img
                  src={card.logo}
                  alt="images not find"
                  className="w-full h-full "
                />
              </div>
            </div>
          </div>
        ))}

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

export default Slide;
