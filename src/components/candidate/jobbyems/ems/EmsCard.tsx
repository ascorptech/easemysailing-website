"use client";
// /components/ShippingList.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";

interface ShippingCardProps {
  name: string;
  reviews: string;
  rating: string;
  contactPerson: string;
  startSrc: string;
  logoSrc: string;
  duration: string;
  days: string;
  dollerSrc: string;
  doller: string;
}

interface EmsCardProps {
  currentPage: number;
  itemsPerPage: number;
  onTotalItems: (total: number) => void;
}

const EmsCard: React.FC<EmsCardProps> = ({
  currentPage,
  itemsPerPage,
  onTotalItems,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 6; // Number of items per page

  // Data
  const shippingData: ShippingCardProps[] = [
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: "Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo1.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },

    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: "Tanker",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo2.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: "Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo3.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo4.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo5.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: "Sherry Smith",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo1.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },

    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo4.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo5.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: "Robin",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo3.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: "Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo1.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },

    {
      name: "CMA CGM Group",
      reviews: "2k+",
      rating: "3.9",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: "Tanker",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo2.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: "Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo3.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo4.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo5.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "AP Moller-Maersk",
      reviews: "5k+",
      rating: "4.8",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: "Sherry Smith",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo1.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },

    {
      name: "V. Ships",
      reviews: "2k+",
      rating: "3.8",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo4.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "COSCO Shipping",
      reviews: "2k+",
      rating: "4.6",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: " Bulk",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo5.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
    {
      name: "Teekay Corporation",
      reviews: "1k+",
      rating: "3.6",
      startSrc: "/images/candidate/profileCv/star-rate.png",
      contactPerson: "Robin",
      duration: "Contact Duration: ",
      days: "6 days ago",
      logoSrc: "/images/logo3.png",
      dollerSrc: "/images/candidate/profileCv/doller.png",
      doller: "$123 - $456",
    },
  ];

  // Calculate total pages
  // const totalPages = Math.ceil(shippingData.length / itemsPerPage);

  // Pass total items back to the parent
  useEffect(() => {
    onTotalItems(shippingData.length); // Update the total number of items
  }, [shippingData.length, onTotalItems]);

  // Get items for the current page
  const currentItems = shippingData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // const handleNextPage = () => {
  //   if (currentPage < totalPages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handlePreviousPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  return (
    <div>
      <div className="grid grid-cols-1   gap-5 py-2 -z-10 ">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className={`border rounded-md px-3 pt-3 pb-4 shadow-lg flex-shrink-0  ${
              index === 0 ? "bg-[#D6EEEE]" : "bg-white"
            }`}
          >
            <div className="flex relative justify-between items-center ">
              <h3 className="  text-base font-semibold ">{item.name}</h3>
              <div className="flex absolute top-0 right-3 justify-center items-center h-[61px] w-[76px] border shadow-md rounded-md mt-3 p-1  bg-white ">
                <Image
                  priority
                  src={item.logoSrc}
                  width={100}
                  height={100}
                  alt={`${item.name} logo`}
                  className="h-full w-full object-contain z-0"
                />
              </div>
            </div>

            <div className="text-[#4E4E4E]  text-[16px] leading-[24px]">
              <span className="text-[#00A264] text-sm">Captain, </span>
              {item.contactPerson}
            </div>

            <div className="text-sm gap-6 flex my-2 items-center">
              <div className="flex gap-2">
                {" "}
                <Image
                  priority
                  src={item.startSrc}
                  alt=""
                  width={500}
                  height={500}
                  className="object-contain w-[18px] h-[18px]"
                />
                <p className="font-semibold text-[15px] leading-[21px]">
                  {item.rating}
                  <span className="font-normal text-[15px] leading-[18px] ml-2">
                    | {item.reviews} reviews
                  </span>
                </p>
              </div>

              <div className="flex gap-2 items-center">
                <div className="flex gap-2">
                  {" "}
                  <Image
                    priority
                    src={item.dollerSrc}
                    alt=""
                    width={500}
                    height={500}
                    className="object-contain w-[18px] h-[18px]"
                  />
                  <span className=" text-[15px] leading-[18px] ml-1 text-[#4E4E4E]`">
                    {item.doller}
                  </span>
                </div>
                {/* <span className="text-[#00A264] text-lg">
                  <FaSackDollar />
                </span>
                <span>$123 - $456</span> */}
              </div>
            </div>
            <div className="flex justify-between mr-4 pt-1 items-center">
              <Link
                href="#"
                onClick={() => setIsModalOpen(true)}
                className=" bg-[#00A264] text-[14px] leading-[21px] text-white py-2 px-8 rounded-md text-sm"
              >
                Apply
              </Link>
              <span className=" text-[#000000] font-semibold text-[14px] leading-[19.07px] ">
                {item.duration}
                <span className="text-[#4E4E4E]">6 Months</span>
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

      {/* Modal Logic */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white  p-2 pt-4 rounded-lg shadow-lg relative flex items-center justify-center flex-col w-[330px]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
            <div className=" w-20 h-20 flex items-center justify-center  rounded-full  bg-[#D1FEE4]">
              <div className="w-16 h-16">
                <Image
                  priority
                  width={500}
                  height={500}
                  src="/images/candidate/profileCv/successfully.png" // Update this path to your image
                  alt="Center Image"
                  className="mx-auto mb-4 w-full h-full"
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4 text-center">
                Applied Successfully
              </h2>

              <p className="text-center">
                You have applied successfully for Maersk Line. For status of
                your applications, Refer to{" "}
                <span className="text-[#00A264]"> My Job Applications.</span>
              </p>
            </div>

            {/* <div className=""> */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#00A264] w-full rounded-md  text-white py-2 px-4 my-3"
            >
              OK
            </button>
            {/* <button
                onClick={() => setIsModalOpen(false)} 
                className="bg-gray-300 text-black py-2 px-4 rounded"
              >
                Close
              </button> */}
            {/* </div> */}
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      {/* <div className="flex justify-center items-center text-sm mt-5 mb-4">
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
      </div> */}
    </div>
  );
};

export default EmsCard;
