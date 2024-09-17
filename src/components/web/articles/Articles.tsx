"use client";
import React from "react";
import Link from "next/link";
import ArticlesCard from "./ArticlesCard";

const Articles = () => {
  
  return(
<div className="mt-7 w-[95%] border-2 border-red-700 mx-2 px-1 md:mx-6 lg:w-full lg:mx-0 sm:mx-5">
  <div className="flex items-center justify-between mt-4 pt-4 lg:mr-[9%] md:mx-[6.8rem]">
    <div className="text-[21px] leading-[28px] font-bold sm:text-2xl lg:ml-0">
      <h1>
        <span className="text-[#00A264]">Latest</span> <span>News & Articles</span>
      </h1>
    </div>

    <div>
      <Link
        href="/trendingjob"
        className="h-8 bg-[#00A264] text-white py-2 px-4 rounded-lg text-sm"
      >
        View All
      </Link>
    </div>
  </div>

  {/* Adjusted ArticlesCard container to align with "Latest" */}
  <ArticlesCard />
</div>


  )
};

export default Articles;
