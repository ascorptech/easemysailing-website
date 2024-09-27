import Islide from "./Islide";
import Link from "next/link";
const Interview = () => {
  // return (
  //   <div className=" w-[95%]  mx-2 px-1 pt-10  md:mx-6 lg:w-full lg:mx-0 sm:mx-5">
  //     <div className="flex items-center justify-between  lg:mr-[9rem] md:mx-[6.8rem]">
  //       <div className="text-[21px]  leading-[28px] font-bold sm:md:text-4xl  ">
  //         <h1 className="text-white">
  //           Podcast &<span className="text-[#00A264]"> Interviews</span>
  //         </h1>
  //       </div>

  //       <div className="">
  //         <Link
  //           href="/podcast-list"
  //           className="h-8 bg-[#00A264] text-white py-2 px-4 rounded-full text-sm "
  //         >
  //           View All
  //         </Link>
  //       </div>
  //     </div>
  //     <div className="">
  //       <Islide />
  //     </div>
  //   </div>
  // );
  return (
    <div className=" md:w-[90%] lg:container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-[21px]  leading-[28px] font-bold sm:md:text-4xl mt-4">
          Podcast &<span className="text-[#00A264]"> Interviews</span>
        </h1>
        <Link
          href="/podcast-list"
          className="h-8 bg-[#00A264] text-white py-2 px-4 rounded-full text-sm flex items-center justify-center mt-4"
        >
          View All
        </Link>
      </div>
      <Islide/>
    </div>
  )
};
export default Interview;
