import Image from "next/image";

const Mv2 = () => {
  return (
    <div className="w-[98%] lg:w-[99.4%] mx-1 my-9  ">
      <div className="flex text-justify flex-col md:flex-row md:mx-7  justify-center items-center gap-8 md:gap-10  lg:w-[1279px] lg:h-[496px] lg:mx-[106px] ">
        {/* First div */}
        <div className="flex  flex-col  md:w-1/3 justify-center text-center items-center  border-2  shadow-lg rounded-tl-[2rem] rounded-br-[3rem]  mb-4 pt-12 md:mb-0  w-[400px] h-[496px]">
          <Image
            src="/centre.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-[95px] h-[95px] "
            priority
          />
          <h1 className="text-2xl lg:text-[36px] lg:leading-[54px] font-semibold mt-2">
            Mission
          </h1>
          <p className="mt-2 text-sm lg:text-[16px] lg:leading-[28px] text-justify  text-[#4E4E4E] px-4  pb-4 ">
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
        <div className="flex  flex-col w-full md:w-1/3 justify-center text-center items-center  border-2  shadow-lg rounded-tl-[2rem] rounded-br-[3rem]  mb-4 md:mb-0  w-[400px] h-[496px]">
          <Image
            src="/eye.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-[98px] h-[116.77px]  "
            priority
          />
          <h1 className="text-2xl font-semibold  lg:text-[36px] lg:leading-[54px]">
            Vision
          </h1>
          <p className="mt-2 text-sm lg:text-[16px] lg:leading-[28px] text-justify text-[#4E4E4E]  px-4 pb-4">
            We envision a maritime industry where open communication bridges the
            gaps between seafarers, shipowners, and recruiters, leading to a
            more inclusive and sustainable future. We aim to promote dialogue
            that brings to light the difficulties and complexities each group
            faces, fostering solutions that enhance both social and
            environmental responsibility within the maritime industry.
          </p>
        </div>

        {/* Third div */}
        <div className="flex flex-col  md:w-1/3 justify-center text-center items-center   shadow-lg border-2 rounded-tl-[3rem] rounded-br-[3rem] w-[400px] h-[496px]  ">
          <Image
            src="/sqr.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-[65.09px] h-[65.09px] "
            priority
          />
          <h1 className="text-2xl font-semibold mt-2 lg:text-[36px] lg:leading-[54px]">
            Values
          </h1>
          <ul className="list-disc list-inside  font-bold lg:text-[16px] text-justify lg:leading-[28px]  pb-4 px-4">
            <li
              className=" text-left
            "
            >
              Transparency :{" "}
              <span className="text-[#4E4E4E] font-normal">
                Open processes and fair dealings in all operations
              </span>
            </li>
            <li>
              Fairness :{" "}
              <span className="text-[#4E4E4E] font-normal">
                Equal respect for all voices, from crew members to shipowners
              </span>
            </li>
            <li>
              Sustainability:{" "}
              <span className="text-[#4E4E4E] font-normal">
                {" "}
                Reducing the environmental impact and promoting greener
                initiatives.
              </span>
            </li>
            <li>
              Community :{" "}
              <span className="text-[#4E4E4E] font-normal">
                Fostering collaboration and understanding through diverse
                perspectives.
              </span>
            </li>
          </ul>
          {/* <p className="mt-2 text-sm  lg:text-[16px] lg:leading-[28px]  text-[#4E4E4E]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            sapiente officiis veritatis obcaecati natus nobis laudantium ullam.
            Ad dicta rem deserunt blanditiis esse, reprehenderit asperiores
            perferendis, eveniet ducimus iusto ea.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Mv2;
