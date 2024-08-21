import Slides from "../companies/Slides";
import Link from "next/link";

const Trending = () => {
  return (
    <div className="mt-7">
      <div className="flex items-center justify-between mt-4 pt-4 mr-[8.5%] ">
        <div className="font-bold text-2xl ml-[11rem]">
          <h1>
            <span className="text-green-700">Trending</span> Jobs
          </h1>
        </div>
        <div>
          <Link href="/trendingjob">
            <button className="h-8 bg-green-600 text-white py-1 px-4 rounded-lg text-sm">
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
