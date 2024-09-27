"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

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
      card.current.scrollBy({ left: -147, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (card.current) {
      card.current.scrollBy({ left: 147, behavior: "smooth" });
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
    <div className=" lg:ml-[0rem] relative flex items-center justify-center w-[100%] lg:w-full lg:h-[140px] sm:md:h-[140px] md:w-[95%] md:ml-5  ">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute top-[115px] sm:md:top-[70px] left-8 z-1 w-[23.6px] h-[23.6px]   mr-2"
      >
<IoArrowBackCircleOutline />
</button>

      {/* Carousel Wrapper */}
      <div
        ref={card}
        className=" lg:mr-12 w-36  lg:gap-1 gap-3 flex overflow-x-scroll lg:mt-3  mt-3 no-scrollbar scroll-smooth snap-x mx-[4rem] lg:mx-0 snap-mandatory lg:ml-[2.4rem] sm:w-full lg:w-[84.5%] lg:h-[115px]"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex ml-[6px] md:h-[130px] lg:ml-0 lg:mb-2 h-[12rem] lg:px-1 lg:w-[250px] lg:h-[84px] sm:w-[16.9%] mt-5"
          >
            <div className="flex flex-col items-center justify-center bg-white rounded-lg border-2 shadow-md p-6 w-[129.8px] ">
              <div className="   px-2 ">
             
                <Image
                  src={card.logo}
                  width={250}
                  height={250}
                  priority
                  alt="images not find"
                  className=""
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
        className="absolute right-8 mr-3 top-[115px] z-10 sm:md:top-[70px] w-[23.6px] h-[23.6px]   "
      >
<IoArrowForwardCircleOutline />
</button>
    </div>
  );
};

export default Slide;
