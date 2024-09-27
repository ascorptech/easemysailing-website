"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ClientSection: React.FC = () => {
  const clientCards = [
    {
      text: "An exceptional platform for seafarers! It’s streamlined, user-friendly, and genuinely cares about our welfare and career growth.",
      name: "SALA COLINTON",
      role: "MANAGER",
      imageSrc: "/images/ellipse.png",
    },
    {
      text: "EaseMySailing is built by seafarers who truly understand and care about us. We deserve respect and recognition, and this platform envisions just that.",
      name: "ALEX JHON MARTINN",
      role: "FIRST CAPTAIN",
      imageSrc: "/images/ellipse.png",
    },
    {
      text: "EaseMySailing has redefined how seafarers connect with recruiters. It’s intuitive and respectful of our hard work. It’s the go-to platform for Seafarers.",
      name: "Danny Jhonas",
      role: "SKIPPER",
      imageSrc: "/images/ellipse.png",
    },
    {
      text: "We deserve respect and recognition, and this platform envisions just that.",
      name: "ALEX JHON MARTINN",
      role: "MANAGER",
      imageSrc: "/images/ellipse.png",
    },
    {
      text: "It’s streamlined, user-friendly, and genuinely cares about our welfare and career growth.",
      name: "SALA COLINTON",
      role: "FIRST CAPTAIN",
      imageSrc: "/images/ellipse.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = clientCards.length;

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="default-carousel" className="relative w-full bg-[#D9F3EA]" data-carousel="slide">
      <div className="text-[21px] leading-[35px] font-bold sm:md:text-4xl lg:ml-[0rem] mt-10">
        <h6 className="text-center text-sm lg:text-base">TESTIMONIALS</h6>
        <h2 className="text-[20px] leading-[20px] sm:text-[28px] lg:text-[45px] sm:leading-[54px] font-bold text-center">
          SEAFARER'S VOICES FROM <span className="text-[#00A264]">THE SEA</span> 
        </h2>
      </div>
      {/* Carousel wrapper */}
      <div className="relative  rounded-lg lg:h-[28rem] flex justify-center items-center h-[26rem] w-full mx-auto mt-14 mb-10 lg:w-[80%] overflow-hidden">
        {clientCards.map((card, index) => (
          <div
            key={index}
            className={`transition-transform duration-900 bg-white p-6 lg:w-[300px] lg:h-[430px] w-[280px] h-[400px] rounded-full mx-auto flex flex-col justify-center items-center ease-in-out absolute inset-0  
              ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
            style={{
              transform: `translateX(${(index - activeIndex) * 100}%)`,
              transition: 'transform 0.7s ease-in-out, opacity 0.5s ease-in-out',
            }}
            data-carousel-item
          >
            <div className={`bg-white p-6 rounded-full flex flex-col justify-center items-center h-full transition-colors duration-900 ${activeIndex === index ? 'bg-[#D9F3EA]' : 'bg-white'}`}>
              <div className="mb-4 ">
                <Image
                  src={card.imageSrc}
                  alt={card.name}
                  width={65}
                  height={65}
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-gray-700 text-center text-[14px] leading-[28px] mb-4">
                {card.text}
              </p>
              <h4 className="font-bold sm:text-[20px] text-sm text-black">{card.name}</h4>
              <p className=" sm:text-sm text-xs text-[#00A264]">{card.role}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {clientCards.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-[#00A264]' : 'bg-gray-300'}`}
            aria-current={activeIndex === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      {/* Slider controls */}
      {/* <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button> */}
      {/* <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button> */}
    </div>
  );
};

export default ClientSection;
