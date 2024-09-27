
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
import React, { useRef, useEffect } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const Islide = () => {
  const card = useRef<HTMLDivElement>(null);

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

  // return (
  //   <div className="relative overflow-x-hidden  mt-7 pb-4 lg:pb-0 flex justify-center items-center lg:items-center w-full lg:w-[83%] xl:w-[82%] 2xl:w-[85%] md:w-[94%] px-1 sm:px-0 lg:px-0 lg:mx-[110px] ">

  //     <button 
  //       onClick={scrollLeft} 
  //       className="absolute left-0 top-20  md:hidden bg-white p-[5px] rounded-full shadow-md"
  //       aria-label="Scroll Left"
  //     >
  //       <IoMdArrowBack />
  //     </button>

  //     <div
  //       ref={card}
  //       className="w-[289px] sm:w-full sm:ml-0 flex overflow-x-scroll  no-scrollbar scroll-smooth snap-x snap-mandatory gap-1 lg:gap-[33px] 2xl:space-x-14"
  //     >
  //       <div className="snap-center ">
  //         <div className="w-[18rem]  h-[12rem] sm:ml-0 lg:w-[18rem] xl:w-[16.8rem] 2xl:w-[18rem] lg:h-[220px]">
  //           <iframe
  //             className="w-full border-4 shadow-md rounded-lg h-full"
  //             src="https://www.youtube.com/embed/afKjXPA5f0E"
  //             title="YouTube video player"
  //             frameBorder="0"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //             allowFullScreen
  //           ></iframe>
  //         </div>
  //       </div>
  //       <div className="snap-center">
  //         <div className="w-[18rem] h-[12rem] lg:w-[18rem] xl:w-[16.8rem] 2xl:w-[18rem] lg:h-[220px]">
  //           <iframe
  //             className="w-full border-4 shadow-md rounded-lg h-full"
  //             src="https://www.youtube.com/embed/roz9sXFkTuE"
  //             title="YouTube video player"
  //             frameBorder="0"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //             allowFullScreen
  //           ></iframe>
  //         </div>
  //       </div>
  //       <div className="snap-center">
  //         <div className="w-[18rem] h-[12rem] lg:w-[18rem] xl:w-[16.8rem] 2xl:w-[18rem] lg:h-[220px]">
  //           <iframe
  //             className="w-full border-4 shadow-md rounded-lg h-full"
  //             src="https://www.youtube.com/embed/Tl4bQBfOtbg"
  //             title="YouTube video player"
  //             frameBorder="0"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //             allowFullScreen
  //           ></iframe>
  //         </div>
  //       </div>
  //       <div className="snap-center">
  //         <div className="w-[18rem] h-[12rem] lg:w-[18rem] xl:w-[16.8rem] 2xl:w-[18rem] lg:h-[220px]">
  //           <iframe
  //             className="w-full border-4 shadow-md rounded-lg h-full"
  //             src="https://www.youtube.com/embed/VYslt8bc-4Q"
  //             title="YouTube video player"
  //             frameBorder="0"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //             allowFullScreen
  //           ></iframe>
  //         </div>
  //       </div>
  //     </div>

  //     <button 
  //       onClick={scrollRight} 
  //       className="absolute right-0 top-20 md:hidden bg-white p-[5px] rounded-full shadow-md"
  //       aria-label="Scroll Right"
  //     >
  //       <IoMdArrowForward />
  //     </button>
  //   </div>
  // );
  return (<div className="container mx-auto">
    <button
      onClick={scrollLeft}
      className="absolute left-0 top-20  md:hidden bg-white p-[5px] rounded-full shadow-md"
      aria-label="Scroll Left"
    >
      <IoMdArrowBack />
    </button>
    <div ref={card} className=" grid grid-rows-1 grid-cols-4 gap-10">
        <div className="md:w-[9rem] lg:w-[14rem] xl:w-[17.8rem]">
          <iframe
            className="w-full border-4 shadow-md rounded-lg h-full"
            src="https://www.youtube.com/embed/Tl4bQBfOtbg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-[9rem] lg:w-[14rem] xl:w-[17.8rem]">
          <iframe
            className="w-full border-4 shadow-md rounded-lg h-full"
            src="https://www.youtube.com/embed/Tl4bQBfOtbg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-[9rem] lg:w-[14rem] xl:w-[17.8rem]">
          <iframe
            className="w-full border-4 shadow-md rounded-lg h-full"
            src="https://www.youtube.com/embed/Tl4bQBfOtbg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-[9rem] lg:w-[14rem] xl:w-[17.8rem]">
          <iframe
            className="w-full border-4 shadow-md rounded-lg h-full"
            src="https://www.youtube.com/embed/Tl4bQBfOtbg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
    </div>
    <button
      onClick={scrollRight}
      className="absolute right-0 top-20 md:hidden bg-white p-[5px] rounded-full shadow-md"
      aria-label="Scroll Right"
    >
      <IoMdArrowForward />
    </button>
  </div>)
};

export default Islide;
