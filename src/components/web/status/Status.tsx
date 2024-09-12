import React from "react";

import Image from "next/image";
import Link from "next/link";

const Status = () => {
  return (
    <div className="flex sm:md:flex-row flex-col sm:md:w-[90%] self-center p-2 mt-10">
      <div className="sm:md:w-[50%] w-full flex flex-col">
        <h2 className="text-[21px] md:text-3xl md:text-left font-bold lg:text-[34px] mb-4">
          <span className="text-[#00A264] text-2xl sm:md:text-4xl">Seafarers</span>: Global Impact in
          Figures
        </h2>
        <div className="flex flex-col space-y-4 mx-10 sm:md:mx-0">
          <div className="relative  justify-center flex items-center sm:justify-around  gap-x-20  md:gap-x-32  border-2 rounded-r-full lg:px-[3rem] lg:w-[500px] lg:h-[106px] sm:md:ml-10 shadow-sm">
            <div className=" absolute text-5xl -left-12 md:text-6xl ml-3 lg:ml-[5px]">
              {/* <BsFillPeopleFill /> */}
              <Image
                src="/free-trade-home.png"
                alt="trade Logo"
                width={800}
                height={800}
                className="w-[60px] h-[60px] sm:md:w-[93px] sm:md:h-[93px] bg-[#0CAA41] rounded-full p-1 object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-8 sm:md:ml-0">
              <span className="text-4xl md:text-5xl font-extrabold ">
              $ 14 Trillion
              </span>
              <span className="text-gray-700 text-md md:text-xl">
              90% of Global Trade
              </span>
            </div>
          </div>
          <div className="relative  justify-center flex items-center sm:justify-around  gap-x-20  md:gap-x-32  border-2 rounded-r-full lg:px-[3rem] lg:w-[500px] lg:h-[106px] sm:md:ml-10 shadow-sm">
            <div className=" absolute text-5xl -left-12 md:text-6xl ml-3 lg:ml-[5px]">
              {/* <BsFillPeopleFill /> */}
              <Image
                src="/shiphome.png"
                alt="ship Logo"
                width={800}
                height={800}
                className="w-[60px] h-[60px] sm:md:w-[93px] sm:md:h-[93px] bg-[#0CAA41] rounded-full p-1 object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-8 sm:md:ml-0">
              <span className="text-4xl md:text-5xl font-extrabold ">
              50,000+
              </span>
              <span className="text-gray-700 text-md md:text-xl">
              Ships operated by seafarers
              </span>
            </div>
          </div>
          <div className="relative  justify-center flex items-center sm:justify-around  gap-x-20  md:gap-x-32  border-2 rounded-r-full lg:px-[3rem] lg:w-[500px] lg:h-[106px] sm:md:ml-10 shadow-sm">
            <div className=" absolute text-5xl -left-12 md:text-6xl ml-3 lg:ml-[5px]">
              {/* <BsFillPeopleFill /> */}
              <Image
                src="/captainhome.png"
                alt="captain Logo"
                width={800}
                height={800}
                className="w-[60px] h-[60px] sm:md:w-[93px] sm:md:h-[93px] bg-[#0CAA41] rounded-full p-1 object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center items-center ml-8 sm:md:ml-0">
              <span className="text-4xl md:text-5xl font-extrabold ">
                1.9 Million
              </span>
              <span className="text-gray-700 text-md md:text-xl">
                Seafarers Serving Globally
              </span>
            </div>
          </div>
          <div className="flex sm:md:flex-row flex-col justify-start items-center">
          <p className=" lg:w-[372px] lg:h-[62px] text-center text-[20px] leading-[30px] lg:leading-[36px] lg:px-12 ">
             Explore Seafarers’ Global Impact and Influence
           </p>
           <Link
             href="/contact"
             className="  bg-[#00A264] text-white sm:ml-0 py-3 px-1 md:px-3 rounded-md  text-[16px]"
           >
             Know More
           </Link>
          </div>
        </div>
      </div>
      <div className="sm:md:w-[50%] w-full">
        <h2 className="text-[21px] md:text-3xl md:text-center font-bold lg:text-[34px] ">
          “Impact, Challenges And{" "}
          <span className="text-[#00A264] ">Vision</span>"
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
  )
};

export default Status;
