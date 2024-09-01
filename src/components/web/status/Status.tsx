import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaSmile } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

const Status = () => {
  return (
    <div className="flex flex-col lg:flex-col-2 md:flex-row sm:flex-col justify-between p-4 space-y-6 md:space-y-0 md:space-x-6  md:mx-6 lg:mx-16 lg:w-[90%] sm:mx-8 sm:mr-4  mt-4 mx-8 w-full">
      {/* Left Div */}
      <div className="w-full md:w-1/2  bg-gray-50 p-5 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-center md:text-3xl font-bold">
          EaseMySailing by the <span className="text-green-600">numbers</span>
        </h2>
        <ul className="  list-none p-0 mt-8 space-y-10 ">
          <li className="flex items-center sm:justify-around md:gap-x-32  lg:gap-x-48 sm:gap-x-10 justify-around">
            <div className="text-green-700 text-5xl md:text-6xl">
              <IoPersonAddSharp />
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-extrabold">70</span>
              <span className="text-gray-700 text-lg md:text-xl">
                Registered Seafarers
              </span>
            </div>
          </li>
          <li className="flex items-center sm:justify-around  gap-x-20 lg:gap-x-56 md:gap-x-32 justify-around">
            <div className="text-green-700 text-5xl md:text-6xl">
              <FaSmile />
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-extrabold">7k+</span>
              <span className="text-gray-700 text-lg md:text-xl">
                Smiling Faces
              </span>
            </div>
          </li>
          <li className="flex items-center sm:justify-around gap-x-20 lg:gap-x-52 md:gap-x-32 justify-around">
            <div className="text-green-700 text-5xl md:text-6xl">
              <BsFillPeopleFill />
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-extrabold">80</span>
              <span className="text-gray-700 text-lg md:text-xl">
                Recruiter Profiles
              </span>
            </div>
          </li>
        </ul>
        <p className="mt-1 font-bold text-base lg:text-lg text-black text-center">
          Lorem Ipsum is simply dummy text
          <button className="lg:ml-2  mt-3 lg:mt-6 bg-green-600 text-white sm:ml-5 py-1 px-3 rounded-md ">
            Contact Us
          </button>
        </p>
      </div>

      {/* Right Div */}
      <div className="w-full md:w-1/2 p-5 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl md:text-center font-bold">
          Find out what's new at{" "}
          <span className="text-green-600">EaseMySailing</span>
        </h2>
        <div className="relative pt-[56.25%] mt-6">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/lm6CLMLSZBc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-6 text-gray-500 text-lg">
          Your career journey is serious, but should never be lonely or dull.
          With the new EaseMySailing, work communities are right at your
          fingertips.
        </p>
      </div>
    </div>
  );
};

export default Status;
