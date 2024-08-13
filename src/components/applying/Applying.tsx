import Image from "next/image";

const Applying = () => {
  return (
    <div className="h-[30rem] w-[82%]  flex items-center justify-center ml-[8.8rem] my-10 ">
      <div className="">
        <h1 className="text-4xl font-semibold pb-2 mb-2">
          <span className="text-green-700">Applying</span> For Jobs Made Easy
          For Sailors
        </h1>
        <div>
          <Image
            src="/applying1.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-[45rem] h-48 md:w-[43rem] md:h-[23rem] pt-2 mt-2 "
          />
        </div>
      </div>

      <div>
        <img src="phone.png" alt="" />
      </div>
    </div>
  );
};
export default Applying;
