
"use client";
// import { Images } from "lucide-react";
// import Image from "next/image";
import React from "react";
import Link from "next/link";
import ArticlesCard from "./ArticlesCard";


const Articles  =() => {

  return (
    // <section className="mt-7 w-[94%] sm:mx-5  md:mx-6 lg:w-full lg:mx-0 border-2 border-red-500 ">
    // <div className="mt-7 w-[94%] mx-3 px-1   md:mx-6 lg:w-full lg:mx-0 sm:mx-5">
    //   <div className="flex items-center justify-between mt-3 pt-4 lg:mr-[8%] md:mx-[3rem] ">
    //     <div className="font-bold text-2xl lg:ml-[5rem] ">
    <div className="mt-7 w-[94%] mx-3 px-1   md:mx-6 lg:w-full lg:mx-0 sm:mx-5">
    <div className="flex items-center justify-between mt-4 pt-4 lg:mr-[8%] md:mx-[3rem]">
        <div className="font-bold text-2xl lg:ml-[4rem]">
          <h1>
            <span className="text-[#00A264]">Latest</span>{" "}
            <span>News & Articles</span>
          </h1>
        </div>
        <Link href="/resources">
          <button className="h-8 bg-[#00A264] text-white mb-2 py-1 px-4 rounded-lg text-sm lg:mr-6">
            View All
          </button>
        </Link>
      </div>

     <ArticlesCard/>
      
      
    </div>
  );
};

export default Articles;
