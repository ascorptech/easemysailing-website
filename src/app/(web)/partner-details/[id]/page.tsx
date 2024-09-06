"use client";

import React from "react";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import { Partner } from "../../data/Partner";

// import Profile from "@/components/p4mentoring/profileSummary/Profile";
import Image from "next/image";
const PartnerDetailPage: React.FC = () => {
  const params = useParams(); // useParams hook to get route parameters
  const { id } = params;

  // Find the item with the matching ID from the shippingData array
  const item = Partner.find((item) => item.id === id);

  // If no item is found, show a not found message
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <div className="flex pl-[10rem] bg-green-100 py-6 border mt-14">
        <div className="flex border rounded-lg  bg-[#00A264] h-30 transform-gpu mr-4">
          <div className="  w-36  ">
            <div className="   h-36 w-36 bg-white border -translate-y-3 translate-x-3">
              <img
                src={item.logoSrc}
                alt={`${item.name} logo`}
                className="  h-20 w-20 mx-7 my-7  bg-white "
              />
            </div>
          </div>
        </div>
        <div className="ml-6">
          <h3 className="flex justify-between pt-8 items-center text-base font-semibold ">
            {item.name}
          </h3>

          {/* {/ <div className="text-gray-700 font-base">{item.location}</div> /} */}
          <div className="text-sm mb-2">
            <span className="text-yellow-500">⭐ {item.experience}</span>
            <span className="text-gray-500"> | {item.reviews} reviews</span>
          </div>
          <div className=" text-[#00A264] font-base">{item.description}</div>
        </div>
      </div>
      <div className="container w-[85%] h-auto flex justify-between gap-16 mx-auto my-4 ">
        <div className="p-5  text-justify  h-[16rem] w-[65%]">
          <h2 className="font-bold text-lg mb-2">Company Summary</h2>
          <p>{item.profile}</p>
          {/* <h3 className="font-bold text-sm mt-2">
            Connect with the Mentor at email :{" "}
            <span mailto:classname="text-green-400">business@easemysailing.com</span>
          </h3> */}
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

export default PartnerDetailPage;
