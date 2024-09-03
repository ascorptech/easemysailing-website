"use client"
import React from "react";

interface ClientsCard {
  text: string;
  name: string;
  role: string;
  rating: number;
  imageSrc: string;
  image1:string,
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
    <div className=" p-6   flex-shrink-0 w-80 mx-2 ">
      <p className="flex"><img
          src={image1}
          alt={name}
          className="h-8 w-8 rounded-full mr-4"
        /><span className="text-gray-700 mb-4">{text}</span>
        </p>
      <div className="flex items-center mb-4 lg:ml-[3rem]" >
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-500 ">
            ⭐
          </span>
        ))}
      </div>
      <div className="flex items-center">
        <img
          src={imageSrc}
          alt={name}
          className="h-12 w-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientsCard;
