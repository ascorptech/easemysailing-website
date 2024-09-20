"use client"
import Image from "next/image";
import React from "react";

interface ClientsCard {
  text: string;
  name: string;
  role: string;
  imageSrc: string;
  image1:string,
  // className:string
}

const ClientsCard: React.FC<ClientsCard> = ({
  text,
  name,
  role,
  imageSrc,
  image1,
}) => {
  return (
    <div className=" rounded-full ">
      <div className=" hover:border hover:border-green-500 bg-white lg:w-[300px] lg:h-[430px] p-3 rounded-full flex flex-col justify-center items-center flex-shrink-0 w-80  ">
        <p className=" flex  flex-col -mt-12 justify-center items-center ">
          <Image
            src={imageSrc}
            alt={name}
            width={500}
            height={500}
            className="h-[65px] w-[65px] rounded-full "
          />
        </p>
        <span className="text-gray-700 mt-8 text-center text-[16px] leading-[28px] mb-4">
          {text}
        </span>

        <div className="flex text-center items-center ">
          <div>
            <h4 className="font-bold text-[20px] text-[#00A264]">{name}</h4>
            <p className="text-black">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsCard;
