"use client"
import Image from "next/image";
import React from "react";

interface ClientsCard {
  text: string;
  name: string;
  role: string;
  rating: number;
  imageSrc: string;
  image1:string,
  // className:string
}

const ClientsCard: React.FC<ClientsCard> = ({
  text,
  name,
  role,
  rating,
  imageSrc,
  image1,
}) => {
  return (
    
    <div className=" py- flex-shrink-0 w-80 lg:w-[375px] lg:h-[320px] p-4  ">
      <p className="flex"><Image
          src={image1}
          alt={name}
          width={500}
          height={500}
          className="h-8 w-8 rounded-full mr-4"
        /><span className="text-gray-700  text-[20px] leading-[28px] mb-4">{text}</span>
        </p>
      <div className="flex items-center mb-4 lg:ml-[3rem]" >
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-500 ">
            ⭐
          </span>
    
        ))}
      <span className="text-white">⭐</span>
      </div>
      
      <div className="flex items-center h-[65px] w-[204px]">
        <Image
          src={imageSrc}
          alt={name}
          width={500}
          height={500}
          className="h-[65px] w-[65px] rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold text-[16px] text-[#00A264]">{name}</h4>
          <p className="text-black">{role}</p>
        </div>
      </div>
      
    </div>
  );
};

export default ClientsCard;
