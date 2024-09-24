import React from "react";
import Image from "next/image";

const NumberContent = () => {
  return (
    <div className="flex lg:pt-11  lg:w-full lg:h-screen flex-col sm:md:w-[90%]  pb-10 bg-[#D9F3EA66] self-center">
      {/* Heading div */}
      <h2 className="text-[21px] lg:w-[70%]  lg:h-20 ml-10 md:text-3xl md:text-left font-bold lg:text-[60px]  mb-4">
        APPLYING FOR JOB MADE EASY FOR{" "}
        <p className="text-[#00A264] flex mt-6">
          SAILORS
          <Image
            priority
            src="/anchor.png"
            alt="partners"
            width={200}
            height={200}
            className=" h-10 w-9 ml-3"
          />
        </p>
      </h2>

      <div className=" sm:md:[90%] mt-10 sm:md:items-center sm:md:flex-row sm:md:flex flex-col sm:md:justify-between ">
        <div className="sm:md:w-[50%] flex lg:w-[57%] flex-col">
          {/* Left image */}
          <div className="lg:h-[500px] ml-10">
            <Image
              priority
              src="/applying1.png"
              alt="Applying"
              width={1000}
              height={1000}
              className="w-full h-full blur-[1px]"
            />
          </div>
        </div>

        {/* Right image with phone.png overlay */}
        <div className="relative sm:md:w-[49%] lg:h-[500px] lg:w-[40%]  flex items-center justify-center ">
          {/* numberimg.png */}
          <Image
            priority
            src="/ship2.png"
            alt="ship Image"
            width={800}
            height={800}
            className="w-full h-full rounded-l-full"
          />

          {/* phone.png overlay */}
          <div className="absolute  lg:h-[380px] w-full flex items-center justify-center">
            <Image
              src="/phone.png"
              alt="Phone"
              width={400}
              height={400}
              className="w-[190px] h-full blur-[1px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberContent;
