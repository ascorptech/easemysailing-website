"use client";

import React from "react";
import { useState } from "react";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import { Resource } from "@/app/data/resources";

// import Profile from "@/components/p4mentoring/profileSummary/Profile";
import Image from "next/image";
const ResourceDetailsPage: React.FC = () => {
  const params = useParams(); // useParams hook to get route parameters
  const { id } = params;

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextArea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!error) {
    //   console.log("Form submitted successfully");
    // }
  };

  // Find the item with the matching ID from the shippingData array
  const item = Resource.find((item) => item.id === id);

  // If no item is found, show a not found message
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="flex justify-around mx-14 my-11">
      <div className=" float-left w-[70%]  px-10">
        <div className="mr-5 w-[98%] h-[400px] border2 border-blue-600">
          <img
            src={item.logoSrc}
            alt=""
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="flex gap-4   mt-0 ">
          <p className="text-green-600">{item.date}</p>
          <p className="font-semibold">By Gwen stacy</p>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">{item.title}</h2>
          <p className=" text-sm text-justify text-left mt-4">{item.discription}</p>
        </div>

        <h1 className=" my-4  font-bold text-xl">Drop Your comment</h1>

        <div className="bg-gray-200  p-8 rounded-xl ">
          <form onSubmit={handleSubmit} className="   ">
            <div className="mb-[7px]">
              <div className="relative flex items-center ">
                <input
                  id="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>
            </div>

            <div className="mb-[7px]">
              <div className="relative flex items-center  ">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="mb-[7px]">
              <div className="relative flex items-center  ">
                <input
                  id="phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border rounded-lg w-full py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>

            <div className="mb-[7px]">
              <div className="relative flex items-center  ">
                <textarea
                  value={textarea}
                  onChange={(e) => setTextArea(e.target.value)}
                  className="border rounded-lg w-full h-40 py-[7px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                  placeholder="Your Message"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="p-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Post Your comment
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="float-right  w-[27%]  ">
        <div className="relative bg-green-100 px-4 pt-2 h-[550px] rounded-lg">
          <h2 className="font-bold text-xl ">More Articals</h2>
          <div className="absolute">
            <div className=" flex gap-3  mb-2 p-2">
              <div className="w-24 h-14 border-2 border-green-500">
                <img
                  src=""
                  alt="image not found"
                  className="w-full h-full"
                ></img>
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">01/jan/2014 By gwen stacy</p>
              </div>
            </div>
            <div className="flex gap-3 mb-2 p-2">
              <div className="w-24 h-14 border-2 border-green-500">
                <img
                  src=""
                  alt="image not found"
                  className="w-full h-full"
                ></img>
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">01/jan/2014 By gwen stacy</p>
              </div>
            </div>
            <div className="flex gap-3  mb-2 p-2">
              <div className="w-24 h-14 border-2 border-green-500">
                <img
                  src=""
                  alt="image not found"
                  className="w-full h-full"
                ></img>
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">01/jan/2014 By gwen stacy</p>
              </div>
            </div>
            <div className="flex gap-3 mb-2 p-2">
              <div className="w-24 h-14 border-2 border-green-500">
                <img
                  src=""
                  alt="image not found"
                  className="w-full h-full"
                ></img>
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">01/jan/2014 By gwen stacy</p>
              </div>
            </div>
            <div className="flex gap-3  mb-2 p-2">
              <div className="w-24 h-14 border-2 border-green-500">
                <img
                  src=""
                  alt="image not found"
                  className="w-full h-full"
                ></img>
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">01/jan/2014 By gwen stacy</p>
              </div>
            </div>
            <div className="flex gap-3   p-2">
              <div className="w-24 h-14 border-2 border-green-500">
                <img
                  src=""
                  alt="image not found"
                  className="w-full h-full"
                ></img>
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">01/jan/2014 By gwen stacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailsPage;
