import Image from "next/image";

const Mv2 = () => {
  return (
    <div className="w-[98%] lg:w-[99.4%] mx-1 my-9 ">
      <div className="flex flex-col md:flex-row md:mx-7 my-1 justify-center items-center gap-8 md:gap-16">
        {/* First div */}
        <div className="flex  flex-col w-full md:w-1/3 justify-center text-center items-center p-3 border-2  shadow-lg rounded-tl-[2rem] rounded-br-[3rem]  mb-4 md:mb-0">
          <Image
            src="/centre.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-24 h-24 pt-2 mt-2"
            priority
          />
          <h1 className="text-2xl lg:text-[36px] lg:leading-[54px] font-semibold mt-2">Mission</h1>
          <p className="mt-2 text-sm lg:text-[16px] lg:leading-[28px]  text-[#4E4E4E] pl-4 text-left pb-4 ">
          Our mission is to create a transparent, open forum for the maritime community where critical issues can be discussed and resolved. We are dedicated to supporting Employee Social Governance (ESG) in the shipping industry, ensuring fair treatment and welfare for seafarers, and actively contributing to global environmental protection efforts by aligning with initiatives to reduce the industry’s carbon footprint.
          </p>
        </div>

        {/* Second div */}
        <div className="flex flex-col w-full md:w-1/3 justify-center text-center items-center p-3 border-2 shadow-lg rounded-tl-[3rem]  rounded-br-[3rem]  mb-4 md:mb-0">
          <Image
            src="/eye.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-24 max-h-24 pt-2 mt-2"
            priority
          />
          <h1 className="text-2xl font-semibold mt-2 lg:text-[36px] lg:leading-[54px]">Vision</h1>
          <p className="mt-2 text-sm lg:text-[16px] lg:leading-[28px]  text-[#4E4E4E] text-left pl-4 pb-4">
          We envision a maritime industry where open communication bridges the gaps between seafarers, shipowners, and recruiters, leading to a more inclusive and sustainable future. We aim to promote dialogue that brings to light the difficulties and complexities each group faces, fostering solutions that enhance both social and environmental responsibility within the maritime industry.
          </p>
        </div>

        {/* Third div */}
        <div className="flex flex-col w-full md:w-1/3 justify-center text-center items-center p-3  shadow-lg border-2 rounded-tl-[3rem] rounded-br-[3rem]  ">
          <Image
            src="/sqr.png" // Replace with your image path
            alt="Left Image"
            width={5000} // Set to match the height
            height={5050} // Ensure the aspect ratio is consistent
            className="w-20 h-20 pt-3 mt-6"
            priority
          />
          <h1 className="text-2xl font-semibold mt-2 lg:text-[36px] lg:leading-[54px]">Values</h1>
          <ul className="list-disc list-inside  font-bold lg:text-[16px] lg:leading-[28px] text-left pb-4 pl-4">
            <li className="  ">Transparency : <span className="text-[#4E4E4E] font-normal">Open processes and fair dealings in all operations</span></li>
            <li>Transparency : <span className="text-[#4E4E4E] font-normal">Equal respect for all voices, from crew members to shipowners</span></li>
            <li>Transparency : <span className="text-[#4E4E4E] font-normal">Reducing the environmental impact and promoting greener initiatives.</span></li>
            <li>Transparency : <span className="text-[#4E4E4E] font-normal">Fostering collaboration and understanding through diverse perspectives.</span></li>
           
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
