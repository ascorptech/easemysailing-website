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
      logoSrc: "/images/logo2.png",
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
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo2.png",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200, // Adjust the value for smooth scrolling
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200, // Adjust the value for smooth scrolling
        behavior: "smooth",
      });
    }
  };

  return (
    // <section className="w-[94%]  ml-1 md:mx-6 px-1 sm:mx-5 lg:w-[98%] lg:mx-0">
    <div className="mt-7 w-[94%] mx-3 px-1   md:mx-6 lg:w-full lg:mx-0 sm:mx-5">
      {/* <div className="flex items-center  justify-between pt-4 lg:mr-[8%] md:mx-[3rem]">
       */}
      <div className="flex items-center justify-between mt-4 pt-4 lg:mr-[5%]  md:mx-[1rem]">
        {/* <div className="font-bold text-2xl  lg:ml-[4rem]"> */}
        <div className="font-bold flex items-center text-4xl lg:ml-[2rem]">
          <h1>
            <span>OUR</span> <span className="text-green-700">PARTNERS</span>
          </h1>
          <div className="ml-5">
            <Image
            priority
            src="/anchor.png"
            alt="partners"
            width={200}
            height={200}
            className=" h-8 w-7"
            />

          </div>
        </div>
        <div>
          <Link href="/partner-details"
             className=" bg-green-600 text-white py-3 px-8 rounded-full  text-sm mb-2">
              View All
           
          </Link>
        </div>
      </div>

      {/* <div className=" lg:ml-[2rem] relative flex items-center justify-center w-[97%]  "> */}
      <div className=" lg:px-[1rem] relative flex items-center justify-center w-[100%]  ">
        

        {/* {/ Partner Cards Scroll Container /} */}
        <div
          ref={scrollRef}
          className="overflow-x-auto my-10 flex space-x-6 lg:mx-0 no-scrollbar mx-[2rem] scroll-smooth snap-x snap-mandatory lg:w-[95%] w-[97%] "
        >
          {partners.map((partner, index) => (
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

       
      </div>
    </div>
  );
};

export default PartnersSection;
