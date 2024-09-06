import Image from "next/image";

const Wedo = () => {
  return (
    <div className=" mx-1 w-[98%] my-12 px-4 lg:mx-1 lg:w-full bg-[url('/images/Rectangle.png')] ">
     
      {/* Heading */}
      <div className="text-center">
        <h1 className="lg:text-[46px] lg:leading-[62px] md:text-4xl font-semibold">
          What We <span className="text-[#00A264]">Do</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col mx-1 md:flex-row justify-center items-start gap-7 md:gap-16 mt-6">
        {/* First Section */}
        <div className="flex flex-col w-full md:w-1/3 text-center items-center">
          <Image
            src="/wedo1.png" // Replace with your image path
            alt="Left Image"
            width={5000}
            height={5050}
            className="w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] mt-2"
            priority
          />
          <h2 className="text-2xl font-semibold mt-4">For Seafarers</h2>
          <p className="text-sm md:text-base mt-2 px-2 text-[#4E4E4E]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            porro corrupti non explicabo repellat commodi temporibus error
            expedita, distinctio aliquid ab consequatur necessitatibus iure,
            minus ipsam? Minima provident quidem nihil?
          </p>
        </div>

        {/* Second Section */}
        <div className="flex flex-col w-full md:w-1/3 text-center items-center">
          <Image
            src="/wedo2.png" // Replace with your image path
            alt="Left Image"
            width={5000}
            height={5050}
            className="w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] mt-2"
            priority
          />
          <h2 className="text-2xl font-semibold mt-4">For Recruiters</h2>
          <p className="text-sm md:text-base mt-2 px-2 text-[#4E4E4E]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            porro corrupti non explicabo repellat commodi temporibus error
            expedita, distinctio aliquid ab consequatur necessitatibus iure,
            minus ipsam? Minima provident quidem nihil?
          </p>
        </div>

        {/* Third Section */}
        <div className="flex flex-col w-full md:w-1/3 text-center items-center">
          <Image
            src="/wedo1.png" // Replace with your image path
            alt="Left Image"
            width={5000}
            height={5050}
            className="w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] mt-2"
            priority
          />
          <h2 className="text-2xl font-semibold mt-4">For Manning Agents</h2>
          <p className="text-sm md:text-base mt-2 px-2 text-[#4E4E4E]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            sapiente officiis veritatis obcaecati natus nobis laudantium ullam.
            Ad dicta rem deserunt blanditiis esse, reprehenderit asperiores
            perferendis, eveniet ducimus iusto ea.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Wedo;
