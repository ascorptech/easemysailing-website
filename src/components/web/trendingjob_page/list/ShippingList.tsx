"use client";
import Image from "next/image";
// /components/ShippingList.tsx
import React, { useState } from "react";

interface ShippingCardProps {
  name: string;
  reviews: string;
  rating: string;
  contactPerson: string;
  logoSrc: string;
}

const ShippingList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18; // Number of items per page

  // Data
  const shippingData: ShippingCardProps[] = [
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      contactPerson: "Sherry Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo1.png",
    },
    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      contactPerson: "Aline Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo2.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo3.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo4.png",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo5.png",
    },
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      contactPerson: "Sherry Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo1.png",
    },
    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      contactPerson: "Aline Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo2.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo3.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo4.png",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo5.png",
    },
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      contactPerson: "Sherry Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo1.png",
    },
    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      contactPerson: "Aline Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo2.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo3.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo4.png",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo5.png",
    },
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      contactPerson: "Sherry Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo1.png",
    },
    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      contactPerson: "Aline Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo2.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo3.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo4.png",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo5.png",
    },
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      contactPerson: "Sherry Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo1.png",
    },
    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      contactPerson: "Aline Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo2.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo3.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo4.png",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo5.png",
    },
    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      contactPerson: "Aline Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo2.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo3.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo4.png",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo5.png",
    },
    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      contactPerson: "Aline Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo2.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo3.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo4.png",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo5.png",
    },
    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      contactPerson: "Aline Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo2.png",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      contactPerson: "Robin",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo3.png",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      contactPerson: "John Smith",
      //   description: "Lorem Ipsum is simply dummy text of the printing",
      logoSrc: "/images/logo4.png",
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
      <div className="grid grid-cols-1 ml-[1rem] sm:grid-cols-2 md:grid-cols-3 gap-4 py-3 ">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border h-[11rem] rounded-lg p-3 ml-[1rem] shadow-md flex-shrink-0 w-80 "
          >
            <h3 className="flex justify-between  items-center text-base font-semibold mb-2">
              {item.name}
              <div className="justify-center mb-4">
                <Image
                width={40}
                height={40}
                priority
                  src={item.logoSrc}
                  alt={`${item.name} logo`}
                  className="h-8"
                />
              </div>
            </h3>
            <div className="text-sm mb-2">
              <span className="text-yellow-500">⭐ {item.rating}</span>
              <span className="text-gray-500"> | {item.reviews} reviews</span>
            </div>
            <div className="text-gray-700 font-base">{item.contactPerson}</div>

            <button className="h-8 mt-2 bg-green-600 text-white py-1 px-4 rounded-lg text-sm">
              Apply
            </button>
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

export default ShippingList;
