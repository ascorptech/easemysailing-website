"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ClientSection: React.FC = () => {
  const clientcard = [
    {
      text: "An exceptional platform for seafarers! It’s streamlined, user-friendly, and genuinely cares about our welfare and career growth.",
      name: "Danny Jhonas",
      role: "Customer",
      imageSrc: "/images/ellipse.png",
    },
    {
      text: "EaseMySailing is built by seafarers who truly understand and care about us. We deserve respect and recognition, and this platform envisions just that.",
      name: "Danny Jhonas",
      role: "Customer",
      imageSrc: "/images/ellipse.png",
    },
    {
      text: "EaseMySailing has redefined how seafarers connect with recruiters. It’s intuitive and respectful of our hard work. It’s the go-to platform for Seafarers.",
      name: "Danny Jhonas",
      role: "Customer",
      imageSrc: "/images/ellipse.png",
    },
    {
      text: "We deserve respect and recognition, and this platform envisions just that.",
      name: "Danny Jhonas",
      role: "Customer",
      imageSrc: "/images/ellipse.png",
    },
    {
      text: "It’s streamlined, user-friendly, and genuinely cares about our welfare and career growth.",
      name: "Danny Jhonas",
      role: "Customer",
      imageSrc: "/images/ellipse.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0); // Start from the first card

  // Scroll handling for left and right buttons
  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIndex((prevIndex) => (prevIndex - 1 + clientcard.length) % clientcard.length);
    } else {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clientcard.length);
    }
  };

  // Automatic slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleScroll("right");
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  return (
    <div className="relative flex bg-[#D9F3EA] lg:mx-0 flex-col w-full">
      <div className="text-[21px] leading-[35px] font-bold sm:md:text-4xl lg:ml-[0rem] mt-10">
        <h6 className="text-center text-sm lg:text-base">TESTIMONIALS</h6>
        <h2 className="text-[20px] leading-[20px] sm:text-[28px] lg:text-[45px] sm:leading-[54px] font-bold text-center">
          SEAFARER'S VOICES FROM <span className="text-[#00A264]">THE SEA</span> 
        </h2>
      </div>

      {/* Arrow Buttons */}
      {/* <button
        className="absolute left-20 top-[50%] transform -translate-y-1/2 bg-[#00A264] text-white rounded-full h-8 w-8 flex items-center justify-center"
        onClick={() => handleScroll("left")}
        disabled={activeIndex === 0} // Disable if it's the first card
      >
        &lt;
      </button> */}

      <div className="flex justify-center items-center h-[500px] overflow-hidden w-full mx-auto mt-14 mb-10 lg:w-[80%]">
        <div
          className="flex transition-transform duration-1000 ease-in-out" // Smooth transition
          style={{ transform: `translateX(-${activeIndex * 100}%)` }} // Adjust to slide one card
        >
          {clientcard.map((ccard, index) => (
            <div key={index} className="min-w-full"> {/* Full width for one card at a time */}
              <div className={`bg-white p-6 lg:w-[300px] lg:h-[430px] w-[280px] h-[400px] rounded-full mx-auto flex flex-col justify-center items-center flex-shrink-0 transition-transform ${activeIndex === index ? "scale-110" : "scale-90"}`}>
                {/* Image Section */}
                <div className="flex justify-center items-center mb-4">
                  <Image
                    src={ccard.imageSrc}
                    alt={ccard.name}
                    width={65}
                    height={65}
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Text */}
                <p className="text-gray-700 text-center text-[16px] leading-[28px] mb-4">
                  {ccard.text}
                </p>

                {/* Name and Role */}
                <div className="text-center">
                  <h4 className="font-bold text-[20px] text-[#00A264]">{ccard.name}</h4>
                  <p className="text-black">{ccard.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <button
        className="absolute right-20 top-[50%]  transform -translate-y-1/2 bg-[#00A264] text-white rounded-full h-8 w-8 flex items-center justify-center"
        onClick={() => handleScroll("right")}
        disabled={activeIndex === clientcard.length - 1} // Disable if it's the last card
      >
        &gt;
      </button> */}
    </div>
  );
};

export default ClientSection;
