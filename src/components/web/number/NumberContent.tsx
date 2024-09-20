import React from "react";

import Image from "next/image";
import Link from "next/link";

const NumberContent = () => {
  return (
    <div className="flex sm:md:flex-row  lg:w-full lg:h-[500px] flex-col sm:md:w-[90%] gap-4 self-center">
      <div className="sm:md:w-[50%] lg:ml-5 lg:mt-10 flex lg:w-[60%] flex-col  ">
        <h2 className="text-[21px] ml-8 md:text-3xl md:text-left font-bold lg:text-[34px] mb-4">
          EaseMySailing BY THE{" "}
          <span className="text-[#00A264] text-2xl sm:md:text-4xl">
            NUMBERS
          </span>
        </h2>
        {/* first rating */}
        <div className="flex flex-row space-y-4 mx-10 sm:md:mx-0">
          <div className="relative justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md">
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
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[11px]">
                in Goods moved each year
              </span>
            </div>
          </div>

          <div className="relative justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md">
            <div className="absolute text-lg -left-9 md:text-2xl ml-[1.5px] lg:ml-[0px]">
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
              <span className="text-lg md:text-4xl font-extrabold">
                50,000+
              </span>
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[10px]">
                Ships operated by seafarers
              </span>
            </div>
          </div>

          <div className="relative justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md">
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
              <span className="text-lg md:text-4xl font-extrabold">80%</span>
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[11px]">
                of World Energy
              </span>
            </div>
          </div>
        </div>

        {/* another rating */}
        <div className="flex flex-row space-y-4 mx-10 sm:md:mx-0">
          <div className="relative justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md">
            <div className="absolute text-lg -left-9 md:text-2xl ml-[1.5px] ">
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
              <span className="text-lg md:text-4xl font-extrabold">90%</span>
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[11px]">
                of Global Trade
              </span>
            </div>
          </div>

          <div className="relative justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md">
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
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[11px]">
                Tons of Cargo yearly
              </span>
            </div>
          </div>

          <div className="relative justify-center lg:mt-4 flex items-center sm:justify-around gap-x-16 md:gap-x-10 border-2 rounded-r-full lg:px-[2.5rem] lg:w-[300px] lg:h-[90px] sm:md:ml-9 shadow-md">
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
              <span className="text-gray-700 text-[10px] lg:mt-2 md:text-[11px]">
                Seafarers Serving Globally
              </span>
            </div>
          </div>
        </div>

        <div className="flex sm:md:flex-col flex-col justify-start ">
          <p className=" lg:w-[472px] lg:h-[62px] text-center text-[18px] lg:mt-14 leading-[30px] lg:leading-[36px] lg:px-2 ">
            Explore Seafarers’ Global Impact and Influence
          </p>
          <Link
            href="/contact"
            className=" lg:ml-6 text-center bg-[#00A264] w-32 text-white sm:ml-0 py-3 px-2 md:px-3  rounded-3xl  text-[16px]"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="sm:md:w-[50%]  right-0 lg:h-[500px] py-12 lg:w-[40%]">
        <Image
          src="/numberimg.png"
          alt="captain Logo"
          width={800}
          height={800}
          className="w-full h-full rounded-l-full "
        />
      </div>
    </div>
  );
};

export default NumberContent;
