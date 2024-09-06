import Image from "next/image";

const Talk = () => {
  return (
    <div className=" my-4 mx-1 mt-14 flex flex-col items-center justify-center p-4 md:flex-row md:items-start md:space-x-8 lg:space-x-12">
      <div className="flex justify-center">
        <Image
          src="/aboutleft.png" // Replace with your image path
          alt="Left Image"
          width={5000}
          height={5050}
          className="w-full max-w-[25rem] md:max-w-[23rem] pt-2 mt-2"
        />
      </div>
      <div className="w-full max-w-[45rem] lg:text-justify text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-3xl md:text-4xl lg:text-[46px] leading-[62px] font-semibold">
          Let's talk about{" "}
          <span className="text-[#00A264] font-semibold leading-[62px]">
            EaseMy
            <br />
            Sailing
          </span>
        </h1>
        <br />
        <p className="text-sm md:text-base mt-2 px-2 text-[#4E4E4E]">
          EaseMySailing is a platform created by seafarers, for seafarers, built
          on empathy for life at sea and its unique challenges and joys. The
          team behind it has navigated the seas from trainees to top ranks,
          experiencing the sacrifices, dreams, and determination of those who
          choose a life on the ocean.
        </p>
        <br />
        <p className="text-sm md:text-base mt-2 px-2 text-[#4E4E4E]">
          EaseMySailing aims to bring the life of seafarers into the spotlight,
          highlighting the vital role they play and the challenges they face.
          The platform is dedicated to promoting sustainable practices,
          enhancing the well-being of seafarers, and ensuring that their voices
          are heard and respected. We also seek to foster better understanding
          and collaboration among all maritime stakeholders, including
          shipowners and recruiters, to create a more supportive and efficient
          industry environment.
        </p>
      </div>
    </div>
  );
};

export default Talk;
