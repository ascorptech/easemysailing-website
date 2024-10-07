
import Card from "./Card";

const Team = () => {
  return (
    <div className="mt-4 mx-0 flex flex-col text-center justify-center sm:mb-0 mb-40">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-[46px] leading-8 md:leading-[50px] lg:leading-[69px] font-semibold sm:mb-6 mb-0">
          Our <span className="text-[#00A264]">Team</span>
        </h1>
      </div>
      <Card />
    </div>
  );
};

export default Team;
