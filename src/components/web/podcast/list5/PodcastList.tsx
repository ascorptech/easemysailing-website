"use client";
import { GetPodcastList } from "@/app/(web)/podcast-list/Services/podcastService";
import React, { useEffect, useState } from "react";



const PodcastList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of items per pag
  const [podcasts, setPodcasts] = useState<any>([])

  useEffect(() => {
    GetPodcastList(GetPodcastListCB)
  }, [])

  const GetPodcastListCB = (res: any) => {
    setPodcasts(res?.data)
  }


  // Calculate total pages
  const totalPages = Math.ceil(podcasts?.length / itemsPerPage);

  // Get items for the current page
  const currentItems = podcasts?.slice(
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

  const getEmbedUrl = (videoLink: string) => {
    const videoIdMatch = videoLink?.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))([^?&]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : '';
  };

  return (
    <div>

      <div className=" lg:h-[500px] mb-8">
        <iframe
          width="100%"
          height="100%"
          src={getEmbedUrl(currentItems[0]?.videoLink )|| ''}
          title={currentItems[0]?.title || 'Video Player'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

      </div>

      <div className="grid lg:grid-cols-3 lg:gap-5 lg:py-4 grid-cols-1  gap-5 lg:mt-5 mt-3 sm:grid-cols-2 ">
        {currentItems?.map((item: any, index: any) => (
          <div
            key={index}
            className="w-full border-4 rounded-lg border-black mb-8  h-[200px]"
          >
            <>{console.log('check',item?.videoLink)}</>
            <iframe
              width="100%"
              height="100%"
              src={getEmbedUrl(item?.videoLink) || ''}
              title={item?.title || 'Video Player'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            {/* <p className="flex justify-center my-1"> */}
            <p className="text-center my-1">
              {item?.title}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center text-sm mt-4 mb-4">
        <button
          onClick={handlePreviousPage}
          className="px-2 py-1 mr-2 bg-[#00A264] text-white rounded-lg"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-[#00A264]">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          className="px-2 py-1 ml-2 bg-[#00A264] text-white rounded-lg"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PodcastList;
