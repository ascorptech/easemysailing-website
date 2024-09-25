"use client";
// /components/ShippingList.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";


interface ShippingCardProps {
  name: string;
  reviews: string;
  rating: string;
  contactPerson: string;
  logoSrc: string;
  duration: string;
  days: string;
}

const EmsCard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  // Data
  const shippingData: ShippingCardProps[] = [
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      contactPerson: "Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo1.png",
    },
    
    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      contactPerson: "Tanker",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo2.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo3.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo4.png",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo5.png",
    },
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      contactPerson: "Sherry Smith",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo1.png",
    },
  
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo4.png",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo5.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo3.png",
    },
    
  ];

  // Calculate total pages
  const totalPages = Math.ceil(shippingData.length / itemsPerPage);

  // Get items for the current page
  const currentItems = shippingData.slice(
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
      <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 gap-4 py-3 ">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border h-[9rem] rounded-lg px-3 mx-[1rem]  shadow-2xl flex-shrink-0  "
          >
            <div className="flex relative justify-between mt-3 items-center ">
              <h3 className="  text-base font-semibold ">{item.name}</h3>
              <div className="flex absolute top-0 right-3 justify-center items-center h-16 w-16 border shadow-md rounded-md mt-3">
                <Image
                priority
                  src={item.logoSrc}
                  width={100}
                  height={100}
                  alt={`${item.name} logo`}
                  className="h-10 w-10"
                />
              </div>
            </div>

            <div className="text-gray-700 font-base"><span className="text-[#00A264] text-sm">Captain, </span>{item.contactPerson}</div>

            <div className="text-sm mt-2 gap-6 flex mb-2">
              <div className="">
                <span className="text-yellow-500">⭐ {item.rating}</span>
                <span className="text-gray-500"> | {item.reviews} reviews</span>
              </div>

              <div className="flex gap-2 items-center">
                <span className="text-[#00A264] text-lg">
                  <FaSackDollar />
                </span>
                <span>$123 - $456</span>
              </div>
            </div>
            <div className="flex justify-between mr-4 pt-1 items-center">
              <Link
                href="#"
                className="h-8  bg-green-600 text-white py-1 px-4 rounded-lg text-sm"
              >
                Apply
              </Link>
              <span className="text-xs text-green-600">
                {item.duration}
                <span className="text-black">6 Months</span>
              </span>
              <span className="gap-1 items-center flex text-xs">
                <span className="text-[#00A264] text-lg">
                  <MdOutlineWatchLater />
                </span>
                {item.days}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center text-sm mt-5 mb-4">
        <button
          onClick={handlePreviousPage}
          className="px-2 py-1 mr-2 bg-green-600  text-white rounded-lg"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-green-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          className="px-2 py-1 ml-2 bg-green-600 text-white rounded-lg "
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmsCard;
