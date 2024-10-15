import Articles from "../articles/Articles";
import Interview from "../interview/Interview";

const Aimergee = () => {
  return (
    <div className=" bg-[url('/images/ocean-bg.png')] bg-cover">
      {/* <div className=" bg-[#021527] bg-opacity-0  "> */}
        
        <Interview />
        <hr className="w-full  border-spacing-1 border-[#77E2B9] my-3 border-[0.2px] "/>
        <Articles />
      {/* </div> */}
    </div>
  );
};
export default Aimergee;
