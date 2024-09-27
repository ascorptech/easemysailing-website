"use client";
import React from "react";
import Link from "next/link";
import ArticlesCard from "./ArticlesCard";

const Articles = () => {
  
  return (
    <div className=" md:w-[90%] lg:container mx-auto">
      <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-[21px]  leading-[28px] font-bold sm:md:text-4xl">
            <span className="text-white">Latest News & </span>
            <span className="text-[#00A264]">Articles</span>
          </h1>

        <div>
          <Link
            href="/resources"
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
