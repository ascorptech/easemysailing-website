import Slide from "./Slide";

const Companies = () => {
  return (
    <div className="py-5 lg:h-[200px]  w-[100%] mx-0 px-1 md:mx-6   lg:w-[100%] lg:mx-0 bg-[#F0FAF7] flex flex-col justify-center items-center ">
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
