import React from "react";
import Image from "next/image";

const NumberContent = () => {
  return (
    <div className="flex lg:pt-11  lg:w-full lg:h-screen flex-col sm:md:w-[90%]  bg-[#D9F3EA66] self-center">
      {/* Heading div */}
      <h2 className="text-[21px] lg:w-[60%] lg:leading-10 lg:h-14 ml-8 md:text-3xl md:text-left font-bold lg:text-[45px]  mb-4">
        APPLYING FOR JOB MADE EASY FOR{" "}
        <span className="text-[#00A264] text-2xl sm:md:text-4xl">SAILORS</span>
      </h2>
      <div className=" sm:md:[90%] lg mt-10 sm:md:items-center sm:md:flex-row sm:md:flex flex-col sm:md:justify-between ">
        <div className="sm:md:w-[50%] flex lg:w-[49%] flex-col">
          {/* Left image */}
          <div className="lg:h-[440px] ml-8">
            <Image
              src="/applying1.png"
              alt="Applying"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Right image with phone.png overlay */}
        <div className="relative sm:md:w-[49%] lg:h-[440px] lg:w-[45%]">
          {/* numberimg.png */}
          <Image
            src="/ship.png"
            alt="ship Image"
            width={800}
            height={800}
            className="w-full h-full rounded-l-full"
          />

          {/* phone.png overlay */}
          <div className="absolute top-[30px] lg:h-[380px] left-0 w-full flex items-center justify-center">
            <Image
              src="/phone.png"
              alt="Phone"
              width={400}
              height={400}
              className="w-[190px] h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberContent;
