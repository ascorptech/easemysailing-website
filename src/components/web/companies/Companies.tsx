import Slide from "./Slide";

const Companies = () => {
  return (
    <div className="mt-6  w-[94%] mx-3 px-1 md:mx-6   sm:mx-5 lg:w-[100%] lg:mx-0 ">
      <div className="font-bold text-2xl sm:ml-[11px] lg:mx-0  text-center sm:text-left w-full ">
        <h1 className="lg:ml-[12rem]">
          <span className="text-green-700 text-center">Featured</span> Companies
        </h1>
      </div>

      <Slide />
    </div>
  );
};

export default Companies;
