"use client";
import { GetPodcastList } from "@/app/(web)/podcast-list/Services/podcastService";
import React, { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";
import RotateLoader from "react-spinners/RotateLoader";

const PodcastList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  // const itemsPerPage = 12;
  const [podcasts, setPodcasts] = useState<any>([]);
  const [selected, setSelected] = useState<any>();
  const [ModalOpen, setModalOpen] = useState(false);
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [resourcesPerPage,setResourcesPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1)


  useEffect(() => {
    setIsLoading(true)
    GetPodcastList(currentPage,resourcesPerPage,fetchPodcast)
  }, [])

  const fetchPodcast = (result: any) => {
    if (result?.status == 200) {
      setPodcasts(result?.data?.content);
      setSelected(result?.data?.content[0]);
      setTotalPages(result.data?.totalPages)
    }
    else {
      setPodcasts([])
      // toast.success('No Record Found')
    }
    setIsLoading(false)
  }

  // const currentItems = podcasts?.length?podcasts?.toReversed()?.slice(
  //   (currentPage - 1) * resourcesPerPage,
  //   currentPage * resourcesPerPage
  // ):[];

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      GetPodcastList(currentPage+1,resourcesPerPage,fetchPodcast)

    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      GetPodcastList(currentPage-1,resourcesPerPage,fetchPodcast)
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
    <React.Fragment>
    {isLoading?(<div className="h-[500px] w-full mt-[100px] justify-center flex items-center">
      <RotateLoader
      color={'#00A264'}
      loading={isLoading}
      size={10}
      />
    </div>):( 
    <React.Fragment>{podcasts?.length?<div className="w-full">
      <div className="lg:h-[500px] h-[220px] shadow-md rounded-lg mb-8 cursor-pointer" onClick={() => openModal(podcasts[0])}>
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
          src={`data:image/png;image/jpg;image/jpeg;base64,${podcasts[0]?.thumbnail}`}
          alt={podcasts[0]?.title}
          width={100}
          height={100}
          priority
          className="h-full w-full rounded-sm"
        />
      </div>

      <div className="grid lg:grid-cols-3 lg:gap-5 lg:py-4 grid-cols-1 gap-5 lg:mt-5 mt-3 sm:grid-cols-2">
        {podcasts?.map((item: any, index: any) => (
         <div key={index} className="flex flex-col shadow-md w-full border-2 rounded-lg mb-8 cursor-pointer"
         onClick={() => openModal(item)}
         >
          <Image
            src={`data:image/png;image/jpg;image/jpeg;base64,${item?.thumbnail
              }`}
              alt={item?.title}
              width={100}
              height={100}
              priority
              className="h-full w-full rounded-sm"
              />
              <h6 className="text-center cursor-pointer">{item?.title}</h6>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 items-center mt-4">
        <button
          onClick={previousPage}
          className="bg-[#00A264] text-white px-4 py-2 rounded"
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span>
          Page {currentPage+1} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          className="bg-[#00A264] text-white px-4 py-2 rounded"
          disabled={currentPage+1 >= totalPages}
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
    </div>:<div className='flex justify-center items-center h-[35rem] w-full shadow-md rounded-md border'>
      <span className="text-center text-[46px] leading-[69px] text-[#00000] font-bold">Something Exciting Comming Soon <span className='text-[#00A264]'>Stay Tuned!</span></span>
      </div>}</React.Fragment>
    )}
    </React.Fragment>
  );
};

export default PodcastList;
