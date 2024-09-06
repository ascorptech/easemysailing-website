const Crew = () => {
  return (
    <div className="lg:mt-10 mx-1 flex flex-col md:flex-row mb-5 w-[98%]">
      {/* Text Section */}
      <div className="flex flex-col px-2 m-1 w-full md:w-1/2">
        <h1 className="text-2xl lg:[46px] lg:leading-[62px] md:text-4xl font-semibold lg:mt-6">
          Our Seafaring <span className="text-[#00A264]">crew</span> pool
        </h1>
        <p className="flex text-justify mt-4 text-[#4E4E4E] text-[16px] leading-[28px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          eligendi suscipit animi. Sequi quos error repellendus explicabo labore
          eum nesciunt modi consectetur accusamus. Nam perferendis voluptas
          libero laboriosam odit labore.
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
