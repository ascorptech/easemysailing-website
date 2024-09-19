import Articles from "../articles/Articles";
import Interview from "../interview/Interview";

const Aimergee = () => {
  return (
    <div className=" bg-[url('/ocean.png')] h-screen mt-2 ">
      <div className=" bg-[#021527] h-full bg-opacity-60 ">
        <Interview />
        <Articles />
      </div>
    </div>
  );
};
export default Aimergee;
