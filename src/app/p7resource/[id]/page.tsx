"use client";

import React from "react";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import { Resource } from "@/app/data/resources";

// import Profile from "@/components/p4mentoring/profileSummary/Profile";
import Image from "next/image";
const ResourceDetailsPage: React.FC = () => {
  const params = useParams(); // useParams hook to get route parameters
  const { id } = params;

  // Find the item with the matching ID from the shippingData array
  const item = Resource.find((item) => item.id === id);

  // If no item is found, show a not found message
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <div className="flex justify-between mx-24 ">
        <div className=" border">
          <div className="w-[800px] h-[300px]  ">
            <div className=" ">
              <img
                src={item.logoSrc}
                alt={`${item.title} logo`}
                className="  h-full w-full mt-7  bg-white "
              />
            </div>
            <div className="flex gap-4">
              <p>{item.date}</p>
              <p>By Gwen stacy</p>
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.discription}</p>
            </div>
          </div>
        </div>
        <div className=" w-[44rem] bg-green-200 mt-8 col-span-2 w-[70%]">
          <h2>More Articals</h2>
          <div className=" ">
            <div className="flex gap-3">
              <div className="w-20 h-20 border">
                <img
                  src=""
                  alt="image not found"
                  className="w-full h-full"
                ></img>
              </div>
              <div>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p>01/jan/2024 By gwen stacy</p>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default ResourceDetailsPage;
