"use client";
import React, { useState } from "react";
import Link from "next/link";

interface ShippingCardProps {
  id: string;
  name: string;
  description: string;
  reviews: string;
  rating: string;
  contactPerson: string;
  logoSrc: string;
}

const MentoringList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  const shippingData: ShippingCardProps[] = [
    {
      id: "1",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain.png",
    },
    {
      id: "2",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain2.png",
    },
    {
      id: "3",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain.png",
    },
    {
      id: "4",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain2.png",
    },
    {
      id: "5",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain.png",
    },
    {
      id: "6",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain2.png",
    },
    {
      id: "7",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain.png",
    },
    {
      id: "8",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain2.png",
    },
    {
      id: "9",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain.png",
    },
    {
      id: "10",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain2.png",
    },
    {
      id: "11",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain.png",
    },
    {
      id: "12",
      name: "Williams",
      description: "Captain Mariner, Director of Operation",
      contactPerson: "MBA-IIM (A)",
      reviews: "5k+",
      rating: "4.8",
      logoSrc: "/images/captain2.png",
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
      <div className="grid grid-cols-1 ml-[1rem] sm:grid-cols-1 md:grid-cols-2 gap-4 py-3 ">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="flex bg-white border h-[11rem] rounded-lg p-3 ml-[1rem] shadow-md flex-shrink-0 w-auto "
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
              <h3 className="flex justify-between  items-center text-base font-semibold mb-2">
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

              <Link href={`/mentordetails/${item.id}`}>
                <button className="h-8 mt-2 bg-green-600 text-white py-1 px-4 rounded-lg text-sm">
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

export default MentoringList;
