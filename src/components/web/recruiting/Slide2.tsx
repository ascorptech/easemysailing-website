"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface Card {
  id: number;
  logo: string;
  company: string;
  rating: number;
  reviews: string;
}
interface Slide2Props {
  card: any;
}
const Slide2: React.FC<Slide2Props> = ({ card }) => {
  // const card = useRef<HTMLDivElement>(null);

  const cards: Card[] = [
    {
      id: 1,
      logo: "/images/requiter-img/logo1.png",
      company: "Maersk Line",
      rating: 4.8,
      reviews: "5K+",
    },
    {
      id: 2,
      logo: "/images/requiter-img/logo2.png",
      company: "MSC",
      rating: 4.8,
      reviews: "5K+",
    },
    {
      id: 3,
      logo: "/images/requiter-img/logo3.png",
      company: "CMA CGM Group",
      rating: 4.8,
      reviews: "5K+",
    },
    {
      id: 4,
      logo: "/images/requiter-img/logo4.png",
      company: "MEC",
      rating: 4.8,
      reviews: "5K+",
    },
    {
      id: 5,
      logo: "/images/requiter-img/logo5.png",
      company: "AP Moller-Maersk",
      rating: 4.8,
      reviews: "5K+",
    },
    {
      id: 1,
      logo: "/images/requiter-img/logo1.png",
      company: "Maersk Line",
      rating: 4.8,
      reviews: "5K+",
    },
    {
      id: 2,
      logo: "/images/requiter-img/logo2.png",
      company: "MSC",
      rating: 4.8,
      reviews: "5K+",
    },
    {
      id: 3,
      logo: "/images/requiter-img/logo3.png",
      company: "CMA CGM Group",
      rating: 4.8,
      reviews: "5K+",
    },
    {
      id: 4,
      logo: "/images/requiter-img/logo4.png",
      company: "MEC",
      rating: 4.8,
      reviews: "5K+",
    },
    {
      id: 5,
      logo: "/images/requiter-img/logo5.png",
      company: "AP Moller-Maersk",
      rating: 4.8,
      reviews: "5K+",
    },
  ];

  // const scrollLeft = () => {
  //   if (card.current) {
  //     card.current.scrollBy({ left: -200, behavior: "smooth" });
  //   }
  // };

  // const scrollRight = () => {
  //   if (card.current) {
  //     card.current.scrollBy({ left: 200, behavior: "smooth" });
  //   }
  // };

  // const handleKeyDown = (event: KeyboardEvent) => {
  //   if (event.key === "ArrowLeft") {
  //     scrollLeft();
  //   } else if (event.key === "ArrowRight") {
  //     scrollRight();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <div className="flex flex-col items-center justify-between ">
      <div className=" lg:mx-[1rem] relative flex items-center justify-center w-[98%]  ">
        {/* Left Arrow */}
        {/* <button
          onClick={scrollLeft}
          className="absolute left-1 lg:left-10 z-10 p-2 bg-white border rounded-full shadow-md ml-1 lg:ml-2 mr-2"
        >
          &lt;
        </button> */}

        {/* Carousel Wrapper */}
        <div
          ref={card}
          className=" flex overflow-x-scroll border-2 border-red-700 no-scrollbar scroll-smooth snap-x snap-mandatory lg:mx-[1rem] mx-[2rem] ml-[3rem] "
        >
          {cards.map((card) => (
            <div key={card.id} className="flex-none w-full sm:w-1/6 p-4">
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                <div className="mb-4 w-14 h-14">
                  <Image
                    priority
                    src={card.logo}
                    alt={card.company}
                    width={200}
                    height={200}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <h3 className="text-sm font-semibold">{card.company}</h3>
                <p className="text-sm text-gray-500">
                  <span className="text-yellow-500">
                    ★{" "}
                    <span className="text-black font-bold">{card.rating}</span>
                  </span>{" "}
                  | {card.reviews} reviews
                </p>
              </div>
            </div>
          ))}

          {/* Continue adding cards as needed */}
        </div>

        {/* Right Arrow */}
        {/* <button
          onClick={scrollRight}
          className="absolute right-1 lg:right-10 z-10 p-2 bg-white border rounded-full shadow-md -mr-7 lg:-mr-2"
        >
          &gt;
        </button> */}
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 mb-10 md:mx-[3rem]">
        <button className="h-8 bg-[#00A264] text-white py-1 px-4 rounded-lg text-sm">
          View All
        </button>
      </div>
    </div>
  );
};

export default Slide2;
