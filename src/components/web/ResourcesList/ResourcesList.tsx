"use client";
import { GetResourcesList } from '@/app/(web)/resources/Services/resourceService';
import React, { useEffect, useState } from 'react'
import Heading7 from '../resource_page/heading7/Heading7';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import RotateLoader from "react-spinners/RotateLoader";

type Props = {}

const ResourcesList = (props: Props) => {
    const [resourcesList,setResourcesList] = useState<any>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading,setIsLoading] = useState<boolean>(false)
    const limit = 100;
  const itemsPerPage = 6; // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(resourcesList.length / itemsPerPage);

  // Get items for the current page
  const currentItems = resourcesList.toReversed().slice(
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

    useEffect(() => {
      setIsLoading(true)
      GetResourcesList(fetchResources)
    }, [])
  
    const fetchResources=(result:any)=>{
      setResourcesList(result.data);
      setIsLoading(false)
    }
  return (
    <React.Fragment>
    {isLoading?(<div className="h-[500px] w-full mt-[100px] justify-center flex items-center">
      <RotateLoader
      color={'#00A264'}
      loading={isLoading}
      size={10}
      />
    </div>):( <div className="">
      <Heading7 />
      <div className="mt-2 w-[97.2%] xl:w-[87%] mx-auto flex sm:flex-row flex-col border shadow-md rounded-md">
        <div className="flex sm:w-[50%] w-full p-4">
          <div className="relative w-full border">
            <Image
              src={currentItems[0]?.imageUrl?`data:image/png;image/jpg;image/jpeg;base64,${currentItems[0]?.imageUrl}`:"/images/captain4.jpeg"}
              alt="image not found"
              width={900}
              height={900}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute px-2 sm:md:mt-[-1.5rem] mt-[-1.5rem] bg-green-700 text-white font-semibold ">
              <h3>{moment(currentItems[0]?.createdDate).format('YYYY-MM-DD')}</h3>
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] w-full flex flex-col p-4">
          <h2 className="text-black-500  font-bold">
            {currentItems[0]?.title}
          </h2>
          <p className="text-gray-500 text-sm text-justify ">
            {currentItems[0]?.description?.replace(/<[^>]+>/g, '').slice(0, 1000)}
          </p>
          <Link
            href={`/resources/${currentItems[0]?.id}`}
            className="h-8 lg:w-[25%] xl:w-[20%] w-[40%] mt-2 bg-green-700 text-white py-1 px-4 rounded-lg text-sm justify-center items-center flex "
          >
            Read more
          </Link>
        </div>
      </div>
      <div className="mt-2 container mx-auto sm:grid sm:grid-row-2 sm:grid-cols-3 ">
        {currentItems?.map((item:any) => (
          <div key={item?.id} className="flex bg-white p-3 flex-shrink-0 ">
            <div className="relative bg-white border rounded-lg md:p-5 p-2  shadow-md  w-auto ">
              <div className=" flex mb-2">
                <Image
                  src={item?.imageUrl?`data:image/png;image/jpg;image/jpeg;base64,${item?.imageUrl}`:"/images/captain4.jpeg"}
                  alt={`${item.title} logo`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute px-2 mt-[-2rem] bg-green-700 text-white font-semibold ">
                <h3>{moment(item?.createdDate).format('YYYY-MM-DD')}</h3>
              </div>

              <div className="text-sm mb-2">
                <span className="text-black-500 font-semibold">
                  {" "}
                  {item?.title}
                </span>
              </div>
              <div className="text-gray-500 text-sm text-justify mb-2">
                {" "}
                {item?.description?.replace(/<[^>]+>/g, '').slice(0, limit)}{" "}
              </div>

              <Link
                href={`/resources/${item?.id}`}
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
    </div>)}
    </React.Fragment>
  )
}

export default ResourcesList