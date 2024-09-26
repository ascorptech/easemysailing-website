"use client";
import React, { useRef } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  id: string;
  date: string;
  title: string;
  logoSrc: string;
}

const ArticlesCard = () => {
  const articles: ArticleProps[] = [
    {
      id: "1",
      logoSrc: "/images/article1.png",
      date: "27-01-2024",
      title: "Lorem Ip sum is simply dummy text of the printing.",
    },
    {
      id: "2",
      logoSrc: "/images/r2.png",
      date: "27-01-2024",
      title: "Lorem Ip sum is simply dummy text of the printing.",
    },
    {
      id: "3",
      logoSrc: "/images/article3.png",
      date: "27-01-2024",
      title: "Lorem Ip sum is simply dummy text of the printing.",
    },
    {
      id: "4",
      logoSrc: "/images/article4.png",
      date: "27-01-2024",
      title: "Lorem Ip sum is simply dummy text of the printing.",
    },
   
  ];

  const cardRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({ left: -292, behavior: "smooth" }); // Adjust for 4 cards
    }
  };

  const scrollRight = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({ left: 292, behavior: "smooth" }); // Adjust for 4 cards
    }
  };

  return (
    <div className="relative overflow-x-hidden  mt-7 pb-4 lg:pb-0 flex justify-center items-center lg:items-center w-full lg:w-[83%] 2xl:w-[85%] md:w-[94%] px-1 sm:px-0 lg:px-0 lg:mx-[110px] ">
      {/* Left Scroll Button */}
      <button 
        onClick={scrollLeft} 
        className="absolute left-0 top-28  md:hidden bg-white p-[5px] rounded-full shadow-md"
        aria-label="Scroll Left"
      >
        <IoMdArrowBack />
      </button>

      <div
        ref={cardRef}
        className="w-[289px] sm:w-full sm:ml-0 flex overflow-x-scroll  no-scrollbar scroll-smooth snap-x snap-mandatory gap-1 lg:gap-[33px] 2xl:space-x-20"

>
        {articles.map((card) => (
          <div
          className="w-[289px]  sm:w-[16.4rem] lg:w-[19.3rem] 2xl:w-[22rem] border rounded md:mb-7 shadow-lg "
            key={card.id}
          >
            <div className="relative  w-full lg:h-[12rem]">
              <Image
                priority
                className="w-full h-full "
                width={500}
                height={50}
                src={card.logoSrc}
                alt="Article Image"
              />
              <div className="absolute mt-[-1.5rem] sm:mt-[-2.5rem] bg-[#00A264] text-white lg:font-semibold px-2 py-1 lg:px-3 lg:py-2">
                <h3 className=" text-xs lg:text-base ">{card.date}</h3>
              </div>
            </div>
            <div className="px-2 sm:px-2 bg-white py-2">
            <p className="text-black text-justify text-[10px] lg:text-[10px] ">
            {card?.title} {card?.title}{" "}
            <Link href="#" className="text-[#00A264]">
                  Read More
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button 
        onClick={scrollRight} 
        className="absolute right-0 top-28 md:hidden bg-white p-[5px] rounded-full shadow-md"

        // className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        aria-label="Scroll Right"
      >
        <IoMdArrowForward />
      </button>
    </div>
  );
};

export default ArticlesCard;

