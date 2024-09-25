"use client";

import React, { useRef, useState, useEffect } from "react";
import ClientsCard from "./ClientsCard";

const ClientSection: React.FC = () => {
  const clientcard = [
    {
      text: "An exceptional platform for seafarers! It’s streamlined, user-friendly, and genuinely cares about our welfare and career growth.",
      name: "Danny Jhonas",
      role: "Customer",
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing is built by seafarers who truly understand and care about us. We deserve respect and recognition, and this platform envisions just that.",
      name: "Danny Jhonas",
      role: "Customer",
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing has redefined how seafarers connect with recruiters. It’s intuitive and respectful of our hard work. It’s the go-to platform for Seafarers.",
      name: "Danny Jhonas",
      role: "Customer",
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing is built by seafarers who truly understand and care about us. We deserve respect and recognition, and this platform envisions just that.",
      name: "Danny Jhonas",
      role: "Customer",
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    {
      text: "An exceptional platform for seafarers! It’s streamlined, user-friendly, and genuinely cares about our welfare and career growth.",
      name: "Danny Jhonas",
      role: "Customer",
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1); // Initially center card is the second one (index 1)
  const cardWidth = 300; // Approximate width of each card including margin
  const visibleCards = 3;


  
  // Scroll handling for left and right buttons
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Update active index on scroll
  const handleScrollUpdate = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScrollUpdate);
      return () => scrollContainer.removeEventListener("scroll", handleScrollUpdate);
    }
  }, []);

  return (
    <div className="relative flex bg-[#D9F3EA] mx-2 lg:mx-0 flex-col w-[95%] lg:w-full">
      <div className="text-[21px] leading-[28px] font-bold sm:md:text-4xl lg:ml-[0rem] mt-10">
        <h2 className="text-[15px] leading-[20px] sm:text-[28px] lg:text-[45px] sm:leading-[54px] font-bold text-center">
          SEAFARER STORIES: WHY THEY TRUST US
          <span className="text-[#00A264]"></span> ADORE US
        </h2>
      </div>

      {/* Arrow Buttons */}
      <button
        className="absolute left-20 top-[58%] transform -translate-y-1/2 bg-[#00A264] text-white rounded-full h-8 w-8 flex items-center justify-center"
        onClick={() => handleScroll("left")}
      >
        &lt;
      </button>

      <div
        ref={scrollRef}
        className="flex justify-center border-red-600 border-2 items-center space-x-20 h-[500px] overflow-auto no-scrollbar w-[100%] ml-[10rem] mt-14 mb-10 lg:w-[80%]"
      >
        {clientcard?.map((ccard, index) => (
          <ClientsCard
            key={index}
            text={ccard.text}
            name={ccard.name}
            role={ccard.role}
            imageSrc={ccard.imageSrc}
            isActive={activeIndex === index} // Pass isActive to ClientsCard
            />
        ))}
      </div>

      <button
        className="absolute right-20 top-[58%] transform -translate-y-1/2 bg-[#00A264] text-white rounded-full h-8 w-8 flex items-center justify-center"
        onClick={() => handleScroll("right")}
      >
        &gt;
      </button>
    </div>
  );
};

export default ClientSection;