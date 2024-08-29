// components/Articles.tsx
"use client";
import React from "react";
import PartnerCard from "../partners/PartnerCard";

const Articles = () => {
  const partners = [
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      contactPerson: "Sherry Smith",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/path/to/logo1.png",
    },
    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      contactPerson: "Aline Smith",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/path/to/logo2.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/path/to/logo3.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: "John Smith",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/path/to/logo4.png",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      contactPerson: "John Smith",
      description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/path/to/logo5.png",
    },
  ];

  return (
    <section className="mt-5 p-2 w-[81%] ml-[10rem]">
      <div className="flex items-center justify-between  mr-3  ">
        <div className="font-bold ml-[1rem] text-2xl">
          <h1>
            <span className="text-green-700">Latest</span>{" "}
            <span>News & Articles</span>
          </h1>
        </div>
        <div>
          <button className="h-8 bg-green-600 text-white mb-2 py-1 px-4 rounded-lg text-sm">
            View All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto flex space-x-4 no-scrollbar">
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
    </section>
  );
};

export default Articles;
