import { FaCoins } from "react-icons/fa";
import { Ship } from "lucide-react";

import React from "react";


const LevelProgression: React.FC = () => {
  return (
    <div className=" relative flex items-center  w-full py-4 mt-4   font-semibold">
      <div className="absolute w-[95%] flex justify-between  ml-5  mb-11 ">
        <div className=" flex  ">
          <Ship className="text-yellow-500 mr-[3px]" />
          <span>You're Here</span>
        </div>
        <div className=" flex items-center mr-14">
          <FaCoins className="mr-[3px] text-orange-400" />
          <span> 500</span>
        </div>
        <div className="flex items-center mr-12">
          <FaCoins className="mr-[3px] text-orange-400" />
          <span> 1000</span>
        </div>
        <div className="flex items-center mr-5">
          <FaCoins className="mr-[3px] text-orange-400" />
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
        <div className=" relative flex flex-col  w-11 h-11 text-sm rounded-full bg-green-600 text-center text-white p-[2px] ">
          Level<span className="absolute mt-[13px] ml-4">1</span>
        </div>
        <div className="relative flex flex-col  w-11 h-11 rounded-full bg-violet-800 text-center text-white p-[2px] text-sm">
          Level <span className="absolute mt-[13px] ml-4">2</span>
        </div>
        <div className="relative flex flex-col  w-11 h-11 rounded-full bg-red-500 text-center text-white p-[2px] text-sm ">
          Level<span className="absolute mt-[13px] ml-4">3</span>
        </div>
        <div className="relative flex flex-col  w-11 h-11 rounded-full bg-orange-400 text-center text-white p-[2px] text-sm">
          Level <span className="absolute mt-[13px] ml-4">4</span>
        </div>
      </div>
    </div>

  );
};

export default LevelProgression;
