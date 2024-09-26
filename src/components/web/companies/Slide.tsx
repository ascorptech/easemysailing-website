"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

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
    <div className=" lg:ml-[0rem]  relative flex items-center justify-center w-[80%] lg:w-full lg:h-[200px]  ">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-1 z-10 border-2 w-[23.6px] h-[23.6px]  rounded-full border-black ml-1  mr-2"
      >
        <MdArrowBack className="ml-[2px]"/>
      </button>

      {/* Carousel Wrapper */}
      <div
        ref={card}
        className=" lg:mr-12 w-36  lg:gap-1 gap-3 flex overflow-x-scroll lg:mt-3  mt-3 no-scrollbar scroll-smooth snap-x mx-[4rem] lg:mx-0 snap-mandatory lg:ml-[2.4rem] sm:w-full lg:h-[100px]"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex ml-[6px] lg:ml-0 lg:mb-2 h-[12rem] lg:px-1 lg:w-[250px] lg:h-[84px] sm:w-[16.9%] "
          >
            <div className="flex flex-col items-center justify-center bg-white rounded-lg border-2 shadow-md p-6 w-[129.8px] ">
              <div className="   px-2 ">
             
                <Image
                  src={card.logo}
                  width={150}
                  height={150}
                  priority
                  alt="images not find"
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
        className="absolute right-1 mr-3 z-10 border border-black w-[23.6px] h-[23.6px] rounded-full shadow-md  "
      >
        <MdArrowForward className="ml-[2px]" />
      </button>
    </div>
  );
};

export default Slide;
