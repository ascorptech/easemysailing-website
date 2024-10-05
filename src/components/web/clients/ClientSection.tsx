"use client";

import React, { useRef } from "react";
import ClientsCard from "./ClientsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ClientSection: React.FC = () => {

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
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const cardWidth = 300; // Approximate width of each card including margin

  // Scroll handling for left and right buttons
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left" ? -cardWidth * 1 : cardWidth * 1;
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
          Seafarer Stories: Why They <span className="text-[#00A264]">Trust Us
           Adore Us</span>
        </h2>
      </div>

        <div className="z-10">
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
      
      
    </div>
    
  );
};

export default ClientSection;