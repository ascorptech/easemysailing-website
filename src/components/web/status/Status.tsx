import React from "react";
// import { IoPersonAddSharp } from "react-icons/io5";
// import { FaSmile } from "react-icons/fa";
// import { BsFillPeopleFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Status = () => {
  return (
    <div className="flex flex-col lg:flex-row sm:flex-col lg:justify-center  py-4 px-1 space-y-6 md:space-y-0  md:mx-0    sm:mr-0  mt-4 mx-0 md:w-full sm:mx-5 lg:py-0 lg:ml-0 lg:mr-0 lg:px-20">
      {/* Left Div */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2   p-2 rounded-lg  lg:mx-0 pt-16">
        <h2 className="text-sm sm:md:text-2xl flex justify-center items-center sm:md:ml-[50px] md:text-center md:text-[34px] font-bold  sm:md:h-[51px]">
           <span className="text-[#00A264]">Seafarers</span>: Global Impact in Figures
        </h2>
        <ul className="  list-none p-0 mt-8 space-y-6 lg:space-x-">
          <li className="relative  justify-center  flex items-center sm:justify-around  gap-x-20  md:gap-x-32  border-2 rounded-r-full md:px-[3rem] md:w-[500px] md:h-[106px] lg:ml-[0rem] shadow-sm ">
            <div className=" absolute text-5xl -left-12 md:text-6xl ml-3 lg:ml-[5px]">
              {/* <IoPersonAddSharp /> */}
              <Image
                src="/people+.png"
                alt="people Logo"
                width={300}
                height={300}
                className="w-20 h-20 sm:md:w-[93px] sm:md:h-[93px] "
              />
            </div>
            <div className="flex flex-col items-center justify-between sm:w-[399px] sm:h-[82.19px] md:ml-12  text-center ">
              <span className="text-[40px] md:text-5xl font-extrabold">$ 14 Trillion</span>
              <span className="text-gray-700  text-[18px] md:text-xl ">
                90% of Global Trade
              </span>
            </div>
          </li>
          <li className="relative  justify-center flex items-center sm:justify-around  gap-x-20  md:gap-x-32  border-2 rounded-r-full lg:px-[3rem] lg:w-[500px] lg:h-[106px] lg:ml-[0rem] shadow-sm">
            <div className="absolute text-5xl -left-12 md:text-6xl ml-3 lg:ml-[5px]">
              {/* <FaSmile /> */}
              <Image
                src="/smile.png"
                alt="smile Logo"
                width={800}
                height={800}
                className="w-20 h-20 sm:md:w-[93px] sm:md:h-[93px] "
              />
            </div>
            <div className="flex flex-col items-center justify-between ml-4 sm:md:ml-16  text-center sm:md:w-[399px] sm:md:h-[82.19px]">
              <span className="text-4xl md:text-5xl font-extrabold">50,000+</span>
              <span className="text-gray-700 text-md md:text-xl">
              Ships operated by seafarers
              </span>
            </div>
          </li>
          <li className="relative  justify-center flex items-center sm:justify-around  gap-x-20  md:gap-x-32  border-2 rounded-r-full lg:px-[3rem] lg:w-[500px] lg:h-[106px] lg:ml-[0rem] shadow-sm">
            <div className=" absolute text-5xl -left-12 md:text-6xl ml-3 lg:ml-[5px]">
              {/* <BsFillPeopleFill /> */}
              <Image
                src="/people.png"
                alt="people Logo"
                width={800}
                height={800}
                className="w-20 h-20 sm:md:w-[93px] sm:md:h-[93px]"
              />
            </div>
            <div className="flex flex-col items-center justify-between lg:w-[319px] lg:h-[82.19px] lg:ml-12  text-center ">
              <span className="text-4xl md:text-5xl font-extrabold ">1.9 Million</span>
              <span className="text-gray-700 text-md md:text-xl">
              Seafarers Serving Globally
              </span>
            </div>
          </li>
        </ul>
        <div className="flex items-center font-bold text-base lg:text-[20px] text-black text-center lg:ml-[0px] mt-7 sm:md:ml-0">
        <p className="w-full lg:w-[372px] lg:h-[62px] text-center text-[24px] leading-[36px]">Explore Seafarers’ Global  Impact and Influence</p>
          <Link href="/contact">
            <button className="  bg-[#00A264] text-white sm:ml-5 py-1 px-3 rounded-md  text-[16px]">
              Know More
            </button>
          </Link>
        </div>
      </div>

      {/* Right Div */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 p-0 bg-white rounded-lg    lg:py-0 lg:px-0 ">
        <h2 className="text-2xl md:text-3xl md:text-center font-bold lg:text-[34px] ">
          “Impact, Challenges And <span className="text-[#00A264] ">Vision</span>
          "
        </h2>
        <div className="relative pt-[56.25%] mt-6 shadow-lg rounded-lg bg-black ">
          <iframe
            className="absolute top-0 left-0 w-full h-full   "
            src="https://www.youtube.com/embed/lm6CLMLSZBc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Status;
