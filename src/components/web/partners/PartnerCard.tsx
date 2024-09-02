// components/PartnerCard.tsx
import React from "react";

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
    <div className="bg-white border-2 rounded-lg p-4 shadow-md flex-shrink-0 w-64  ">
     

      <div className="flex justify-center mb-4">
        <img src={logoSrc} alt={`${name} logo`} className="h-12" />
      </div>
      <h3 className="text-base font-semibold mb-2">{name}</h3>
      <div className="text-sm mb-2">
        <span className="text-yellow-500">⭐ {rating}</span>
        <span className="text-gray-500"> | {reviews} reviews</span>
      </div>
      <div className="text-gray-700 mb-2 font-base">{contactPerson}</div>
      <p className="text-gray-500 text-sm">{description}</p>
      <button className="h-8 mt-2 bg-[#00A264] text-white py-1 px-4 rounded-lg text-sm">
        View Profile
      </button>
    </div>
  );
};

export default PartnerCard;
