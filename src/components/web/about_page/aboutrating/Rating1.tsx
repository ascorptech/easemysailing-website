
import Image from "next/image";

const Rating1 = () => {
  return (
    <div className="mx-1 lg:mx-0 w-[98%] lg:w-full my-9 bg-[#EAEAEA] py-2 flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 lg:gap-16 mx-4 md:mx-7 my-1 w-full max-w-[1275px]">
        {/* First div */}
        <div className="flex flex-col justify-center items-center text-center w-full md:w-1/4 h-auto">
          <h1 className="text-4xl sm:md:text-[46px] lg:leading-[108px] font-bold">
          $ 14 Trillion
          </h1>
          <p className="text-sm sm:md:text-[15px] lg:leading-[30px]">
          90% of Global Trade
          </p>
        </div>

        {/* Second div */}
        <div className="flex flex-col justify-center items-center text-center w-full md:w-1/4 h-auto">
          <h1 className="text-4xl sm:md:text-[46px] lg:leading-[108px] font-bold">
          50,000+
          </h1>
          <p className="text-sm sm:md:text-[15px] lg:leading-[30px]">
          Ships operated by seafarers
          </p>
        </div>

        {/* Third div */}
        <div className="flex flex-col justify-center items-center text-center w-full md:w-1/4 h-auto">
          <h1 className="text-4xl sm:md:text-[46px] lg:leading-[108px] font-bold">
          1.9 Million
          </h1>
          <p className="text-sm sm:md:text-[15px] lg:leading-[30px]">
          Seafarers Serving Globally
          </p>
        </div>

        {/* Fourth div */}
        <div className="flex flex-col justify-center items-center text-center w-full md:w-1/4 h-auto">
          <h1 className="text-4xl sm:md:text-[46px] lg:leading-[108px] font-bold">
            70+
          </h1>
          <p className="text-sm sm:md:text-[15px] lg:leading-[30px]">
            Recruiter Profiles
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rating1;
