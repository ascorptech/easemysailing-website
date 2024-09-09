import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="flex items-center justify-center  lg:mt-[80px] ml-3 lg:ml-0 mb-3 w-[94%]    lg:w-full ">
      <div className=" flex border-2  rounded-full overflow-hidden lg:h-[50px] lg:max-w-[970px]  w-full mx-2 mt-5">
        {/* {/ Search Icon /} */}
        <div className="flex items-center justify-center px-4 ">
          <FaSearch className="text-[#00A264]" />
        </div>

        {/* {/ Input Field /} */}
        <input
          type="text"
          placeholder="Enter Ship Type"
          className="flex-grow py-2 text-sm text-gray-700 outline-none w-[110px] "
        />

        {/* {/ Divider /} */}
        <div className=" pt-1 lg:mt-1 h-full lg:py-1  ">|</div>

        {/* {/ Dropdown /} */}
        <div className="lg:w-[400px] lg:pt-1 pt-1 lg:py-1  lg:mt-1 h-full ">
          <select className="px-4 text-sm ">
            <option>Rank Type</option>
            <option>Captain</option>
            <option>Engineer</option>
            <option>Crew</option>
          </select>
        </div>

        {/* {/ Button /} */}
        <button className="bg-[#00A264] px-1 text-white lg:px-5 lg:h-[50px] rounded-full text-sm w-[137px]">
          Find Job
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
