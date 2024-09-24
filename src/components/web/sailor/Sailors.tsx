import React from "react";
import Image from "next/image";

const NumberContent = () => {
  return (
    <div className="flex lg:pt-11 pt-4 w-full lg:w-full  flex-col pb-10 bg-[#D9F3EA66] self-center">
      {/* Heading div */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[60px] font-bold mb-4 lg:w-[70%] ml-5 lg:ml-10">
        APPLYING FOR JOB MADE EASY FOR{" "}
        <p className="text-[#00A264] flex mt-2 lg:mt-6">
          SAILORS
          <Image
            priority
            src="/anchor.png"
            alt="anchor"
            width={200}
            height={200}
            className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-9 ml-2 lg:ml-3"
          />
        </p>
      </h2>

      {/* Content div */}
      <div className="flex flex-col lg:flex-row mt-2 lg:mt-10 items-center justify-center lg:justify-between">
        {/* Left image */}
        <div className="w-full lg:w-[57%] flex flex-col">
          <div className="h-[250px] sm:h-[350px] lg:h-[500px] mx-2 lg:ml-10">
            <Image
              priority
              src="/applying1.png"
              alt="Applying"
              width={1000}
              height={1000}
              className="w-full h-full "
            />
          </div>
        </div>

        {/* Right image with phone.png overlay */}
        <div className="relative w-full lg:w-[40%] h-[280px] sm:h-[350px] lg:h-[500px] flex items-center  justify-center mt-6 lg:mt-0">
          {/* ship2.png */}
          <Image
            priority
            src="/ship2.png"
            alt="ship"
            width={800}
            height={800}
            className="w-full h-full  pl-3 lg:pl-0  rounded-l-full"
          />

          {/* phone.png overlay */}
          <div className="absolute top-0 w-full h-full flex items-center justify-center">
            <Image
              src="/phone1.png"
              alt="Phone"
              width={400}
              height={400}
              className="w-[100px] sm:w-[150px] lg:w-[190px] h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberContent;
