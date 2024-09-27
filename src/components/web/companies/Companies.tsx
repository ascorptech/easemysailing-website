import Slide from "./Slide";

const Companies = () => {
  return (
    <div className="py-5 lg:h-[200px] md:[98%] border-2 border-red-600 w-[100%] mx-0 px-1 xl:h-auto  lg:w-[100%] lg:mx-0 bg-[#F0FAF7]  ">
      <div className="font-bold text-2xl flex-col sm:ml-[11px] flex lg:mx-0 justify-center text-center w-full  ">
        <h1 className=" fext justify-center items-center text-[30px] lg:text-[40px]">
          <span className=" text-center">Featured</span> <span className="text-[#00A264]">Companies</span>
        </h1>
        <div className="">
        <Slide />
        </div>
      </div>

      
    </div>
  );
};
export default Companies;
