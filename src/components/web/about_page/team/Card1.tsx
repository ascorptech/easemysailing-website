"use client";
import React, { useRef, useEffect } from "react";
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";

interface Card {
  id: number;
  logo: string;
  company: string;
}

const Card1 = () => {
  const card = useRef<HTMLDivElement>(null);

  const cards: Card[] = [
    {
      id: 1,
      logo: "/images/captain1.jpeg",
      company: "JohanSmith",
    },
    {
      id: 2,
      logo: "/images/captain2.jpeg",
      company: "Azah",
    },
    {
      id: 3,
      logo: "/images/captain2.png",
      company: "CMA CGM Group",
    },
    {
      id: 4,
      logo: "/images/captain4.jpeg",
      company: "MEC",
    },
    {
      id: 5,
      logo: "/images/captain5.png",
      company: "AP Moller-Maersk",
    },
    {
      id: 1,
      logo: "/images/captain6.jpeg",
      company: "Maersk Line",
    },
    {
      id: 2,
      logo: "/images/captain7.jpeg",
      company: "MSC",
    },
    {
      id: 3,
      logo: "/images/captain8.jpeg",
      company: "CMA CGM Group",
    },
    {
      id: 4,
      logo: "/images/captain9.jpeg",
      company: "MEC",
    },
    {
      id: 5,
      logo: "/images/captain11.jpeg",
      company: "AP Moller-Maersk",
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
    <div className=" lg:ml-[4rem] ml-[2rem] relative flex items-center my-4 justify-center w-[1362px] h-[261px]  ">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-10 z-10 font-thin text-5xl ml-2 w-[300] mr-2 text-gray-500"
      >
        <PiCaretLeftThin />

      </button>

      {/* Carousel Wrapper */}
      <div
        ref={card}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory mx-[6.5rem]  w-[1277px] h-[261px] gap-10"
      >
        {/* Card 1 */}
        {cards.map((card) => (
          <div key={card.id} className="snap-center w-[197.58px] h-[259.77px]">
            <div className="w-[197.58px] h-[197.98px]  bg-white  rounded-full shadow-md   ">
              <img src={card.logo} alt="Maersk Line" className=" w-full h-full rounded-full " />
            </div>
            <h2
              className="text-[#00A264] text-center "
            >
              {card.company}<br/><span className="text-black text-center">founder</span>
            </h2>
          </div>
        ))}
        {/* Card 2 */}

        {/* Continue adding cards as needed */}
      </div>
      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-10 z-10 p-2 text-5xl -mr-2 text-gray-500 "
      >
        <PiCaretRightThin />

      </button>
    </div>
  );
};

export default Card1;
