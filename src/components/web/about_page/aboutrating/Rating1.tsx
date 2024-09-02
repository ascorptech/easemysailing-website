import Image from "next/image";

const Rating1 = () => {
  return (
    <div className="border-2 border-red-700 w-full my-9">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mx-4 md:mx-7 my-1">
        {/* First div */}
        <div className="flex flex-col w-full md:w-1/4 justify-center text-center items-center p-3 border-2 shadow-lg rounded-3xl mb-4 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold">40+</h1>
          <p className="text-sm md:text-base">Registered Seafarers</p>
        </div>

        {/* Second div */}
        <div className="flex flex-col w-full md:w-1/4 justify-center text-center items-center p-3 border-2 shadow-lg rounded-3xl mb-4 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold">7k+</h1>
          <p className="text-sm md:text-base">Smiling Faces</p>
        </div>

        {/* Third div */}
        <div className="flex flex-col w-full md:w-1/4 justify-center text-center items-center p-3 border-2 shadow-lg rounded-3xl mb-4 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold">80</h1>
          <p className="text-sm md:text-base">Reviews, Salaries & Insights</p>
        </div>

        {/* Fourth div */}
        <div className="flex flex-col w-full md:w-1/4 justify-center text-center items-center p-3 border-2 shadow-lg rounded-3xl">
          <h1 className="text-5xl md:text-7xl font-bold">70+</h1>
          <p className="text-sm md:text-base">Recruiter Profiles</p>
        </div>
      </div>
    </div>
  );
};

export default Rating1;
