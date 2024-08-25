"use client";

import React from "react";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import { CaptainData, ShippingCardProps } from "../../data/CaptainData";
import Profile from "@/components/p4mentoring/profileSummary/Profile";

const MentoringDetailPage: React.FC = () => {
  const params = useParams(); // useParams hook to get route parameters
  const { id } = params;

  // Find the item with the matching ID from the shippingData array
  const item = CaptainData.find((item) => item.id === id);

  // If no item is found, show a not found message
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <div className="flex pl-[10rem] bg-green-100 py-6 border">
        <div className="flex border rounded-lg  bg-green-400 h-40 transform-gpu mr-4">
          <div className="justify-center mb-4">
            <img
              src={item.logoSrc}
              alt={`${item.name} logo`}
              className="h-36 ml-4 mb-5 border rounded-md"
            />
          </div>
        </div>
        <div>
          <h3 className="flex justify-between pt-8 items-center text-base font-semibold ">
            {item.name}
          </h3>
          <div className=" text-green-700 font-base">{item.description}</div>
          <div className="text-gray-700 font-base">{item.contactPerson}</div>
          <div className="text-sm mb-2">
            <span className="text-yellow-500">⭐ {item.rating}</span>
            <span className="text-gray-500"> | {item.reviews} reviews</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Profile />
      </div>
    </div>
  );
};

export default MentoringDetailPage;
