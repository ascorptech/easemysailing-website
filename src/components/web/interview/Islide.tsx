
//   return (
//     <div className="overflow-x-scroll no-scrollbar mt-7  lg:items-center  scroll-smooth snap-mandatory space-x-0 lg:space-x-8  flex flex-col sm:flex-row w-full lg:w-[83%] md:w-[94%] px-1 sm:px-0 lg:px-0 lg:mx-[110px] mx-auto">
//       {article.map((card) => (
//         <div
// className="w-full sm:w-[16.4rem] lg:w-[19.3rem] 2xl:w-[19.5rem] rounded mb-7 shadow-lg "
//           key={card?.id}
//         >
//           <div className="relative  lg:h-[12rem]">
//             <Image
//             priority
//               className="w-full h-full"
//               width={500}
//               height={50}
//               src={card.logoSrc}
//               alt="Sunset in the mountains"
//             />
//             <div className="absolute mt-[-2rem] sm:mt-[-2.5rem] bg-green-700 text-white font-semibold px-2 py-1 lg:px-3 lg:py-2">
//               <h3 className="text-base">{card.date}</h3>
//             </div>
//           </div>
// <div className="px-2 sm:px-2 bg-white py-2">
//             <p className="text-black text-justify text-[9px] mr-1">
// {card?.title} {card?.title}{" "}
//               <Link href="#" className="text-[#00A264] ">
//                 Read More
//               </Link>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
"use client";
import { GetRecentPodcast } from "@/app/(web)/Services/homeService";
import React, { useRef, useEffect, useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import { RxCrossCircled } from "react-icons/rx";

const Islide = () => {
  const card = useRef<HTMLDivElement>(null);
  const [podcasts, setPodcasts] = useState<any>([])
  const [selected, setSelected] = useState<any>();
  const [ModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    GetRecentPodcast((res: any) => {
      console.log(res);
      if (res?.status == 200) {
        setPodcasts(res?.data)
      }
    })
  }, [])


  const scrollLeft = () => {
    if (card.current) {
      card.current.scrollBy({ left: -288, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (card.current) {
      card.current.scrollBy({ left: 288, behavior: "smooth" });
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      scrollLeft();
    } else if (event.key === "ArrowRight") {
      scrollRight();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

  return (<div className="relative flex items-center justify-center mx-2 md:mx-4 lg:mx-0 my-4">
    <button
      onClick={scrollLeft}
      className="absolute left-0 top-20 sm:hidden bg-white p-[5px] rounded-full shadow-md"
      aria-label="Scroll Left"
    >
      <IoMdArrowBack />
    </button>
    {/* <div ref={card} className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory w-[90%] mx-auto sm:mx-0 sm:w-full sm:grid sm:grid-rows-1 sm:grid-cols-4 gap-2 sm:gap-10"> */}
    {/* {podcasts?.length?<div ref={card}
     className="flex flex-row gap-10 overflow-x-scroll">
      {podcasts?.map((item: any, index: any) => (
         <div
         key={index}
         className="snap-center flex flex-col items-center w-[20rem] sm:w-[16rem] mx-auto"
       >
          <Image
            key={item?.id}
            src={`data:image/png;image/jpg;image/jpeg;base64,${item?.thumbnail}`}
            alt={item?.title}
            width={5000}
            height={5000}
            priority
            className="h-full w-[20rem] rounded-md mb-10 border border-gray-600 shadow-sm"
            onClick={() => openModal(item)}
          />
       </div>
      ))}

    </div>:<div className="w-full h-52 flex justify-center items-center">
      <span className="text-[#00A264] text-2xl">No Content Found!</span>
      </div>} */}
      {podcasts?.length? <div
        ref={card}
        className="flex overflow-x-scroll no-scrollbar w-[90%] mx-auto sm:mx-0 sm:w-full sm:grid sm:grid-rows-1 sm:grid-cols-4 gap-2 sm:gap-10">
      {/* <div
        ref={cardRef}
        className="flex flex-row space-x-4 overflow-auto"> */}
        {podcasts?.map((item: any) => (
          // <div
          //   className="mb-10 h-full w-full"
          //   key={item.id}
          // >
            // <div className="w-full h-40">
              <Image
                src={item?.imageUrl ? `data:image/png;image/jpg;image/jpeg;base64,${item?.imageUrl}` : "/images/captain4.jpeg"}
                alt={`${item.title} logo`}
                width={5000}
                height={5000}
                className="h-full w-full rounded-sm"
              />
            // </div>
          // </div>
        ))}
      </div>:<div className="w-full h-52 flex justify-center items-center">
      <span className="text-[#00A264] text-2xl">No Content Found!</span>
      </div>}
    <button
      onClick={scrollRight}
      className="absolute right-0 top-20 sm:hidden bg-white p-[5px] rounded-full shadow-md"
      aria-label="Scroll Right"
    >
      <IoMdArrowForward />
    </button>
    {/* Popup */}
    {ModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-10">
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
  </div>)
  
};

export default Islide;
