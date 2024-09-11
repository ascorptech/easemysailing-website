import Islide from "./Islide";
import Link from "next/link";
const Interview = () => {
  return (   
    <div className="w-[90%] mx-auto mt-5">
    <div className="flex justify-between">
      <div className="text-[21px] leading-[28px] font-bold sm:md:text-2xl">
        <h1>
        Podcast &<span className="text-[#00A264]"> Interviews</span>
        </h1>
      </div>
      <Link href="/resources" className="h-8 bg-[#00A264] text-white mb-2 py-1 px-4 rounded-lg text-sm sm:md:mr-6 flex justify-center items-center">
        View All
      </Link>
    </div>

    <Islide />


  </div>
  );
};
export default Interview;
