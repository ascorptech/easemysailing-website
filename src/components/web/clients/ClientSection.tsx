"use client"
import React, { useRef } from "react";
import ClientsCard from "./ClientsCard";

const ClientSection: React.FC = () => {
  const clientcard = [
    {
      text: "An exceptional platform for seafarers! It’s streamlined, user-friendly, and genuinely cares about our welfare and career growth.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing is built by seafarers who truly understand and care about us. We deserve respect and recognition, and this platform envisions just that.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
      imageSrc: "/images/ellipse.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing has redefined how seafarers connect with recruiters. It’s intuitive and respectful of our hard work. It’s the go-to platform for Seafarers.",
      name: "Danny Jhonas",
      role: "Customer",
      rating: 4,
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
    // Add more clientcard as needed
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll handling for left and right buttons
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
        className="absolute left-20 top-[58%] transform -translate-y-1/2 bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center"
        onClick={() => handleScroll("left")}
      >
        &lt;
      </button>

      <div
        ref={scrollRef}
        className="flex gap-5 ml-6 overflow-auto no-scrollbar space-x-12 mt-14 mb-10 lg:ml-[10rem] lg:mr-[9%]"
      >
        {clientcard?.map((ccard, index) => (
          <ClientsCard
            key={index}
            text={ccard.text}
            name={ccard.name}
            role={ccard.role}
            imageSrc={ccard.imageSrc}
            image1={ccard.image1}
          />
        ))}
      </div>

      <button
        className="absolute right-20 top-[58%] transform -translate-y-1/2 bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center"
        onClick={() => handleScroll("right")}
      >
        &gt;
      </button>
    </div>
  );
};

export default ClientSection;
