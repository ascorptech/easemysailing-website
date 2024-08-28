import Islide from "./Islide";
import Link from "next/link";
const Interview = () => {
  return (
    <div className="mt-7">
      <div className="flex items-center justify-between mt-4 pt-4 mr-[8.5%] ">
        <div className="font-bold text-2xl ml-[11rem]">
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
