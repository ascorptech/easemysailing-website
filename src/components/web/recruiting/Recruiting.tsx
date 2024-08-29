// import Slides from "../companies/Slides";
"use client";
import Slide2 from "./Slide2";
import React, { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";

export default function Recruiting() {
  const [slide, setSlide] = useState(0);
  const [recuriting, setRecuriting] = useState([]);

  const fetchRecuriting = async () => {
    const response = await fetch("http://localhost:3000/api/recruiting");
    const data = await response.json();
    setRecuriting(data);
  };

  useEffect(() => {
    fetchRecuriting();
  }, []);

  const nextSlide = () => {
    console.log(recuriting.length);
    if (recuriting.length - 4 === slide) return false;
    setSlide(slide + 2);
  };

  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 2);
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between mt-4 pt-4 mr-[8.5%] ">
        <div className="font-bold text-2xl ml-[11rem]">
          <h1>
            Top <span className="text-green-700">Recruiting</span> Companies
          </h1>
        </div>
        <div>
          <Link href="/toprecruiting">
            <button className="h-8 bg-green-600 text-white py-1 px-4 rounded-lg text-sm">
              View All
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-[1150px] mx-auto mt-3 ">
        <div className="flex flex-row  justify-between">
          <div className="flex justify-between items-center">
            <div
              className="cursor-pointer
            flex justify-center items-center w-[30px] h-[30px] bg-[#e8e8f1] rounded-full mx-2 border-2"
              onClick={prevSlide}
            >
              <IoMdArrowBack />
            </div>
          </div>
          <div className="flex overflow-hidden ">
            {recuriting?.map((d:any, i:number) => {
              return (
                <div
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                  key={i}
                  className="flex justify-center h-[10rem] items-center  w-[180px] mx-3.5 rounded-2xl  shrink-0 duration-500"
                >
                  <Slide2 {...d} key={i} />
                </div>
              );
            })}
          </div>
          <hr className="my-6 border-[1px]" />
          <div className="flex justify-between items-center">
            <div
              className="cursor-pointer
            flex justify-center items-center w-[30px] h-[30px] bg-[#e8e8f1] rounded-full mx-2 border-2"
              onClick={nextSlide}
            >
              <IoMdArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
