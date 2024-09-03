"use client";
import React, { useRef } from "react";
import PartnerCard from "./PartnerCard";
import Link from "next/link";
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
      logoSrc: "/images/logo1.png",
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
    <section className="w-[94%]  ml-1 md:mx-6 px-1 sm:mx-5 lg:w-[98%] lg:mx-0">
      <div className="flex items-center  justify-between pt-4 lg:mr-[10%] md:mx-[3rem]">
        <div className="font-bold text-2xl  lg:ml-[8rem]">
          <h1>
            <span>Our</span> <span className="text-green-700">Partners</span>
          </h1>
        </div>
        <div>
          <Link href="/partner_details">
            <button className="h-8 bg-green-600 text-white py-1 px-4 rounded-lg text-sm mb-2">
              View All
            </button>
          </Link>
        </div>
      </div>

      <div className=" lg:ml-[2rem] relative flex items-center justify-center w-[97%]  ">
        {/* {/ Left Arrow /} */}
        <button
          onClick={scrollLeft}
          className="absolute left-1 lg:left-10 z-10 p-2 bg-white border rounded-full shadow-md ml-1 lg:ml-2 mr-2"
        >
          &lt;
        </button>

        {/* {/ Partner Cards Scroll Container /} */}
        <div
          ref={scrollRef}
          className="overflow-x-auto flex space-x-4 lg:mx-[4rem] no-scrollbar mx-[5rem] scroll-smooth snap-x snap-mandatory lg:w-[80%] w-[97%]"
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

        {/* {/ Right Arrow /} */}
        <button
          onClick={scrollRight}
          className="absolute right-1 lg:right-20  z-10 p-2 bg-white border rounded-full shadow-md  lg:-mr-1"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default PartnersSection;
