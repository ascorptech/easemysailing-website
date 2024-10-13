"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { GetRecentResources } from "@/app/(web)/Services/homeService";
import moment from "moment";

interface ArticleProps {
  id: string;
  date: string;
  title: string;
  logoSrc: string;
}

const ArticlesCard = () => {
  const [articles, setArticles] = useState<any>([])

  useEffect(() => {
    GetRecentResources((res: any) => {
      if (res?.status == 200) {
        setArticles(res?.data)
      }
    })
  }, [])

  // const articles: ArticleProps[] = [
  //   {
  //     id: "1",
  //     logoSrc: "/images/article1.png",
  //     date: "27-01-2024",
  //     title: "Lorem Ip sum is simply dummy text of the printing.",
  //   },
  //   {
  //     id: "2",
  //     logoSrc: "/images/r2.png",
  //     date: "27-01-2024",
  //     title: "Lorem Ip sum is simply dummy text of the printing.",
  //   },
  //   {
  //     id: "3",
  //     logoSrc: "/images/article3.png",
  //     date: "27-01-2024",
  //     title: "Lorem Ip sum is simply dummy text of the printing.",
  //   },
  //   {
  //     id: "4",
  //     logoSrc: "/images/article4.png",
  //     date: "27-01-2024",
  //     title: "Lorem Ip sum is simply dummy text of the printing.",
  //   },

  // ];

  const cardRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({ left: -292, behavior: "smooth" }); // Adjust for 4 cards
    }
  };

  const scrollRight = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({ left: 292, behavior: "smooth" }); // Adjust for 4 cards
    }
  };

  return (
    <div className="container mx-auto relative">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-28  hidden bg-white p-[5px] rounded-full shadow-md"
        aria-label="Scroll Left"
      >
        <IoMdArrowBack />
      </button>

      {articles?.length? <div
        ref={cardRef}
        className="overflow-auto w-[90%] mx-auto sm:mx-0 sm:w-full sm:grid sm:grid-rows-1 sm:grid-cols-4 gap-2 sm:gap-10">
      {/* <div
        ref={cardRef}
        className="flex flex-row space-x-4 overflow-auto"> */}
        {articles?.map((item: any) => (
          <div
            className="mb-10 h-full w-full"
            key={item.id}
          >
            <div className="w-full">
              <Image
                src={item?.imageUrl ? `data:image/png;image/jpg;image/jpeg;base64,${item?.imageUrl}` : "/images/captain4.jpeg"}
                alt={`${item.title} logo`}
                width={500}
                height={500}
                className="h-full w-full rounded-sm"
              />
              <div className="absolute mt-[-1.5rem] sm:mt-[-2.5rem] bg-[#00A264] text-white lg:font-semibold px-2 py-1 lg:px-3 lg:py-2">
                <h3 className=" text-xs lg:text-base ">{moment(item?.createdDate).format('YYYY-MM-DD')}</h3>
              </div>
            </div>
            <div className="px-2 sm:px-2 bg-white py-2 flex flex-col">
              <span className="text-black text-justify text-[10px] lg:text-[10px]">
                {item?.title}{" "}
              </span>
              <Link href={`resources-blogs/${item?.title}`} className="text-[#00A264] text-sm"  onClick={()=>localStorage.setItem('resId',item?.id)}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>:<div className="w-full h-52 flex justify-center items-center">
      <span className="text-[#00A264] text-2xl">No Content Found!</span>
      </div>}

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-28 hidden bg-white p-[5px] rounded-full shadow-md"

        // className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        aria-label="Scroll Right"
      >
        <IoMdArrowForward />
      </button>
    </div>
  );
};

export default ArticlesCard;

