"use client";
import React, { useState, useEffect, useRef } from "react";
import Slide2 from "../recruiting/Slide2";
import TrendingCard from "../trending/TrendingCard";
import CareerSlide from "../career/CareerSlide";

const ClientSection: React.FC = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("top-recruiting");

  // Refs for Slide2, TrendingCard, and CareerSlide
  const cardSlide2 = useRef<HTMLDivElement>(null);
  const cardTrending = useRef<HTMLDivElement>(null);
  const cardCareer = useRef<HTMLDivElement>(null); // New ref for CareerSlide

  // Handle tab click for switching between tabs
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Scroll functions for the carousel
  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Keyboard controls for all carousels
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      if (activeTab === "top-recruiting") {
        scrollLeft(cardSlide2);
      } else if (activeTab === "trending") {
        scrollLeft(cardTrending);
      } else if (activeTab === "career-advise") {
        scrollLeft(cardCareer); // For CareerSlide
      }
    } else if (event.key === "ArrowRight") {
      if (activeTab === "top-recruiting") {
        scrollRight(cardSlide2);
      } else if (activeTab === "trending") {
        scrollRight(cardTrending);
      } else if (activeTab === "career-advise") {
        scrollRight(cardCareer); // For CareerSlide
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeTab]);

  return (
    <div className="border-2 border-red-700 w-full">
      {/* Tab Navigation */}
      <div className="flex justify-between items-center mt-10 border-2 border-red-700 gap-2 mb-6 ">
        <div className="ml-10 flex justify-center items-center">
          <button
            onClick={() => handleTabClick("top-recruiting")}
            className={`${
              activeTab === "top-recruiting" ? "bg-[#00A264] text-white" : ""
            } rounded-full px-6 py-2`}
          >
            Top Recruiting Companies
          </button>
          <button
            onClick={() => handleTabClick("trending")}
            className={`${
              activeTab === "trending" ? "bg-[#00A264] text-white" : ""
            } rounded-full px-6 py-2`}
          >
            Trending Jobs
          </button>
          <button
            onClick={() => handleTabClick("career-advise")}
            className={`${
              activeTab === "career-advise" ? "bg-[#00A264] text-white" : ""
            } rounded-full px-6 py-2`}
          >
            Career Advise & Mentoring
          </button>
        </div>
        <div className=" ">
          {/* Left button */}
          <button
            onClick={() =>
              activeTab === "top-recruiting"
                ? scrollLeft(cardSlide2)
                : activeTab === "trending"
                ? scrollLeft(cardTrending)
                : scrollLeft(cardCareer)
            }
            className="absolute right-1 lg:right-[110px] z-10 p-2 h-10 w-10 bg-white border rounded-full shadow-md ml-1 lg:-mt-5 lg:ml-2 mr-2"
          >
            &lt;
          </button>

          {/* Right button */}
          <button
            onClick={() =>
              activeTab === "top-recruiting"
                ? scrollRight(cardSlide2)
                : activeTab === "trending"
                ? scrollRight(cardTrending)
                : scrollRight(cardCareer)
            }
            className="absolute right-1 lg:right-[70px] h-10 w-10 z-10 p-2 bg-white border rounded-full shadow-md lg:-mt-5 -mr-7 lg:-mr-2"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Conditional Rendering with Sliding Effect */}
      <div className="transition-all duration-500 ease-in-out">
        {activeTab === "top-recruiting" && <Slide2 card={cardSlide2} />}
        {activeTab === "trending" && <TrendingCard card1={cardTrending} />}
        {activeTab === "career-advise" && (
          <CareerSlide card3={cardCareer} />
        )}{" "}
        {/* Added CareerSlide */}
      </div>
    </div>
  );
};

export default ClientSection;
