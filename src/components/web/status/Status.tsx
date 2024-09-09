import React from "react";
// import { IoPersonAddSharp } from "react-icons/io5";
// import { FaSmile } from "react-icons/fa";
// import { BsFillPeopleFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Status = () => {
  return (
    <div className="flex flex-col lg:flex-col-2 md:flex-row sm:flex-col justify-between py-4 px-1 space-y-6 md:space-y-0 md:space-x-6  md:mx-6    sm:mr-4  mt-4 mx-3 w-[94%] sm:mx-5 lg:w-full lg:mx-0 ">
      {/* Left Div */}
      <div className="w-full md:w-1/2   p-5 rounded-lg  lg:mx-9 ">
        <h2 className="text-2xl flex justify-center items-center lg:ml-[90px] md:text-center md:text-[34px] font-bold w-[531px] lg:h-[51px]">
          EaseMySailing by the <span className="text-[#00A264]">numbers</span>
        </h2>
        <ul className="  list-none p-0 mt-8 space-y-10 lg:space-x-">
          <li className="relative  justify-center  flex items-center sm:justify-around  gap-x-20  md:gap-x-32  border-2 rounded-r-full lg:px-[3rem] lg:w-[456px] lg:h-[106px] lg:ml-[8rem] shadow-sm">
            <div className=" absolute text-5xl -left-12 md:text-6xl ml-3 lg:ml-[5px]">
              {/* <IoPersonAddSharp /> */}
              <Image
                src="/people+.png"
                alt="people Logo"
                width={300}
                height={300}
                className="lg:w-[93px] lg:h-[93px] "
              />
            </div>
            <div className="flex flex-col items-center justify-between lg:w-[250px] lg:ml-12  text-center">
              <span className="text-[40px] md:text-5xl font-extrabold">70</span>
              <span className="text-gray-700  text-[18px] md:text-xl ">
                Registered Seafarers
              </span>
            </div>
          </li>
          <li className="relative  justify-center flex items-center sm:justify-around  gap-x-20  md:gap-x-32  border-2 rounded-r-full lg:px-[3rem] lg:w-[456px] lg:h-[106px] lg:ml-[8rem] shadow-sm">
            <div className="absolute text-5xl -left-12 md:text-6xl ml-3 lg:ml-[5px]">
              {/* <FaSmile /> */}
              <Image
                src="/smile.png"
                alt="smile Logo"
                width={800}
                height={800}
                className="lg:w-[93px] lg:h-[93px] "
              />
            </div>
            <div className="flex flex-col items-center justify-between lg:w-[250px] lg:ml-16  text-center">
              <span className="text-4xl md:text-5xl font-extrabold">7k+</span>
              <span className="text-gray-700 text-md md:text-xl">
                Smiling Faces
              </span>
            </div>
          </li>
          <li className="relative  justify-center flex items-center sm:justify-around  gap-x-20  md:gap-x-32  border-2 rounded-r-full lg:px-[3rem] lg:w-[456px] lg:h-[106px] lg:ml-[8rem] shadow-sm">
            <div className=" absolute text-5xl -left-12 md:text-6xl ml-3 lg:ml-[5px]">
              {/* <BsFillPeopleFill /> */}
              <Image
                src="/people.png"
                alt="people Logo"
                width={800}
                height={800}
                className="lg:w-[93px] lg:h-[93px] "
              />
            </div>
            <div className="flex flex-col items-center justify-between lg:w-[250px] lg:ml-12  text-center">
              <span className="text-4xl md:text-5xl font-extrabold">80</span>
              <span className="text-gray-700 text-md md:text-xl">
                Recruiter Profiles
              </span>
            </div>
          </li>
        </ul>
        <p className=" font-bold text-base lg:text-[20px] text-black text-centern lg:w-[533px] lg:h-[50px] lg:ml-[90px]">
          Lorem Ipsum is simply dummy text
          <Link href="/contact">
            <button className="lg:ml-2  mt-3  bg-[#00A264] text-white sm:ml-5 py-1 px-3 rounded-md lg:w-[161px] lg:h-[50px] text-[16px]">
              Contact Us
            </button>
          </Link>
        </p>
      </div>

      {/* Right Div */}
      <div className="w-full md:w-1/2 p-5 bg-white rounded-lg ">
        <h2 className="text-2xl md:text-3xl md:text-center font-bold lg:text-[34px] lg:h-[51px] lg:w-[642px]">
          Find out what's new at{" "}
          <span className="text-[#00A264]">EaseMySailing</span>
        </h2>
        <div className="relative pt-[56.25%] mt-6 shadow-lg rounded-lg bg-black lg:w-[662px] lg:h-[388px]">
          <iframe
            className="absolute top-0 left-0 w-full h-full p-2 "
            src="https://www.youtube.com/embed/lm6CLMLSZBc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-6 text-gray-500 text-[16px] text-center">
          Your career journey is serious, but should never be lonely or dull.<br/>
          With the new EaseMySailing, work communities are right at your
          fingertips.
        </p>
      </div>
    </div>
  );
};

export default Status;
