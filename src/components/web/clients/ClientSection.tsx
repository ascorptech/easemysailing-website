"use client";

import React, { useEffect, useRef } from "react";
import ClientsCard from "./ClientsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";
import Image from "next/image";

const ClientSection: React.FC = () => {
  const cardContainer = useRef<HTMLDivElement>(null);
  // slider js start
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1280 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1279, min: 1024 },
      items: 2
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
 // slider js end

  const clientCards = [
    {
      text: "EaseMySailing’s futuristic platform has transformed maritime recruitment for us. It’s fast, user-friendly, and promotes fairness, helping us quickly connect with skilled seafarers globally. An absolute game-changer!",
      name: "James V.",
      role: "Shipowner",
      rating: 4,
      imageSrc: "/people.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing empowers seafarers like me to take control of our careers. It’s transparent, secure, and matches my skills with the right opportunities. It’s the platform seafarers have been waiting for!",
      name: "Rahul S.",
      role: " Seafarer",
      rating: 4,
      imageSrc: "/people.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing is a unique maritime platform that goes beyond recruitment, prioritizing seafarer welfare and career growth. Acting as HR, it brings a much-needed revolution to the industry.",
      name: "Alex M.",
      role: "Chief Officer",
      rating: 4,
      imageSrc: "/people.png",
      image1: "/images/quotes.png",
    },
    {
      text: "An exceptional platform for seafarers! It’s streamlined, user-friendly, and genuinely cares about our welfare and career growth.",
      name: "Ankush Gupta",
      role: "Chief Officer",
      rating: 4,
      imageSrc: "/people.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing is built by seafarers who truly understand and care about us. We deserve respect and recognition, and this platform envisions just that.",
      name: "Baldeep Singh",
      role: "Marine Superintendent",
      rating: 4,
      imageSrc: "/people.png",
      image1: "/images/quotes.png",
    },
    {
      text: "EaseMySailing has redefined how seafarers connect with recruiters. It’s intuitive and respectful of our hard work. It’s the go-to platform for Seafarers.",
      name: "Ritesh Patel",
      role: "Able Seaman",
      rating: 4,
      imageSrc: "/people.png",
      image1: "/images/quotes.png",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const cardWidth = 300; // Approximate width of each card including margin

  // Scroll handling for left and right buttons
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
    <div className="relative sm:flex bg-[#D9F3EA] mx-2 lg:mx-0 flex-col w-[95%] lg:w-full">
      <div className="text-[21px] leading-[28px] font-bold sm:md:text-4xl lg:ml-[0rem] mt-10">
        <h2 className="text-[15px] leading-[20px] sm:text-[28px] lg:text-[45px] sm:leading-[54px] font-bold text-center">
          Seafarer Stories: Why They <span className="text-[#00A264]">Trust Us &
           Adore Us</span>
        </h2>
      </div>

        <div className="hidden sm:flex flex-col desktop-slider">
          <Carousel  infinite responsive={responsive} slidesToSlide={2} sliderClass="slideCenter">
          {clientCards?.map((ccard:any, index:any) => (
              <ClientsCard
                key={index}
                text={ccard.text}
                name={ccard.name}
                role={ccard.role}
                imageSrc={ccard.imageSrc}
                image1={ccard.image1}
                index={index}
              />
            ))}
          </Carousel>
        </div>

        <div className="mobile-slider sm:flex flex-col -z-10">
          <Carousel  infinite responsive={responsive} sliderClass="slideCenter">
          {clientCards?.map((ccard:any, index:any) => (
              <ClientsCard
                key={index}
                text={ccard.text}
                name={ccard.name}
                role={ccard.role}
                imageSrc={ccard.imageSrc}
                image1={ccard.image1}
                index={index}
              />
            ))}
          </Carousel>
        </div>

        {/* ========= */}
      {/* <div className="sm:hidden relative flex items-center justify-center mx-2 md:mx-4 lg:mx-0 my-4">
        <button
          onClick={scrollLeft}
          className="absolute left-2 md:left-4 lg:left-8 text-5xl text-gray-500 z-10"
        >
          <PiCaretLeftThin />
        </button>

        <div
          ref={cardContainer}
          className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory w-[85%] sm:w-full sm:max-w-6xl gap-3 text-center">
          {clientCards?.map((ccard: any, index: any) => (
            <div className="snap-center flex flex-col items-center min-w-[280px] max-w-[14rem] mx-auto" key={index}>
            <div className={"bg-white p-6 w-full h-[400px] rounded-full flex flex-col border border-[#00A264]"}>
              
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={ccard?.imageSrc}
                  alt={ccard?.name}
                  width={5000}
                  height={5000}
                  className="rounded-full object-cover h-[4rem] w-[4rem]"
                />
              </div>
      
              
              <p className="text-gray-700 text-center text-[13px] leading-[28px] mb-4">
                {ccard?.text}
              </p>
      
            
              <div className="text-center">
                <h4 className="font-bold text-[20px] text-[#00A264]">{ccard?.name}</h4>
                <p className="text-black">{ccard?.role}</p>
              </div>
            </div>
          </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-2 md:right-4 lg:right-8 text-5xl text-gray-500 z-10"
        >
          <PiCaretRightThin />
        </button>
      </div> */}
      
    </div>
    
  );
};

export default ClientSection;