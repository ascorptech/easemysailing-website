"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PartnerCardProps, Partner } from "../data/Partner";
import Heading5 from "@/components/web/our_partner/heading5/Heading5";
const PartnerList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(Partner.length / itemsPerPage);

  // Get items for the current page
  const currentItems = Partner.slice(
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
      <Heading5 />
      <div className="mt-6 max-w-[90%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-1 py-3 -black ml-20 text-center">
        {Partner.map((item) => (
          <div key={item.id} className="flex  bg-white p-4 flex-shrink-0  ">
            <div className="bg-white border rounded-lg py-4 px-2 shadow-md  w-auto ">
              <div className="flex justify-center mb-2">
                <img
                  src={item.logoSrc}
                  alt={`${item.name} logo`}
                  className="h-12"
                />
              </div>
              <h3 className="text-base font-semibold mb-2">{item.name}</h3>
              <div className="text-sm mb-2">
                <span className="text-yellow-500">⭐ {item.rating}</span>
                <span className="text-gray-500"> | {item.reviews} reviews</span>
              </div>
              <div className="text-gray-700 mb-2 font-base">
                {item.contactPerson}
              </div>
              <p className="text-gray-500 text-sm text-wrap">
                {item.description}
              </p>
              <Link href={`/partner_details/${item.id}`}>
                <button className="h-8 mt-2 bg-green-600 text-white py-1 px-4 rounded-lg text-sm">
                  View Profile
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

export default PartnerList;
