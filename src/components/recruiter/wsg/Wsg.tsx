"use client";
import React, { useState } from "react";

function Wsg() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 ">
      <div
        className="flex h-10 p-3  justify-between bg-[#00965C] items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-base text-white font-medium">
          Token For Gratitude
        </span>
        {/* Dropdown arrow icon */}
        <svg
          className={`w-4 h-4 text-white transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="mt-2 p-2">
          {/* Dropdown content in a separate div */}
          <div>
            <p className="text-sm text-justify text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.<br/> Lorem
              Ipsum has been the industry's standard dummy text ever since the
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem{" "}
            </p>
          </div>

          
        </div>
      )}
    </div>
  );
}

export default Wsg;
