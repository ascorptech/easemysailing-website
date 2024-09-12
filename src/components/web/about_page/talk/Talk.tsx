import Image from "next/image";

const Talk = () => {
  return (
    <div className="  mt-11 flex justify-center items-center">
      <div className="w-full ml-4 my-4 md:mx-1 flex flex-col items-center justify-center md:p-4 md:flex-row md:items-start md:space-x-8 lg:space-x-4  lg:w-[1267px] lg:h-[495px]">
        <div className="flex justify-center   lg:w-[486px] lg:h-[459px]">
          <Image
            src="/aboutleft.png" // Replace with your image path
            alt="Left Image"
            width={5000}
            height={5050}
            className="w-[23rem] md:max-w-[23rem] pt-2 mt-2"
          />
        </div>
        <div className="w-full  md:max-w-[45rem]  text-center md:text-left mt-4 md:mt-0 lg:w-[681px] lg:h-[386px] ">
          <h1 className="text-[28px] md:text-4xl lg:text-[44px] leading-[62px] font-semibold">
            Let's talk About <span className="text-[#00A264] font-semibold leading-[62px]">
              EaseMySailing
            </span>
          </h1>
          <br />
          <p className="text-[16px] leading-[28px] md:text-base lg:text-[18px] lg:leading-[28px] mt-2 px-2 text-[#4E4E4E]">
            EaseMySailing is a platform created by seafarers, for seafarers,
            built on empathy for life at sea and its unique challenges and joys.
            The team behind it has navigated the seas from trainees to top
            ranks, experiencing the sacrifices, dreams, and determination of
            those who choose a life on the ocean.
          </p>

          <p className="text-sm md:text-base px-2 text-[#4E4E4E] mt-4 lg:text-[18px] lg:leading-[28px]">
            EaseMySailing aims to bring the life of seafarers into the
            spotlight, highlighting the vital role they play and the challenges
            they face. The platform is dedicated to promoting sustainable
            practices, enhancing the well-being of seafarers, and ensuring that
            their voices are heard and respected. We also seek to foster better
            understanding and collaboration among all maritime stakeholders,
            including shipowners and recruiters, to create a more supportive and
            efficient industry environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Talk;
