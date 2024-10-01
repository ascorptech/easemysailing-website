"use client";

import React, { useState } from "react";
import Link from "next/link";
import Heading4 from "@/components/web/mentoring/heading4/Heading4";
import { CaptainData } from "../data/CaptainData";
import { GrLocation } from "react-icons/gr";
import Image from "next/image";

const MentoringList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(CaptainData.length / itemsPerPage);

  // Get items for the current page
  const currentItems = CaptainData.slice(
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
    <div className="mt-14">
      <Heading4/>
      <div className="mt-6 mx-[0rem] sm:mx-[12px] lg:w-[80%] grid grid-cols-1 lg:mx-[8rem]  md:grid-cols-2 gap-5 md:gap-2 lg:gap-10 sm:py-3 px-2 sm:px-0 ">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center ju bg-white border  h-[12rem] sm:h-[11rem] rounded-lg  p-1 sm:mx-[1rem] shadow-md flex-shrink-0 w-auto  py-5 "
          >
            <div className="flex border rounded-lg  bg-green-100 w-32 h-32 transform-gpu mr-5 sm:mr-6 ">
              <div className="flex justify-center  w-32 h-[125px] ">
                <Image
                width={40}
                height={40}
                priority
                  src={item.logoSrc}
                  alt={`${item.name} logo`}
                  className="w-full h-full  -translate-y-2 translate-x-3   border rounded-md"
                />
              </div>
            </div>

            <div>
              <h3 className="flex justify-between  items-center text-base font-semibold ">
                {item.name}
              </h3>
              <div className=" text-green-700 font-base">
                {item.description}
              </div>
              <div className="text-gray-700 font-base">
                {item.contactPerson}
              </div>
              <div className="text-sm mb-2 ">
                <span className="text-yellow-500">⭐ {item.rating}</span>
                <span className="text-gray-500"> | {item.reviews} reviews</span>
                <span className="text-black  ml-8 ">  {item.location}</span>
              </div>

              <Link href={`/career/${item.id}`}>
                <button className="h-7 bg-green-600 text-white px-4 rounded-lg text-sm">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center text-sm mt-[6rem] mb-4">
        <button
          onClick={handlePreviousPage}
          className="px-2 py-1 mr-2 bg-green-600 text-white rounded-lg"
          disabled={currentPage === 1}
        >
          Previous
        </button>

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
      </div>
    </div>
  );
};

export default MentoringList;
