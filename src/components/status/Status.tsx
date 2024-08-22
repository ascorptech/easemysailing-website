// components/StatusAndVideo.tsx
import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaSmile } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

const Status = () => {
  return (
    <div className="flex ml-[5rem] h-[25%] w-[90%] flex-col md:flex-row justify-between p-5 space-y-5 md:space-y-0 md:space-x-5 ">
      {/* Left Div */}
      <div className="w-full md:w-1/2  bg-gray-50 p-3 h-[20%] rounded-lg">
        <h2 className="text-[1.8rem] font-bold">
          EaseMySailing by the <span className="text-green-600">numbers</span>
        </h2>
        <ul className="list-none p-0 mt-3 space-y-4">
          <li className="flex items-center mt-4 pt-4 md:gap-x-[8rem] ">
            <div className="text-6xl text-green-700 ml-3">
              <IoPersonAddSharp />
            </div>
            <div>
              <span className="text-4xl font-bold">70</span>
              <br />
              <span className="text-gray-700">Registered Seafarers</span>
            </div>
          </li>
          <li className="flex items-center mt-4 pt-4 md:gap-x-[8rem]">
            <div className="text-green-700 text-6xl ml-3">
              <FaSmile />
            </div>
            <div>
              <span className="text-4xl font-bold">7k+</span>
              <br />
              <span className="text-gray-700">Smiling Faces</span>
            </div>
          </li>
          <li className="flex items-center mt-4 pt-4 md:gap-x-[8rem]">
            <div className=" text-green-700 text-6xl ml-3">
              <div>
                <BsFillPeopleFill />
              </div>
            </div>
            <div>
              <span className="text-4xl font-bold">80</span>
              <br />
              <span className="text-gray-700">Recruiter Profiles</span>
            </div>
          </li>
        </ul>
        <p className="mt-6 text-gray-500">
          Lorem Ipsum is simply dummy text
          <button className="ml-2 mt-6 bg-green-600 text-white py-2 px-4 rounded-lg">
            Contact Us
          </button>
        </p>
      </div>

      {/* Right Div */}
      <div className="w-full md:w-1/2 p-3">
        <h2 className="text-[1.8rem] font-bold">
          Find out what's new at{" "}
          <span className="text-green-600">EaseMySailing</span>
        </h2>
        <div className="relative pt-[56.25%] mt-4">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/lm6CLMLSZBc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-4 text-gray-500">
          Your career journey is serious, but should never be lonely or dull.
          With the new EaseMySailing, work communities are right at your
          fingertips.
        </p>
      </div>
    </div>
  );
};

export default Status;
