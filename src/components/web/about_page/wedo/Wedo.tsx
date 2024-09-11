// import Image from "next/image";

// const Wedo = () => {
//   return (
//     <div className=" mx-1 w-[98%] my-12 px-4 lg:mx-1 lg:w-[98%] bg-[url('/images/Rectangle.png')] ">
     
//      {/* <div className="flex flex-col justify-center items-center border-2 border-red-600 w-"> */}
//       {/* Heading */}
//       <div className="text-center ">
//         <h1 className="lg:text-[46px] lg:leading-[62px] md:text-4xl font-semibold">
//           What We <span className="text-[#00A264]">Do</span>
//         </h1>
//       </div>

//       {/* Content Section */}
//       <div className="flex flex-col mx-1 md:flex-row justify-center items-start gap-7 md:gap-16 mt-6 ">
//         {/* First Section */}
//         <div className="flex flex-col w-full md:w-1/3  items-center lg:w-[352px] lg:h-[316px] ">
//           <Image
//             src="/wedo1.png" // Replace with your image path
//             alt="Left Image"
//             width={5000}
//             height={5050}
//             className=" w-[197px] h-[168px] "
//             priority
//           />
//           <h2 className="text-2xl font-semibold mt-4">Recruitment</h2>
//           <p className="text-sm md:text-base lg:text-[18px] lg:leading-[28px]  mt-2  text-[#4E4E4E]">
//           EaseMySailing envisions transforming recruitment with AI and technology. We focus on fair, efficient practices, connecting seafarers and shipowners with optimal opportunities to drive maritime industry growth and sustainability
//           </p>
//         </div>

//         {/* Second Section */}
//         <div className="flex flex-col w-full md:w-1/3  items-center lg:w-[352px] lg:h-[316px] ">
//           <Image
//             src="/wedo2.png" // Replace with your image path
//             alt="Left Image"
//             width={5000}
//             height={5050}
//             className="w-[197px] h-[168px] "
//             priority
//           />
//           <h2 className="text-2xl font-semibold mt-4">For Seafarer Wellbeing</h2>
//           <p className="text-sm md:text-base mt-2  text-[#4E4E4E] lg:text-[18px] lg:leading-[28px]">
//           At EaseMySailing, we connect seafarers with recruiters, ensuring they feel valued and engaged. We aim to keep seafarers motivated and connected with management while creating a supportive environment that celebrates their contributions and prioritizes their well-being.
//           </p>
//         </div>

//         {/* Third Section */}
//         <div className="flex flex-col w-full md:w-1/3  items-center lg:w-[352px] lg:h-[316px] ">
//           <Image
//             src="/wedo1.png" // Replace with your image path
//             alt="Left Image"
//             width={5000}
//             height={5050}
//             className="w-[197px] h-[168px]"
//             priority
//           />
//           <h2 className="text-2xl font-semibold mt-4">For Career Progression</h2>
//           <p className="text-sm md:text-base mt-2  text-[#4E4E4E] lg:text-[18px] lg:leading-[28px]">
//           EaseMySailing supports seafarers navigating career changes, from rank advancement to transitions between ship and shore. Our platform helps them achieve career goals and explore new opportunities in the maritime industry.
//           </p>
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//   );
// };
// export default Wedo;
import Image from "next/image";

const Wedo = () => {
  return (
    <div className="mx-1 w-full my-12 px-4 bg-[url('/images/Rectangle.png')] bg-cover lg:mx-1 lg:w-[98%]">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[62px] font-semibold">
          What We <span className="text-[#00A264]">Do</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-7 md:gap-16 mt-6">
        {/* First Section */}
        <div className="flex flex-col items-center w-full md:w-1/3 lg:w-[352px] lg:h-[316px]">
          <Image
            src="/wedo1.png"
            alt="Recruitment"
            width={5000}
            height={5050}
            className="w-[197px] h-[168px]"
            priority
          />
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            Recruitment
          </h2>
          <p className="text-sm md:text-base lg:text-[18px] lg:leading-[28px] mt-2 text-[#4E4E4E] text-center">
            EaseMySailing envisions transforming recruitment with AI and
            technology. We focus on fair, efficient practices, connecting
            seafarers and shipowners with optimal opportunities to drive
            maritime industry growth and sustainability.
          </p>
        </div>

        {/* Second Section */}
        <div className="flex flex-col items-center w-full md:w-1/3 lg:w-[352px] lg:h-[316px]">
          <Image
            src="/wedo2.png"
            alt="Seafarer Wellbeing"
            width={5000}
            height={5050}
            className="w-[197px] h-[168px]"
            priority
          />
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            For Seafarer Wellbeing
          </h2>
          <p className="text-sm md:text-base lg:text-[18px] lg:leading-[28px] mt-2 text-[#4E4E4E] text-center">
            At EaseMySailing, we connect seafarers with recruiters, ensuring
            they feel valued and engaged. We aim to keep seafarers motivated and
            connected with management while creating a supportive environment
            that celebrates their contributions and prioritizes their
            well-being.
          </p>
        </div>

        {/* Third Section */}
        <div className="flex flex-col items-center w-full md:w-1/3 lg:w-[352px] lg:h-[316px]">
          <Image
            src="/wedo1.png"
            alt="Career Progression"
            width={5000}
            height={5050}
            className="w-[197px] h-[168px]"
            priority
          />
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            For Career Progression
          </h2>
          <p className="text-sm md:text-base lg:text-[18px] lg:leading-[28px] mt-2 text-[#4E4E4E] text-center">
            EaseMySailing supports seafarers navigating career changes, from
            rank advancement to transitions between ship and shore. Our platform
            helps them achieve career goals and explore new opportunities in the
            maritime industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
