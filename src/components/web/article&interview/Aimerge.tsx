import Articles from "../articles/Articles";
import Interview from "../interview/Interview";

const Aimergee = () => {
  return (
    <div className=" bg-[url('/ocean.png')]  ">
      <div className=" bg-[#021527] bg-opacity-80 ">
        
        <Interview />
        <Articles />
      </div>
    </div>
  );
};
export default Aimergee;
