"use client";
import React, { useRef, useEffect } from "react";
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
interface Card {
  id: number;
  logo: string;
  company: string;
  designation:string;
}

const Card = () => {
  const cardContainer = useRef<HTMLDivElement>(null);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1280 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1279, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1023, min: 992 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 991, min: 320 },
      items: 1
    },
    
  };

  const cards: Card[] = [
    {
      id: 1,
      logo: "/images/team/manish.png",
      company: "Capt. Manish Arora",
      designation:'Marine Operations Expert'
    },
    {
      id: 2,
      logo: "/images/team/prachi.png",
      company: "Prachi Rathi",
      designation:'Digital Transformation Leader'
    },
    {
      id: 3,
      logo: "/images/team/satish.png",
      company: "Dr. Satish Ojha",
      designation:'Professor, IIM-Bodh Gaya'
    },
    {
      id: 4,
      logo: "/images/team/puneet.png",
      company: "Puneet Saxena",
      designation:'Regulatory Compliance Expert'
    },
    {
      id: 5,
      logo: "/images/team/ankit.png",
      company: "Capt. Ankit Gupta",
      designation:'Master Mariner, Seafarer Welfare & Well-being'
    },
  ];

  const scrollLeft = () => {
    if (cardContainer.current) {
      cardContainer.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (cardContainer.current) {
      cardContainer.current.scrollBy({ left: 200, behavior: "smooth" });
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
      {/* <button
        onClick={scrollLeft}
        className="absolute left-2 md:left-4 lg:left-8 text-5xl text-gray-500"
      >
        <PiCaretLeftThin />
      </button> */}

      {/* Carousel Wrapper */}
      {/* <div
        ref={cardContainer}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory w-[56%] sm:w-full sm:max-w-6xl gap-3 text-center"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="snap-center flex flex-col items-center min-w-[200px] max-w-[14rem] mx-auto"
          >
            <div className="w-[200px] h-[200px] bg-white rounded-full shadow-md overflow-hidden">
              <Image
                priority
                height={5000}
                width={5000}
                src={card.logo}
                alt={card.company}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-[#00A264] mt-2 text-center">
              {card.company}
              <br />
              <span className="text-black text-sm">{card.designation}</span>
            </h2>
          </div>
        ))}
      </div> */}

      {/* Right Arrow */}
      {/* <button
        onClick={scrollRight}
        className="absolute right-2 md:right-4 lg:right-8 text-5xl text-gray-500"
      >
        <PiCaretRightThin />
      </button> */}
       <div
        // ref={cardContainer}
        className="hidden sm:flex flex-col z-10 desktop-slider"
      >
        <Carousel  infinite responsive={responsive} slidesToSlide={2} sliderClass="slideCenter" removeArrowOnDeviceType={["superLargeDesktop", "desktop"]}>
        {cards.map((card) => (
          <div
            key={card.id}
            className="snap-center flex flex-col items-center min-w-[200px] max-w-[14rem] mx-auto"
          >
            <div className="w-[200px] h-[200px] bg-white rounded-full shadow-md overflow-hidden">
              <Image
                priority
                height={5000}
                width={5000}
                src={card.logo}
                alt={card.company}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-[#00A264] mt-2 text-center">
              {card.company}
              <br />
              <span className="text-black text-sm">{card.designation}</span>
            </h2>
          </div>
        ))}
        </Carousel>
      </div>
      <div className="mobile-slider sm:flex flex-col z-10 h-20 w-60 mb-10">
          <Carousel  infinite responsive={responsive} sliderClass="slideCenter">
          {cards.map((card) => (
          <div
            key={card.id}
            className="snap-center flex flex-col items-center min-w-[200px] max-w-[14rem] mx-auto"
          >
            <div className="w-[150px] h-[150px] bg-white rounded-full shadow-md overflow-hidden">
              <Image
                priority
                height={5000}
                width={5000}
                src={card.logo}
                alt={card.company}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-[#00A264] mt-2 text-center">
              {card.company}
              <br />
              <span className="text-black text-sm">{card.designation}</span>
            </h2>
          </div>
        ))}
          </Carousel>
        </div>
    </div>
  );
};

export default Card;
