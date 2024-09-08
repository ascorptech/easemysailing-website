"use client";

import React, { useState } from "react";
import Link from "next/link";
import Heading4 from "@/components/web/mentoring/heading4/Heading4";
import { CaptainData } from "../data/CaptainData";

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
      <div className="mt-6 w-[80%] grid grid-cols-1 mx-[8rem] sm:grid-cols-1 md:grid-cols-2 gap-10 py-3 ">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="flex  bg-white border h-[11rem] rounded-lg p-2 mx-[1rem] shadow-md flex-shrink-0 w-auto "
          >
            <div className="flex border rounded-lg  bg-green-100 h-40 transform-gpu mr-4">
              <div className="justify-center mb-4">
                <img
                  src={item.logoSrc}
                  alt={`${item.name} logo`}
                  className="h-36 ml-4 mb-5 border rounded-md"
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
              <div className="text-sm mb-2">
                <span className="text-yellow-500">⭐ {item.rating}</span>
                <span className="text-gray-500"> | {item.reviews} reviews</span>
              </div>

              <Link href={`/mentoring-details/${item.id}`}>
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
