"use client";
import React from "react";
import Link from "next/link";
import ArticlesCard from "./ArticlesCard";

const Articles = () => {
  
  return (
    <div className=" w-[95%]  mx-2 px-1 md:mx-6 lg:w-full lg:mx-0 sm:mx-5">
      <div className="flex items-center justify-between mt-2 pt-2 lg:mr-[9rem] md:mx-[6.8rem]">
        <div className="text-[21px] leading-[28px] font-bold sm:text-4xl lg:ml-0">
          <h1>
            <span className="text-white">LATEST NEWS & </span>
            <span className="text-[#00A264]">ARTICLES</span>
          </h1>
        </div>

        <div>
          <Link
            href="/trendingjob"
            className="h-8 bg-[#00A264] text-white py-2 px-4 rounded-full text-sm"
          >
            View All
          </Link>
        </div>
      </div>

      {/* Adjusted ArticlesCard container to align with "Latest" */}
      <ArticlesCard />
    </div>
  );
};

export default Articles;
