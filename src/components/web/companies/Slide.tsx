"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

export default function Slide() {
  const [slide, setSlide] = useState(0);
  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:3000/api/product");
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    console.log(categories.length);
    if (categories.length - 8 === slide) return false;
    setSlide(slide + 2);
  };

  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 2);
  };

  return (
    <>
      <div className="w-full  px-1  lg:ml-36 mt-3 border-2 border-blue-800 lg:w-[80%] ">
        <div className="flex flex-row  justify-between">
          <div className="flex justify-between items-center">
            <div
              className="cursor-pointer
            flex justify-center items-center w-[30px] h-[30px] bg-[#e8e8f1] rounded-full lg:mx-2 border-2"
              onClick={prevSlide}
            >
              <IoMdArrowBack />
            </div>
          </div>
          <div className="flex  overflow-hidden   ">
            {categories.map((cat:any, index:number) => {
              return (
                <div
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                  key={index}
                  className="flex justify-center items-center w-[124px] mx-1 rounded-2xl border-2 shrink-0 duration-500"
                >
                  <img
                    src={"http://localhost:3000/images/" + cat?.image} // Replace with your image path
                    alt=""
                    width={100} // Set to match the height
                    height={100} // Ensure the aspect ratio is consistent
                    className=""
                  />
                </div>
              );
            })}
          </div>
          <hr className="my-6 border-[1px]" />
          <div className="flex justify-between items-center  ">
            <div
              className="cursor-pointer
            flex justify-center items-center w-[30px] h-[30px] bg-[#e8e8f1] rounded-full  border-2"
              onClick={nextSlide}
            >
              <IoMdArrowForward />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
