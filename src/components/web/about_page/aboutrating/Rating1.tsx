import Image from "next/image";
const Rating1 = () => {
  return (
    <div className=" w-[100%]  h-[8rem] my-9 ">
      <div className="flex flex-row relative mx-7 my-1  justify-center  items-center gap-16 ">
        {/* first div */}
        {/* <div className="flex h-[9rem] border-2 border-black"> */}
        <div className="flex flex-col sm:md:w-1/2 w-full  justify-center text-center items-center p-3 border-2 shadow-dark rounded-3xl">
          <h1 className="text-7xl font-bold">40+</h1>{" "}
          <p>Registered Seafarers</p>
        </div>
        {/* second div */}
        <div className="flex flex-col sm:md:w-1/2 w-full justify-center text-center items-center  p-3 border-2 rounded-3xl">
          <h1 className="text-7xl font-bold">7k+</h1> <p>Smiling Faces</p>{" "}
        </div>
        {/* Third div */}{" "}
        <div className="flex flex-col sm:md:w-1/2 w-full justify-center text-center items-center  p-3 border-2 rounded-3xl">
          <h1 className="text-7xl font-bold">80</h1>{" "}
          <p>reviews, salaries & insights</p>{" "}
        </div>
        {/*Forth div */}{" "}
        <div className="flex flex-col sm:md:w-1/2 w-full justify-center text-center items-center  p-3 border-2 rounded-3xl">
          <h1 className="text-7xl font-bold">70+</h1> <p>Recruiter Profiles</p>{" "}
        </div>
      </div>
    </div>
  );
};
export default Rating1;
