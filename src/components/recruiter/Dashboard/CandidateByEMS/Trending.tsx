"use client";
import Link from "next/link";
import Slides from "./Slides";
import Slides2 from "./Slides2";

const Trending = () => {
  return (
    <div className="flex flex-col w-auto justify-center ">
      <div className="flex items-center justify-between mb-4 pt-4 mr-[4rem] ">
        <div className="font-bold text-2xl ml-[2.3rem]">
          <h1>Candidate Recommendation By EMS</h1>
        </div>
        {/* <div> */}
        {/* <Link href="/trendingjob"> */}
        <button className="h-8 bg-[#00A264] text-white py-1 px-4 rounded-lg text-sm ">
          View All
        </button>
        {/* </Link> */}
        {/* </div> */}
      </div>

      <Slides />
      <div className="mt-4">
        <Slides2 />
      </div>
    </div>
  );
};
export default Trending;
