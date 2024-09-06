import Image from "next/image";

const Wedo = () => {
  return (
    <div className=" mx-1 w-[98%] my-12 px-4 lg:mx-1 lg:w-[98%] bg-[url('/images/Rectangle.png')] ">
     
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
          <h2 className="text-2xl font-semibold mt-4">Recruitment</h2>
          <p className="text-sm md:text-base mt-2 px-2 text-[#4E4E4E]">
          EaseMySailing envisions transforming recruitment with AI and technology. We focus on fair, efficient practices, connecting seafarers and shipowners with optimal opportunities to drive maritime industry growth and sustainability
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
          <h2 className="text-2xl font-semibold mt-4">For Seafarer Wellbeing</h2>
          <p className="text-sm md:text-base mt-2 px-2 text-[#4E4E4E]">
          At EaseMySailing, we connect seafarers with recruiters, ensuring they feel valued and engaged. We aim to keep seafarers motivated and connected with management while creating a supportive environment that celebrates their contributions and prioritizes their well-being.
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
          <h2 className="text-2xl font-semibold mt-4">For Career Progression</h2>
          <p className="text-sm md:text-base mt-2 px-2 text-[#4E4E4E]">
          EaseMySailing supports seafarers navigating career changes, from rank advancement to transitions between ship and shore. Our platform helps them achieve career goals and explore new opportunities in the maritime industry.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Wedo;
