import Islide from "./Islide";
import Link from "next/link";
const Interview = () => {
  return (
    // <div className="mt-7">
    // <div className="mt-7  w-[94%]  mx-3 md:mx-0  px-1 sm:mx-5 lg:w-full border-2 border-red-500">
    <div className="mt-7 w-[94%] mx-2 px-1   md:mx-6 lg:w-full lg:mx-0 sm:mx-5">
      {/* <div className="flex items-center justify-between mt-4 pt-4 mr-[8.5%] "> */}


      {/* <div className="flex items-center justify-between mt-3 pt-4 lg:mr-[8%] md:mx-[3rem] "> */}

      {/* <div className="flex items-center justify-between mt-4 pt-4 lg:mr-[10%] md:mx-[3rem]"> */}

      <div className="flex items-center justify-between mt-4 pt-4 lg:mr-[9%] md:mx-[6.8rem]">
        {/* <div className="font-bold text-2xl ml-[11rem]"> */}
        {/* <div className="font-bold text-2xl lg:ml-[4rem]"> */}
        <div className="text-[21px] leading-[28px] font-bold sm:md:text-2xl   lg:ml-[0rem] ">

          <h1>
            Podcast &<span className="text-[#00A264]"> Interviews</span>
          </h1>
        </div>
        {/* <div className="lg:ml-5">
          <Link href="/podcast-list">
            <button className="h-8 bg-[#00A264] text-white py-1 px-4 rounded-lg text-sm">
              View All
            </button>
          </Link>
        </div> */}
        <div>
          <Link href="/podcast-list">
            <button className="h-8 bg-[#00A264] text-white py-1 px-4 rounded-lg text-sm ">
              View All
            </button>
          </Link>
        </div>
      </div>

      <Islide />
    </div>
  );
};
export default Interview;
