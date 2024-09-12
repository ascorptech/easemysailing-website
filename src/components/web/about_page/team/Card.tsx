"use client";
import React, { useRef, useEffect } from "react";
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";

interface Card {
  id: number;
  logo: string;
  company: string;
}

const Card = () => {
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
      id: 6,
      logo: "/images/captain6.jpeg",
      company: "Maersk Line",
    },
    {
      id: 7,
      logo: "/images/captain7.jpeg",
      company: "MSC",
    },
    {
      id: 8,
      logo: "/images/captain8.jpeg",
      company: "CMA CGM Group",
    },
    {
      id: 9,
      logo: "/images/captain9.jpeg",
      company: "MEC",
    },
    {
      id: 10,
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
    <div className="relative flex items-center justify-center mx-2 md:mx-4 lg:mx-0 my-4">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 md:left-4 lg:left-10 z-10 text-5xl text-gray-500"
      >
        <PiCaretLeftThin />
      </button>

      {/* Carousel Wrapper */}
      <div
        ref={card}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory w-[calc(5*198px+5*10px)] gap-5 text-center"
      >
        {cards.map((card) => (
          <div key={card.id} className="snap-center flex flex-col items-center">
            <div className="w-[197.58px] h-[197.98px] bg-white rounded-full shadow-md">
              <img
                src={card.logo}
                alt={card.company}
                className="w-full h-full rounded-full"
              />
            </div>
            <h2 className="text-[#00A264] mt-2">
              {card.company}
              <br />
              <span className="text-black">Funder</span>
            </h2>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 md:right-4 lg:right-10 z-10 text-5xl text-gray-500"
      >
        <PiCaretRightThin />
      </button>
    </div>
  );
};

export default Card;
