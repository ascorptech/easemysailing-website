import Islide from "./Islide";
import Link from "next/link";
const Interview = () => {
  return (
    <div className="mt-7 w-[95%] mx-2 px-1  border-2 border-red-600 md:mx-6 lg:w-full lg:mx-0 sm:mx-5">
      <div className="flex items-center border-2 border-red-400 justify-between mt-4 pt-4 lg:mr-[9%] md:mx-[6.8rem]">
        <div className="text-[21px] border-2 border-red-400 leading-[28px] font-bold sm:md:text-2xl   lg:ml-[0rem] ">
          <h1>
            Podcast &<span className="text-[#00A264]"> Interviews</span>
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

      <Islide />
    </div>
  );
};
export default Interview;
