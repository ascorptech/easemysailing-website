import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="flex items-center  justify-center  ml-3 lg:ml-0  w-[94%]  lg:w-full ">
      <div className=" flex border-2 bg-white  rounded-full overflow-hidden lg:h-[50px] lg:max-w-[970px]  w-full ">
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
        <div className=" pt-1  text-black lg:mt-1 h-full lg:py-2  ">|</div>

        {/* {/ Dropdown /} */}
        <div className="lg:w-[300px] text-black lg:pt-1 pt-1 lg:py-2  lg:mt-1 h-full ">
          <select className="px-4 text-sm ">
            <option>Rank Type</option>
            <option>Captain</option>
            <option>Engineer</option>
            <option>Crew</option>
          </select>
        </div>

        {/* {/ Button /} */}
        <button className="bg-[#00A264] px-1 text-white lg:px-5 lg:h-[50px] rounded-full text-base w-[147px]">
          Find A Job
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
