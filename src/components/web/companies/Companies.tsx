import Slide from "./Slide";

const Companies = () => {
  return (
    <div className="mt-6">
      <div className="font-bold text-2xl sm:ml-[11px] lg:ml-[5rem] xl:ml-[11rem] text-center sm:text-left ml-8">
        <h1>
          <span className="text-green-700">Featured</span> Companies
        </h1>
      </div>

      <Slide />
    </div>
  );
};

export default Companies;
