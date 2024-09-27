"use client";
import { GetPodcastList } from "@/app/(web)/podcast-list/Services/podcastService";
import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";

const PodcastList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [podcasts, setPodcasts] = useState<any>([]);
  const [selected, setSelected] = useState<any>();
  const [ModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    GetPodcastList(GetPodcastListCB);
  }, []);

  const GetPodcastListCB = (res: any) => {
    setPodcasts(res?.data);
    setSelected(res?.data[0]);
  };

  const totalPages = Math.ceil(podcasts?.length / itemsPerPage);
  const currentItems = podcasts.toReversed()?.slice(
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
    const videoIdMatch = videoLink?.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=))([^?&]+)/
    );
    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : "";
  };

  const openModal = (item: any) => {
    setSelected(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="lg:h-[500px] h-[220px] mb-8">
        {/* <iframe
          width="100%"
          height="100%"
          src={getEmbedUrl(selected?.videoLink) || ''}
          title={selected?.title || 'Video Player'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        <Image
          src={`data:image/png;image/jpg;image/jpeg;base64,${selected?.thumbnail}`}
          alt={selected?.title}
          width={100}
          height={100}
          priority
          className="h-full w-full rounded-sm"
        />
      </div>

      <div className="grid lg:grid-cols-3 lg:gap-5 lg:py-4 grid-cols-1 gap-5 lg:mt-5 mt-3 sm:grid-cols-2">
        {currentItems?.map((item: any, index: any) => (
          <div
            key={index}
            className="w-full border-4 rounded-lg border-black mb-8 h-[200px]"
            onClick={() => openModal(item)}
          >
            <Image
              src={`data:image/png;image/jpg;image/jpeg;base64,${item?.thumbnail}`}
              alt={item?.title}
              width={100}
              height={100}
              priority
              className="h-full w-full rounded-sm"
            />
            <h6 className="text-center my-1 cursor-pointer">{item?.title}</h6>
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

      {/* Popup */}
      {ModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white  rounded-lg overflow-hidden shadow-lg">
            <div className="h-[15rem] w-[22rem] lg:w-[50rem]  lg:h-[500px] relative">
              <iframe
                width="100%"
                height="100%"
                src={getEmbedUrl(selected?.videoLink)}
                title={selected?.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={closeModal}
                className="absolute  top-2 right-2 text-red-500  rounded-full "
              >
                <RxCrossCircled className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastList;
