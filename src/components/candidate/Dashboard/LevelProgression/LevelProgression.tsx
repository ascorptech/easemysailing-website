import { FaCoins } from "react-icons/fa";
import { Ship } from "lucide-react";
import Image from "next/image";

import React from "react";

const LevelProgression: React.FC = () => {
  return (
    <div className=" relative flex items-center  w-full py-4 mt-4   font-semibold">
      <div className="absolute w-[95%] flex justify-between  ml-5  mb-11 ">
        <div className=" flex  ">
          <div className="">
            <Image
              src="/images/candidate/ship.png"
              alt="image not found"
              width={50}
              height={50}
              className="text-green-600 text-xl p-1 "
            />
          </div>
          <span>You're Here</span>
        </div>
        <div className=" flex items-center mr-24">
          <Image
            src="/images/candidate/coin.png"
            alt="image not found"
            width={30}
            height={30}
            className="text-green-600 text-xl p-1 "
          />

          <span> 500</span>
        </div>
        <div className="flex items-center mr-16">
          <Image
            src="/images/candidate/coin.png"
            alt="image not found"
            width={30}
            height={30}
            className="text-green-600 text-xl p-1 "
          />
          <span> 1000</span>
        </div>
        <div className="flex items-center ml-5">
          <Image
            src="/images/candidate/coin.png"
            alt="image not found"
            width={30}
            height={30}
            className="text-green-600 text-xl p-1 "
          />{" "}
          <span> 1500</span>
        </div>
      </div>
      <hr className=" border-4 border-green-300  w-[94%] ml-5 mt-8 "></hr>
      <div className="absolute flex justify-around w-[95%] mt-16">
        <h1 className=" ">12 months Sailing with EMS</h1>
        <h1 className=" ">24 months Sailing with EMS</h1>
        <h1 className=" ">36 months Sailing with EMS</h1>
      </div>
      <div className="absolute flex items-center justify-between   w-[95%] ml-5 mt-8 ">
        <div className="  flex flex-col justify-center   w-12 h-12 text-sm rounded-full bg-green-600 text-center text-white p-[2px]  ">
          <p className="relative flex flex-col mb-2 justify-center">
            Level<span className="absolute mt-[24px] ml-4">1</span>
          </p>
        </div>
        <div className=" flex flex-col justify-center   w-12 h-12 rounded-full bg-violet-800 text-center text-white p-[2px] text-sm">
          <p className="relative flex flex-col mb-2 justify-center">
            Level<span className="absolute mt-[24px] ml-4">2</span>
          </p>
        </div>
        <div className=" flex flex-col justify-center   w-12 h-12 rounded-full bg-red-500 text-center text-white p-[2px] text-sm ">
          <p className="relative flex flex-col mb-2 justify-center">
            Level<span className="absolute mt-[24px] ml-4">3</span>
          </p>
        </div>
        <div className=" flex flex-col justify-center   w-12 h-12 rounded-full bg-orange-400 text-center text-white p-[2px] text-sm">
          <p className="relative flex flex-col mb-2 justify-center">
            Level<span className="absolute mt-[24px] ml-4">4</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LevelProgression;
