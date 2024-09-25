"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

interface Card {
  id: number;
  logo: string;
  company: string;
  rating: number;
  reviews: string;
  rank: string;
}

interface SlidesTrendProps {
  card1: any;
}
const SlidesTrend: React.FC<SlidesTrendProps> = ({ card1 }) => {
  // const card = useRef<HTMLDivElement>(null);

  const cards: Card[] = [
    {
      id: 1,
      logo: "/images/requiter-img/logo2.png",
      company: "Maersk Line",
      rating: 4.8,
      reviews: "5K+",
      rank: "All Ranks",
    },
    {
      id: 2,
      logo: "/images/requiter-img/logo2.png",
      company: "MSC",
      rating: 4.8,
      reviews: "5K+",
      rank: "All Ranks",
    },
    {
      id: 3,
      logo: "/images/requiter-img/logo2.png",
      company: "CMA CGM Group",
      rating: 4.8,
      reviews: "5K+",
      rank: "All Ranks",
    },
    {
      id: 4,
      logo: "/images/requiter-img/logo2.png",
      company: "MEC",
      rating: 4.8,
      reviews: "5K+",
      rank: "All Ranks",
    },
    {
      id: 5,
      logo: "/images/requiter-img/logo2.png",
      company: "AP Moller-Maersk",
      rating: 4.8,
      reviews: "5K+",
      rank: "All Ranks",
    },
    {
      id: 1,
      logo: "/images/requiter-img/logo2.png",
      company: "Maersk Line",
      rating: 4.8,
      reviews: "5K+",
      rank: "All Ranks",
    },
    {
      id: 2,
      logo: "/images/requiter-img/logo2.png",
      company: "MSC",
      rating: 4.8,
      reviews: "5K+",
      rank: "All Ranks",
    },
    {
      id: 3,
      logo: "/images/requiter-img/logo2.png",
      company: "CMA CGM Group",
      rating: 4.8,
      reviews: "5K+",
      rank: "All Ranks",
    },
    {
      id: 4,
      logo: "/images/requiter-img/logo2.png",
      company: "MEC",
      rating: 4.8,
      reviews: "5K+",
      rank: "All Ranks",
    },
    {
      id: 5,
      logo: "/images/requiter-img/logo2.png",
      company: "AP Moller-Maersk",
      rating: 4.8,
      reviews: "5K+",
      rank: "All Ranks",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between">
      <div className=" lg:mx-[1rem] sm:md:mt-0 mt-6 relative flex items-center justify-center w-[98%]  ">
        {/* {/ Carousel Wrapper /} */}
        <div
          ref={card1}
          className=" flex overflow-x-scroll w-[245px] sm:md:w-full no-scrollbar scroll-smooth snap-x snap-mandatory lg:mx-[1rem] mx-[2rem] ml-[3rem] "
        >
          {/* {/ Card 1 /} */}
          {cards.map((card) => (
            <div key={card.id} 
            className="flex-none  w-[245px] sm:w-1/6 p-4">
              <div className="flex flex-col items-center bg-white border rounded-lg shadow-md p-4">
                <div className=" mb-4 w-14 h-14 ">
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={card.logo}
                    alt="Maersk Line"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>

                <p className="text-sm font-bold ">{card.company}</p>
                <p className="text-sm text-gray-500">
                  <span className="text-yellow-500">
                    ★{" "}
                    <span className="text-black font-bold">{card.rating}</span>
                  </span>{" "}
                  | {card.reviews} reviews
                </p>
                <p className="font-semibold text-[13px]">{card.rank}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 mb-10 md:mx-[3rem]">
        <button className="h-8 bg-[#00A264] text-white py-1 px-4 rounded-lg text-sm">
          View All
        </button>
      </div>
    </div>
  );
};

export default SlidesTrend;
