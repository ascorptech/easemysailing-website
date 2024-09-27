"use client";
import React, { useRef } from "react";
import PartnerCard from "./PartnerCard";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const PartnersSection = () => {
  const partners = [
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      contactPerson: "Sherry Smith",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo3.png",
    },
    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      contactPerson: "Aline Smith",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo3.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo4.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: "John Smith",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo4.png",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      contactPerson: "John Smith",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo8.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: "John Smith",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo4.png",
    },
    
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -224, // Adjust the value for smooth scrolling
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 224, // Adjust the value for smooth scrolling
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-7 lg:px-1  md:mx-6 lg:w-full lg:mx-0 sm:mx-5">
       
      <div className="flex items-center justify-between mt-4 pt-4 lg:mr-[5%]  md:mx-[1rem]">
        <div className="font-bold mx-5 text-xl flex items-center lg:text-4xl lg:ml-[1.5rem]">
          <h1>
            <span>Our</span> <span className=" text-[#00A265]">Partners</span>
          </h1>
          <div className="ml-2">
            <Image
              priority
              src="/anchor.png"
              alt="partners"
              width={200}
              height={200}
              className=" lg:h-8 lg:w-7 h-5 w-5"
            />
          </div>
        </div>
        <div className="lg:mr-[-1.5rem]">
          <Link
            href="/partner-details"
            className=" bg-green-600 text-white mx-5  text-xs py-2 px-4 lg:py-3 lg:px-8 rounded-full  lg:text-sm mb-2"
          >
            View All
          </Link>
        </div>
      </div>

      <div className="  relative flex items-center justify-center w-full  ">
      <button 
          onClick={scrollLeft} 
          className="absolute left-6 md:hidden bg-white p-2 rounded-full shadow-md"
          aria-label="Scroll Left"
        >
          <IoMdArrowBack />
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-auto my-10 gap-2 flex space-x-2 lg:space-x-6 2xl:space-x-14 lg:mx-0 no-scrollbar scroll-smooth snap-x snap-mandatory lg:w-[95%] w-[220px] "
        >
          {partners?.map((partner, index) => (
            <PartnerCard
              key={index}
              name={partner.name}
              reviews={partner.reviews}
              rating={partner.rating}
              contactPerson={partner.contactPerson}
              description={partner.description}
              logoSrc={partner.logoSrc}
            />
          ))}
        </div>
        <button 
          onClick={scrollRight} 
          className="absolute right-6 md:hidden bg-white p-2  rounded-full shadow-md"
          aria-label="Scroll Right"
        >
          <IoMdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default PartnersSection;
