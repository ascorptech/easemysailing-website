"use client";
import Image from "next/image";
import React from "react";

interface ClientsCardProps {
  text: string;
  name: string;
  role: string;
  imageSrc: string;
  image1: string;
  index:number;
}


const ClientsCard: React.FC<ClientsCardProps> = ({
  text,
  name,
  role,
  imageSrc,
  image1,
  index
}) => {
  return (
    <div className="flex justify-center items-center py-[45px]">
      <div className={index %2 !== 0?"bg-white p-6 lg:w-[300px] lg:h-[430px] w-[280px] h-[400px] rounded-full flex flex-col justify-center items-center flex-shrink-0 transition-transform scale-110 border border-[#00A264]":"bg-white p-6 lg:w-[300px] lg:h-[430px] w-[280px] h-[400px] rounded-full flex flex-col justify-center items-center flex-shrink-0 transition-transform"}>
        {/* Image Section */}
        <div className="flex justify-center items-center mb-4">
          <Image
            src={imageSrc}
            alt={name}
            width={65}
            height={65}
            className="rounded-full object-cover"
          />
        </div>

        {/* Text */}
        <p className="text-gray-700 text-center text-[16px] leading-[28px] mb-4">
          {text}
        </p>

        {/* Name and Role */}
        <div className="text-center">
          <h4 className="font-bold text-[20px] text-[#00A264]">{name}</h4>
          <p className="text-black">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientsCard;