const Crew = () => {
  return (
    <div className="lg:mt-10 mx-1 flex flex-col md:flex-row mb-5 w-[98%]">
      {/* Text Section */}
      <div className="flex flex-col px-2 m-1 w-full md:w-1/2">
        <h1 className="text-2xl lg:[46px] lg:leading-[62px] md:text-4xl font-semibold lg:mt-6">
          Our Seafaring <span className="text-[#00A264]">crew</span> pool
        </h1>
        <p className="flex text-justify mt-4 text-[#4E4E4E] text-[16px] leading-[28px]">
        The maritime industry faces critical officer shortages, as detailed in the New BIMCO/ICS Seafarer Workforce Report. This issue is worsened by a lack of training and rapid technological advancements. The shift towards digital and green technologies heightens the need for updated skills. Addressing these challenges requires promoting gender diversity and expanding the crew pool in emerging nations. Building a diverse and skilled workforce is crucial for meeting future demands and supporting industry growth. EaseMySailing promotes the global engagement of E2E stakeholders, facilitating the seamless recruitment of talent without boundaries.
        </p>
      </div>

      {/* Map Section */}
      <div className="w-full  md:w-1/2  h-64 md:h-80 bg-gray-200 mt-4 md:mt-0 lg:mx-24">
        <img
          src="/images/location.png"
          className="w-full h-full mx-0 border-0"
          loading="lazy"
        ></img>
      </div>
    </div>
  );
};
export default Crew;
