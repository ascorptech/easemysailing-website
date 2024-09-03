import Slides from "../companies/Slides";
import Link from "next/link";
import SlidesTrend from "./TrendingCard";

const Trending = () => {
  return (
    <div className="mt-7 w-[94%] mx-3 px-1   md:mx-6 lg:w-full lg:mx-0 sm:mx-5">
      <div className="flex items-center justify-between mt-4 pt-4 lg:mr-[10%] md:mx-[3rem]">
        <div className="font-bold text-2xl lg:ml-[8rem]">
          <h1>
            <span className="text-[#00A264]">Trending</span> Jobs
          </h1>
        </div>
        <div>
          <Link href="/trendingjob">
            <button className="h-8 bg-[#00A264] text-white py-1 px-4 rounded-lg text-sm ">
              View All
            </button>
          </Link>
        </div>
      </div>

      <SlidesTrend/>
    </div>
  );
};
export default Trending;
