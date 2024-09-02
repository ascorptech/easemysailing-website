import Image from "next/image";

const Applying = () => {
  return (
    <div className="flex flex-col md:flex-row md:mx-6 items-center justify-center h-auto lg:h-[40rem] w-[94%] mx-3    my-10 px-4 sm:mx-5 lg:w-full lg:mx-0  ">
      <div className="text-center md:text-left mb-6 md:mb-0  lg:ml-32 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pb-2 mb-4  ">
          <span className="text-[#00A264]">Applying</span> For Jobs Made Easy
          For Sailors
        </h1>
        <div className="flex justify-center md:justify-start">
          <Image
            src="/applying1.png" // Replace with your image path
            alt="Left Image"
            width={500} // Ensure the size is the same for both images
            height={500} // Equal height for both images
            className="w-full lg:w-[44rem] h-auto lg:h-[32rem]"
          />
        </div>
      </div>

      <div className="flex justify-center md:justify-start">
        <Image
          src="/phone.png" // Replace with your image path
          alt="Phone Image"
          width={500} // Match the size of the first image
          height={500} // Equal height for both images
          className="w-[34rem] lg:w-[44rem] h-auto lg:h-[38rem]"
        />
      </div>
    </div>
  );
};

export default Applying;
