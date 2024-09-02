import Islide from "./Islide";
import Link from "next/link";
const Interview = () => {
  return (
    // <div className="mt-7">
    <div className="mt-7  w-[94%]  mx-3 md:mx-6  px-1 sm:mx-5 lg:w-full lg:mx-0 ">
      {/* <div className="flex items-center justify-between mt-4 pt-4 mr-[8.5%] "> */}
      <div className="flex items-center justify-between mt-4 pt-4 lg:mr-[10%] md:mx-[3rem] ">
        {/* <div className="font-bold text-2xl ml-[11rem]"> */}
        <div className="font-bold text-2xl lg:ml-[8rem]">
          <h1>
            Podcast &<span className="text-green-700"> Interviews</span>
          </h1>
        </div>
        <div>
          <Link href="/podcast_list">
            <button className="h-8 bg-green-600 text-white py-1 px-4 rounded-lg text-sm">
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
