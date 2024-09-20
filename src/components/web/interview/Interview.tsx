import Islide from "./Islide";
import Link from "next/link";
const Interview = () => {
  return (
    <div className=" w-[95%] mx-2 px-1 pt-12  md:mx-6 lg:w-full lg:mx-0 sm:mx-5">
      <div className="flex items-center justify-between  lg:mr-[9%] md:mx-[6.8rem]">
        <div className="text-[21px]  leading-[28px] font-bold sm:md:text-4xl  ">
          <h1 className="text-white">
            PODCAST &<span className="text-[#00A264]"> INTERVIEWS</span>
          </h1>
        </div>

        <div>
          <Link
            href="/podcast-list"
            className="h-8 bg-[#00A264] text-white py-2 px-4 rounded-lg text-sm "
          >
            View All
          </Link>
        </div>
      </div>
      <div className="">
        <Islide />
      </div>
    </div>
  );
};
export default Interview;
