"use client";
// /components/ShippingList.tsx
import React, { useState } from "react";

interface ShippingCardProps {
  name: string;
  reviews: string;
  rating: string;
  contactPerson: string;
  logoSrc: string;
}

const EmsCard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Number of items per page

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
      <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 gap-4 py-3 ">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border h-[10rem] rounded-lg px-3 mx-[1rem]  shadow-inner flex-shrink-0  "
          >
            <div className="flex justify-between  items-center ">
              <h3 className="  text-base font-semibold ">
                {item.name}
              </h3>
              <div className="justify-center border shadow-md rounded-md mt-3">
                <img
                  src={item.logoSrc}
                  alt={`${item.name} logo`}
                  className="h-8"
                />
              </div>
            </div>

            <div className="text-gray-700 font-base">{item.contactPerson}</div>

            <div className="text-sm mb-2">
              <span className="text-yellow-500">⭐ {item.rating}</span>
              <span className="text-gray-500"> | {item.reviews} reviews</span>
            </div>

            <button className="h-8 mt-2 bg-green-600 text-white py-1 px-4 rounded-lg text-sm">
              Apply
            </button>
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
