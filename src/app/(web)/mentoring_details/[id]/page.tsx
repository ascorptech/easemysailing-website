"use client";

import React from "react";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import { CaptainData, ShippingCardProps } from "../../(web)/data/CaptainData";
// import Profile from "@/components/p4mentoring/profileSummary/Profile";
import Image from "next/image";
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
          <div className=" text-green-700 font-base text-center">{item.description}</div>
          <div className="text-gray-700 font-base">{item.location}</div>
          <div className="text-sm mb-2">
            <span className="text-yellow-500">⭐ {item.experience}</span>
            <span className="text-gray-500"> | {item.director} reviews</span>
          </div>
        </div>
      </div>
      <div className="container w-[85%] h-auto flex justify-between gap-16 mx-auto my-4 ">
        <div className="p-5  text-justify  h-[16rem] w-[65%]">
          <h2 className="font-bold text-lg mb-2">Profile Summary</h2>
          <p>{item.profile}</p>
          <h3 className="font-bold text-sm mt-2">
            Connect with the Mentor at email :{" "}
            <span className="text-green-400">business@easemysailing.com</span>
          </h3>
          <h3 className="font-bold text-sm mt-2 ml-14">Or</h3>
          <div className="">
            <button className="h-8 mt-2 bg-green-600 text-white py-1 px-4 rounded-lg text-sm">
              Express interest
            </button>
          </div>
        </div>
        <div className=" w-[20rem]">
          <Image
            src="/profile.png" // Replace with your image path
            alt="right Image"
            width={500} // Set to match the height
            height={500} // Ensure the aspect ratio is consistent
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MentoringDetailPage;
