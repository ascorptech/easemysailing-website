import Card1 from "./Card1";

// import Card from "./Card";
const Team2 = () => {
  return (
    <div className="mt-4 mx-0 flex flex-col text-center justify-center mb-2">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-[46px] leading-8 md:leading-[50px] lg:leading-[69px] font-semibold mb-6">
          Our <span className="text-[#00A264]">Advisors</span>
        </h1>
      </div>
      <Card1/>
    </div>
  );
};
export default Team2;
