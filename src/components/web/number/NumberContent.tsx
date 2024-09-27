import React from "react";

import Image from "next/image";
import Link from "next/link";

const NumberContent = () => {
  return (
    <div className="flex sm:md:flex-row lg:mb-12 mb-5 lg:w-full lg:mt-0 mt-5 flex-col sm:md:w-[90%] justify-between self-center">
      <div className="sm:md:w-[50%] lg:ml-10 lg:mt-10 flex lg:w-[60%] flex-col  ">
        <h2 className="text-[20px] text-center sm:text-left lg:ml-8 mx-3 lg:mx-0 md:text-3xl  md:text-left lg:text-5xl font-[800]  ">
          Seafarers Powering Global{" "}
          <span className="text-[#00A264]"> Trade And Economy</span>
        </h2>
        {/* first rating */}
        <div className="flex pt-8 sm:md:flex-row flex-col ml-11 space-y-4 lg:ml-6 sm:md:mx-0 mx-4">
          <div className="relative flex-wrap justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md mx-6">
            <div className="absolute text-lg -left-9 md:text-2xl ml-[1.5px] lg:ml-[0px]">
              {/* <BsFillPeopleFill /> */}
              <Image
                src="/free-trade-home.png"
                alt="trade Logo"
                width={350}
                height={350}
                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-4 md:ml-0">
              <span className="text-lg md:text-4xl font-extrabold">$ 14 T</span>
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[13px]">
                in Goods moved each year
              </span>
            </div>
          </div>

          <div className="relative justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md mx-6">
            <div className="absolute text-lg -left-9 md:text-2xl ml-[1.5px] lg:ml-[0px]">
              {/* <BsFillPeopleFill /> */}
              <Image
                src="/shiphome1.png"
                alt="ship Logo"
                width={350}
                height={350}
                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-4 md:ml-0">
              <span className="text-lg md:text-4xl font-extrabold">
                50,000+
              </span>
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[13px]">
                Ships operated by seafarers
              </span>
            </div>
          </div>

          <div className="relative justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md mx-6">
            <div className="absolute text-lg -left-9 md:text-2xl ml-[1.5px] ">
              {/* <BsFillPeopleFill /> */}
              <Image
                src="/globe2.png"
                alt="captain Logo"
                width={350}
                height={350}
                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-4 md:ml-0">
              <span className="text-lg md:text-4xl font-extrabold">80%</span>
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[13px]">
                of World Energy
              </span>
            </div>
          </div>
        </div>

        {/* another rating */}
        <div className="flex mt-4 ml-11 sm:md:flex-row flex-col space-y-4 lg:ml-6 sm:md:mx-0 mx-4 mb-2 sm:md:mb-0">
          <div className="relative justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md mx-6">
            <div className="absolute text-lg -left-9 md:text-2xl ml-[1.5px]">
              {/* <BsFillPeopleFill /> */}
              <Image
                src="/globe2.png"
                alt="trade Logo"
                width={350}
                height={350}
                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-4 md:ml-0">
              <span className="text-lg md:text-4xl font-extrabold">90%</span>
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[13px]">
                of Global Trade
              </span>
            </div>
          </div>

          <div className="relative justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md mx-6">
            <div className="absolute text-lg -left-9 md:text-2xl ml-[1.5px] ">
              {/* <BsFillPeopleFill /> */}
              <Image
                src="/shiphome.png"
                alt="ship Logo"
                width={350}
                height={350}
                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-4 md:ml-0">
              <span className="text-lg md:text-4xl font-extrabold">11 B</span>
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[13px]">
                Tons of Cargo yearly
              </span>
            </div>
          </div>

          <div className="relative justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md mx-6">
            <div className="absolute text-lg -left-9 md:text-2xl ml-[1.5px] ">
              {/* <BsFillPeopleFill /> */}
              <Image
                src="/captainhome.png"
                alt="captain Logo"
                width={350}
                height={350}
                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-4 md:ml-0">
              <span className="text-lg md:text-4xl font-extrabold">1.9 M</span>
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[13px]">
                Seafarers Serving Globally
              </span>
            </div>
          </div>
        </div>

        <div className="flex sm:md:flex-col items-center sm:items-start mx-2 sm:mx-0 mt-3 sm:mt-0  lg:ml-7 flex-col ">
          <p className="  text-[18px] lg:pt-6  lg:mt-8 leading-[20px] lg:leading-[26px] mb-2 sm:md:mb-0">
            Know about Global Impact and Influence
          </p>
          <Link
            href="/contact"
            className=" lg:mt-5 mt-2 text-center bg-[#00A264] w-36 text-white sm:ml-0 py-2 px-2 md:px-1  rounded-3xl  text-[16px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="sm:md:w-[50%] h-[280px] mt-3 w-full lg:pt-10 lg:h-[550px]  lg:w-[33%]">
        <Image
          src="/ship1.png"
          alt="captain Logo"
          width={470}
          height={380}
          className="lg:w-full pl-3 lg:pl-0 lg:h-full h-full rounded-l-full "
        />
      </div>
    </div>
  );
};

export default NumberContent;
