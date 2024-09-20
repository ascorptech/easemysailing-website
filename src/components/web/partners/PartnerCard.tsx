// components/PartnerCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PartnerCardProps {
  name: string;
  reviews: string;
  rating: string;
  contactPerson: string;
  description: string;
  logoSrc: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  reviews,
  rating,
  contactPerson,
  description,
  logoSrc,
}) => {
  return (
    <div className=" flex flex-col justify-center leading-10 items-center bg-white border-2 rounded-lg p-4 shadow-md flex-shrink-0 w-60  ">
      <div className="flex h-20 w-20 items-center rounded-full bg-[#E8E8FF] first-letter: justify-center mb-4">
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          width={50}
          height={50}
          className="h-12 w-12"
        />
      </div>
      <h3 className="text-base font-semibold mb-2">{name}</h3>
      <div className="text-sm mb-2 mt-2">
        <span className="text-yellow-500">⭐ {rating}</span>
        <span className="text-gray-500"> | {reviews} reviews</span>
      </div>
      <div className="text-gray-700 mb-2 h-8 mt-2 py-2 px-4 text-center items-center flex rounded-2xl  bg-[#F6F6F6] font-base">
        {contactPerson}
      </div>
      <p className="text-gray-500 text-center mt-3 text-sm">{description}</p>
      <Link href="#" className=" text-[#00A264] underline text-[14px] mt-5">
        View Profile
      </Link>
    </div>
  );
};

export default PartnerCard;
