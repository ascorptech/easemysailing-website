import Slide from "./Slide";

const Companies = () => {
  return (
    <div className="py-5 lg:h-[200px] lg:mt-[4rem] w-[94%] mx-3 px-1 md:mx-6  sm:mx-5 lg:w-[100%] lg:mx-0 bg-[#F0FAF7] flex flex-col justify-center items-center ">
      <div className="font-bold text-2xl sm:ml-[11px] flex lg:mx-0 justify-center text-center sm:text-left w-full  ">
        <h1 className="  text-[21px]">
          <span className=" text-center">Featured</span> Companies
        </h1>
      </div>

      <Slide />
    </div>
  );
};
export default Companies;
