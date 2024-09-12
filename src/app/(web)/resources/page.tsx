
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Heading7 from "@/components/web/resource_page/heading7/Heading7";
import { Resource } from "../data/resources";
import Image from "next/image";

const ResourceList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(Resource.length / itemsPerPage);

  // Get items for the current page
  const currentItems = Resource.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="">
      <Heading7 />
      <div className="flex sm:md:flex-row flex-col mt-5 h-[26rem] container mx-auto mb-[30rem] sm:md:mb-0">
        <div className="flex sm:md:w-[50%] w-full">
          <div className="relative w-full p-4">
            <Image
              src="/images/captain4.jpeg"
              alt="image not found"
              width={900}
              height={900}
              className="w-[100%] h-[100%] object-contain"
              priority
            />
            <div className="absolute sm:md:mt-[-2.9rem] mt-[-1.5rem] bg-green-700 text-white font-semibold ">
              <h3>{Resource[0].date}</h3>
            </div>
          </div>
        </div>
        <div className="sm:md:w-[50%] w-full flex flex-col p-4">

          <h2 className="text-black-500  font-bold">
            Lorem Ip sum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <p className="text-gray-500 text-sm text-justify ">
            Lorem Ip sum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            Lorem Ip sum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            Lorem Ip sum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            Lorem Ip sum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            Lorem Ip sum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <Link
            href={`/resources`}
            className="h-8 sm:md:w-[20%] w-[40%] mt-2 bg-green-700 text-white py-1 px-4 rounded-lg text-sm justify-center items-center flex "
          >
            Read more
          </Link>
        </div>
      </div>
      <div className="mt-2 lg:max-w-[90%] grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-1 py-3 -black lg:ml-20  w-full ">
        {Resource.map((item) => (
          <div key={item.id} className="flex  bg-white p-3 flex-shrink-0 ">
            <div className="relative bg-white border rounded-lg md:p-5 p-2  shadow-md  w-auto ">
              <div className=" flex mb-2">
                <Image
                  src={item.logoSrc}
                  alt={`${item.title} logo`}
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute mt-[-2rem] bg-green-700 text-white font-semibold ">
                <h3>{item.date}</h3>
              </div>

              <div className="text-sm mb-2">
                <span className="text-black-500 font-semibold">
                  {" "}
                  {item.title}
                </span>
              </div>
              <div className="text-gray-500 text-sm text-justify mb-2">
                {" "}
                {item.discription1}{" "}
              </div>

              <Link
                href={`/resources/${item.id}`}
                className="h-8 mt-2 bg-green-700 text-white py-1 px-4 rounded-lg text-sm "
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* {/ Pagination Controls /} */}
      <div className="flex justify-center items-center text-sm mt-[6rem] mb-4">
        <button
          onClick={handlePreviousPage}
          className="px-2 py-1 mr-2 bg-green-600 text-white rounded-lg"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {/* <Link
          href="#"
          onClick={
            currentPage === 1 ? (e) => e.preventDefault() : handlePreviousPage
          }
          className={`px-2 py-1 mr-2 bg-green-600 rounded-lg ${
            currentPage === 1
              ? "cursor-not-allowed"
              : "bg-green-600 text-white"
          }`}
        >
          Previous
        </Link> */}

        <span className="text-green-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          className="px-2 py-1 ml-2 bg-green-600 text-white rounded-lg"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        {/* <Link
          href="#"
          onClick={
            currentPage === totalPages
              ? (e) => e.preventDefault()
              : handleNextPage
          }
          className={`px-2 py-1 ml-2 bg-green-600 text-white rounded-lg ${
            currentPage === totalPages
              ? " "
              : "bg-green-600 text-white"
          }`}
        >
          Next
        </Link> */}
      </div>
    </div>
  );
};

export default ResourceList;
