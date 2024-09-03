"use client"
import Slide from "./slide";

const FreshTalent = () => {
  return (
    <div className="flex flex-col w-auto justify-center ">
      <div className="flex items-center justify-between mb-4 pt-4 mr-[4rem] ">
        <div className="font-bold text-2xl ml-[2.3rem]">
          <h1>Fresh talent ready to join</h1>
        </div>
        {/* <div> */}
        {/* <Link href="/trendingjob"> */}
        <button  type="button" className="h-8 bg-green-600 text-white py-1 px-4 rounded-lg text-sm ">
          View All
        </button>
        {/* </Link> */}
        {/* </div> */}
      </div>

      <div className="mt-4">
        <Slide/>
      </div>
    </div>
  );
};
export default FreshTalent;
