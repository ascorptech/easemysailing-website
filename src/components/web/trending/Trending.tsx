import Slides from "../companies/Slides";
import Link from "next/link";

const Trending = () => {
  return (
    <div className="mt-7 border-2 border-red-500 w-[99%] mx-7 lg:mx-1 md:mx-6">
      <div className="flex items-center justify-between mt-4 pt-4 lg:mr-[10%] md:mx-[3rem]">
        <div className="font-bold text-2xl lg:ml-[8rem]">
          <h1>
            <span className="text-green-700">Trending</span> Jobs
          </h1>
        </div>
        <div>
          <Link href="/trendingjob">
            <button className="h-8 bg-green-600 text-white py-1 px-4 rounded-lg text-sm ">
              View All
            </button>
          </Link>
        </div>
      </div>

      <Slides />
    </div>
  );
};
export default Trending;
