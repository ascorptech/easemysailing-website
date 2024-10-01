"use client";
import React, { useRef, useEffect } from "react";
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";
import Image from "next/image";
interface Card {
  id: number;
  logo: string;
  company: string;
  designation:string;
}

const Card = () => {
  const card = useRef<HTMLDivElement>(null);

  const cards: Card[] = [
    {
      id: 1,
      logo: "/Team/manish.png",
      company: "Capt. Manish Arora",
      designation:'Marine Operations Expert'
    },
    {
      id: 2,
      logo: "/Team/prachi.png",
      company: "Prachi Rathi",
      designation:'Digital Transformation Leader'
    },
    {
      id: 3,
      logo: "/Team/satish.png",
      company: "Dr. Satish Ojha",
      designation:'Professor, IIM-Bodh Gaya'
    },
    {
      id: 4,
      logo: "/Team/archna.png",
      company: "Puneet Saxena",
      designation:'Regulatory Compliance Expert'
    },
    {
      id: 5,
      logo: "/Team/satish.png",
      company: "Capt. Pankaj Ranjan",
      designation:'Maritime Leader & Industry Expert'
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
        className="absolute left-2 md:left-4 lg:left-8 z-10 text-5xl text-gray-500"
      >
        <PiCaretLeftThin />
      </button>

      {/* Carousel Wrapper */}
      <div
        ref={card}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory w-[calc(1*190px+1*10px)] sm:w-[calc(5*220px+5*10px)] gap-3 sm:grid sm:grid-rows-1 sm:grid-cols-5 text-center"
      >
        {cards?.map((card) => (
          <div key={card.id} className="snap-center flex flex-col items-center">
            <div className="w-[197.58px] h-[197.98px] bg-white rounded-full shadow-md">
              <Image width={40}
              height={40}
              priority
                src={card.logo}
                alt={card.company}
                className="w-full h-full rounded-full"
              />
            </div>
            <h2 className="text-[#00A264] mt-2">
              {card.company}
              <br />
              <span className="text-black">{card.designation}</span>
            </h2>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 md:right-4 lg:right-8 z-10 text-5xl text-gray-500"
      >
        <PiCaretRightThin />
      </button>
    </div>
  );
};

export default Card;
