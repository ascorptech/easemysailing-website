// components/PartnersSection.tsx
import React from "react";
import PartnerCard from "./PartnerCard";
import Link from "next/link";

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
  ];

  return (
    <section className="mt-5 p-2 w-[81%] ml-[10rem]">
      <div className="flex items-center justify-between  mr-3  ">
        <div className="font-bold ml-[1rem] text-2xl">
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

export default PartnersSection;
