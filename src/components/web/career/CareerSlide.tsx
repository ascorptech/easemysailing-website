
"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface Card {
  id: number;
  logo: string;
  name: string;
  job:string;
 
}
interface CareerSlideProps {
  card3: any;
}

const CareerSlide: React.FC<CareerSlideProps> = ({ card3 }) => {
  const card = useRef<HTMLDivElement>(null);

  const cards: Card[] = [
    {
      id: 1,
      logo: "/images/requiter-img/logo1.png",
      name: "Maersk Line",
      job: "captain",
    },
    {
      id: 2,
      logo: "/images/requiter-img/logo1.png",
      name: "MSC",
      job: "captain",
    },
    {
      id: 3,
      logo: "/images/requiter-img/logo1.png",
      name: "CMA CGM Group",
      job: "captain",
    },
    {
      id: 4,
      logo: "/images/requiter-img/logo1.png",
      name: "MEC",
      job: "captain",
    },
    {
      id: 5,
      logo: "/images/requiter-img/logo1.png",
      name: "AP Moller-Maersk",
      job: "captain",
    },
    {
      id: 6,
      logo: "/images/requiter-img/logo1.png",
      name: "Maersk Line",
      job: "captain",
    },
    {
      id: 7,
      logo: "/images/requiter-img/logo1.png",
      name: "MSC",
      job: "captain",
    },
    {
      id: 8,
      logo: "/images/requiter-img/logo1.png",
      name: "CMA CGM Group",
      job: "captain",
    },
    {
      id: 9,
      logo: "/images/requiter-img/logo1.png",
      name: "MEC",
      job: "captain",
    },
    {
      id: 10,
      logo: "/images/requiter-img/logo1.png",
      name: "AP Moller-Maersk",
      job: "captain",
    },
  ];



  return (
    <div className="flex flex-col items-center justify-between ">
      <div className=" lg:mx-[1rem] relative flex items-center justify-center w-[98%]  ">
        {/* Carousel Wrapper */}
        <div
          ref={card3}
          className=" flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory lg:mx-[1rem] mx-[2rem] ml-[3rem] "
        >
          {cards.map((card) => (
            <div key={card.id} className="flex-none  w-full sm:w-1/6 p-4">
              <div className="flex flex-col items-center bg-white border rounded-lg shadow-md p-4">
                <div className="mb-4 w-14 h-14">
                  <Image
                    priority
                    src={card.logo}
                    alt={card.name}
                    height={300}
                    width={300}
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <h3 className="text-md font-semibold">{card.name}</h3>
                <p className="text-sm text-gray-500">{card.job}</p>
              </div>
            </div>
          ))}

          {/* Continue adding cards as needed */}
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

export default CareerSlide;
