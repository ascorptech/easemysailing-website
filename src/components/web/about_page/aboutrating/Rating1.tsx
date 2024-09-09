import Image from "next/image";

const Rating1 = () => {
  return (
    <div className=" mx-1 lg:mx-0  w-[98%] lg:w-full my-9  bg-[#EAEAEA] py-2 flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mx-4 md:mx-7 my-1 w-[1275px] h-[173px] ">
        {/* First div */}
        <div className="flex flex-col  md:w-1/4 justify-center text-center items-center   mb-4 md:mb-0 w-[210px] h-[141px]">
          <h1 className="text-5xl lg:text-[96px] lg:leading-[108px] md:text-7xl font-bold">
            40+
          </h1>
          <p className="text-sm md:text-base lg:text-[20px] lg:leading-[30px]">
            Registered Seafarers
          </p>
        </div>

        {/* Second div */}
        <div className="flex flex-col  md:w-1/4 justify-center text-center items-center   mb-4 md:mb-0  w-[210px] h-[141px]">
          <h1 className="text-5xl md:text-7xl font-bold lg:text-[96px] lg:leading-[108px]">
            7k+
          </h1>
          <p className="text-sm md:text-base lg:text-[20px] lg:leading-[30px]">
            Smiling Faces
          </p>
        </div>

        {/* Third div */}
        <div className="flex flex-col  md:w-1/4 justify-center text-center items-center   mb-4 md:mb-0  w-[210px] h-[141px]">
          <h1 className="text-5xl md:text-7xl font-bold lg:text-[96px] lg:leading-[108px]">
            80
          </h1>
          <p className="text-sm md:text-base lg:text-[20px] lg:leading-[30px]">
            Reviews, Salaries & Insights
          </p>
        </div>

        {/* Fourth div */}
        <div className="flex flex-col  w-[210px] h-[141px] md:w-1/4 justify-center text-center items-center  ">
          <h1 className="text-5xl md:text-7xl font-bold lg:text-[96px] lg:leading-[108px]">
            70+
          </h1>
          <p className="text-sm md:text-base lg:text-[20px] lg:leading-[30px]">
            Recruiter Profiles
          </p>
        </div>
      </div>
    </div>
  );
};
export default Rating1;
