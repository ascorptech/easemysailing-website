"use client";

import React, { useEffect } from "react";
import Image  from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import { Resource } from "../../data/resources";
import { GetResourceDetail } from "../Services/resourceService";
import moment from "moment";

const ResourceDetailsPage: React.FC = () => {
  const params = useParams(); // useParams hook to get route parameters
  const { id } = params;

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextArea] = useState("");
  const [resourceDetail,setResourceDetail] = useState<any>()

  useEffect(() => {
    GetResourceDetail(id,GetResourceDetailCB)
  }, [])

  const GetResourceDetailCB=(res:any)=>{
    setResourceDetail(res?.data)
  }
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };


  // If no item is found, show a not found message
  if (!resourceDetail) {
    return <div>Item not found</div>;
  }

  return (
    <div className="flex justify-around mx-14 my-11 mt-[100px]">
      <div className=" float-left w-[70%]  px-10">
        <div className="mr-5 w-[787px] h-[417px] border2 border-blue-600">
          <Image
            src={resourceDetail?.image?resourceDetail?.image:"/images/captain4.jpeg"}
            alt="image not found"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          ></Image>
        </div>
        <div className="flex gap-4 mt-0 ">
          <p className="text-green-600">{moment(resourceDetail?.createDate).format('YYYY-MM-DD')}</p>
          <p className="font-semibold">By Gwen Stacy</p>
        </div>
        <div>
          <h2 className="font-bold text-xl mt-4">{resourceDetail?.title}</h2>
          <p className=" text-sm text-justify  mt-4">{resourceDetail?.discription}</p>
        </div>

        <h1 className=" my-4  font-bold text-xl">Drop Your Comment</h1>

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
                Post Your Comment
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
                <Image
                  src="/images/article1.png"
                  alt="image not found"
                  width={50}
                  height={50}
                  className="w-full h-full"
                />
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">
                  01/jan/2014 By gwen stacy
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-2 p-2">
              <div className="w-24 h-14 border-2 border-green-500">
                <Image
                  src="/images/article4.png"
                  alt="image not found"
                  width={50}
                  height={50}
                  className="w-full h-full"
                />
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">
                  01/jan/2014 By gwen stacy
                </p>
              </div>
            </div>
            <div className="flex gap-3  mb-2 p-2">
              <div className="w-24 h-14 border-2 border-green-500">
                <Image
                  src="/images/article3.png"
                  alt="image not found"
                  width={50}
                  height={50}
                  className="w-full h-full"
                />
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">
                  01/jan/2014 By gwen stacy
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-2 p-2">
              <div className="w-24 h-14 border-2 border-green-500">
                <Image
                  src="/images/article4.png"
                  alt="image not found"
                  width={50}
                  height={50}
                  className="w-full h-full"
                />
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">
                  01/jan/2014 By gwen stacy
                </p>
              </div>
            </div>
            <div className="flex gap-3  mb-2 p-2">
              <div className="w-24 h-14 border-2 border-green-500">
                <Image
                  src="/images/article1.png"
                  alt="image not found"
                  width={50}
                  height={50}
                  className="w-full h-full"
                />
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">
                  01/jan/2014 By gwen stacy
                </p>
              </div>
            </div>
            <div className="flex gap-3   p-2">
              <div className="w-24 h-14 border-2 border-green-500">
                <Image
                  src="/images/article4.png"
                  alt="image not found"
                  width={50}
                  height={50}
                  className="w-full h-full"
                />
              </div>
              <div className="text-xs">
                <h2 className="font-bold text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p className="text-green-600   mt-0">
                  01/jan/2014 By gwen stacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailsPage;
