"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ResourceCardProps, Resource } from "../data/resources";
import Heading7 from "@/components/p7resource/heading7/Heading7";

const ResourceList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of items per page

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
    <div>
      <Heading7 />
      <div className="mt-6 max-w-[90%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-1 py-3 -black ml-20 ">
        {Resource.map((item) => (
          <div key={item.id} className="flex  bg-white p-4 flex-shrink-0 ">
            <div className="relative bg-white border rounded-lg p-5  shadow-md  w-auto ">
              <div className=" flex mb-2">
                <img
                  src={item.logoSrc}
                  alt={`${item.title} logo`}
                  className="w-full h-auto"
                />
                
              </div>
              <div className="absolute mt-[-2rem] bg-green-700 text-white font-semibold ">
                  <h3>{item.date}</h3>
                </div>

              <div className="text-sm mb-2">
                <span className="text-black-500 font-semibold"> {item.title}</span>
              </div>
              <div className="text-gray-500 text-sm text-justify">
                {" "}
                {item.discription}{" "}
              </div>

              <Link href={`/p7resource/${item.id}`}>
                <button className="h-8 mt-2 bg-green-700 text-white py-1 px-4 rounded-lg text-sm">
                  Read more
                </button>
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

export default ResourceList;
