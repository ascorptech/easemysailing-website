// import Image from "next/image";
// const Crew = () => {
//   return (
//     <div className="lg:mt-24 mx-24 flex flex-col md:flex-row mb-5 w-[1309px] h-[361.21px]  justify-center items-center  ">
     
//       {/* Text Section */}
//       <div className="flex flex-col px-2 m-1 h-[272px] w-[817px]  ">
//         <h1 className="text-2xl lg:[46px] lg:leading-[62px] md:text-4xl font-semibold ">
//         Navigating Future Challenges:
//         </h1>
//         <h3 className="text-[28px] leading-[62px] font-semibold">Ensuring a Skilled and Diverse <span className="text-[#00A264]"> Maritime Workforce</span></h3>
//         <p className="flex text-justify  text-[#4E4E4E] text-[18px] leading-[28px]">
//         The maritime industry faces critical officer shortages, as detailed in the New BIMCO/ICS Seafarer Workforce Report. This issue is worsened by a lack of training and rapid technological advancements. The shift towards digital and green technologies heightens the need for updated skills. Addressing these challenges requires promoting gender diversity and expanding the crew pool in emerging nations. Building a diverse and skilled workforce is crucial for meeting future demands and supporting industry growth. EaseMySailing promotes the global engagement of E2E stakeholders, facilitating the seamless recruitment of talent without boundaries.
//         </p>
//       </div>

//       {/* Map Section */}
//       <div className="w-[502px] h-[333.86px]    md:h-80  mt-4 md:mt-0 ">
//         <Image
//           src="/images/location.png"
//           alt="image not found"
//           width={500}
//           height={500}
//           className="w-full h-full"
//           loading="lazy"
//         ></Image>
//       </div>
     
//     </div>
//   );
// };
// export default Crew;

import Image from "next/image";

const Crew = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 lg:px-24 lg:mt-24 mb-5">
      {/* Text Section */}
      <div className="flex flex-col md:w-1/2 lg:w-[817px] px-2 m-1">
        <h1 className="text-xl md:text-2xl lg:text-[46px] lg:leading-[62px] font-semibold">
          Navigating Future Challenges:
        </h1>
        <h3 className="text-lg md:text-2xl lg:text-[28px] lg:leading-[62px] font-semibold">
          Ensuring a Skilled and Diverse{" "}
          <span className="text-[#00A264]">Maritime Workforce</span>
        </h3>
        <p className="text-justify text-sm md:text-base lg:text-[18px] lg:leading-[28px] text-[#4E4E4E]">
          The maritime industry faces critical officer shortages, as detailed in
          the New BIMCO/ICS Seafarer Workforce Report. This issue is worsened by
          a lack of training and rapid technological advancements. The shift
          towards digital and green technologies heightens the need for updated
          skills. Addressing these challenges requires promoting gender
          diversity and expanding the crew pool in emerging nations. Building a
          diverse and skilled workforce is crucial for meeting future demands
          and supporting industry growth. EaseMySailing promotes the global
          engagement of E2E stakeholders, facilitating the seamless recruitment
          of talent without boundaries.
        </p>
      </div>

      {/* Map Section */}
      <div className="w-full md:w-1/2 lg:w-[502px] h-auto mt-4 md:mt-0">
        <Image
          src="/images/location.png"
          alt="image not found"
          width={500}
          height={500}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Crew;
