import Image from "next/image";

const Mv2 = () => {
  return (
    <div className="w-full lg:w-[99.4%] mx-1 my-9">
      <div className="flex flex-col md:flex-row justify-center  gap-8 md:gap-10 mx-4 md:mx-7 lg:mx-[106px]">
        {/* First div */}
        <div className="flex flex-col justify-center items-center text-center border-2 shadow-lg rounded-tl-[2rem] rounded-br-[2rem] w-full md:w-[400px] h-auto pt-12">
          <div className="w-[100px] h-[100px] ">
            <Image
              src="/mission.png"
              alt="Mission Image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <h1 className="text-xl md:text-2xl lg:text-[36px] lg:leading-[54px] font-semibold mt-2">
            Mission
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-[16px] lg:leading-[28px] text-justify text-[#4E4E4E] px-4">
            Our mission is to create a transparent, open forum for the maritime
            community where critical issues can be discussed and resolved. We
            are dedicated to supporting Employee Social Governance (ESG) in the
            shipping industry, ensuring fair treatment and welfare for
            seafarers, and actively contributing to global environmental
            protection efforts by aligning with initiatives to reduce the
            industry’s carbon footprint.
          </p>
        </div>

        {/* Second div */}
        <div className="flex flex-col justify-center items-center text-center border-2 shadow-lg rounded-tl-[2rem] rounded-br-[2rem] w-full md:w-[400px] h-auto pt-12 ">
          <div className="w-[100px] h-[100px] ">
            <Image
              src="/vision.png"
              alt="Vision Image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <h1 className="text-xl md:text-2xl lg:text-[36px] lg:leading-[54px] font-semibold mt-2">
            Vision
          </h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-[16px] lg:leading-[28px] text-justify text-[#4E4E4E] px-4">
            We envision a maritime industry where open communication bridges the
            gaps between seafarers, shipowners, and recruiters, leading to a
            more inclusive and sustainable future. We aim to promote dialogue
            that brings to light the difficulties and complexities each group
            faces, fostering solutions that enhance both social and
            environmental responsibility within the maritime industry.
          </p>
        </div>

        {/* Third div */}
        <div className="flex flex-col justify-center items-center text-center border-2 shadow-lg rounded-tl-[2rem] rounded-br-[2rem] w-full md:w-[400px] h-auto pt-12 ">
          <div className="w-[100px] h-[100px] ">
            <Image
              src="/value.png"
              alt="Values Image"
              width={100}
              height={100}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <h1 className="text-xl md:text-2xl lg:text-[36px] lg:leading-[54px] font-semibold mt-2">
            Values
          </h1>
          <ul className="mt-2 list-disc list-inside font-bold text-xs sm:text-sm md:text-base lg:text-[16px] lg:leading-[28px] text-left text-[#4E4E4E] px-4">
            <li>
              Transparency:{" "}
              <span className="font-normal">
                Open processes and fair dealings in all operations
              </span>
            </li>
            <li>
              Fairness:{" "}
              <span className="font-normal">
                Equal respect for all voices, from crew members to shipowners
              </span>
            </li>
            <li>
              Sustainability:{" "}
              <span className="font-normal">
                Reducing the environmental impact and promoting greener
                initiatives
              </span>
            </li>
            <li>
              Community:{" "}
              <span className="font-normal">
                Fostering collaboration and understanding through diverse
                perspectives
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mv2;
