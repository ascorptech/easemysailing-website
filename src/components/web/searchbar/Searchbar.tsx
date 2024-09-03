import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="flex items-center justify-center mt-[80px] lg:mt-[80px] mb-3   ">
      <div className=" flex border  rounded-full overflow-hidden shadow-md  w-full max-w-xl mx-2">
        {/* {/ Search Icon /} */}
        <div className="flex items-center justify-center px-4 ">
          <FaSearch className="text-[#00A264]" />
        </div>

        {/* {/ Input Field /} */}
        <input
          type="text"
          placeholder="Enter Ship Type"
          className="flex-grow py-2 px-4 text-sm text-gray-700 outline-none w-[110px] "
        />

        {/* {/ Divider /} */}
        <div className=" pt-1 h-full lg:py-1  ">|</div>

        {/* {/ Dropdown /} */}
        <div className="lg:w-60 lg:pt-1 pt-1 lg:py-1 h-full ">
          <select className="px-4 text-sm ">
            <option>Rank Type</option>
            <option>Captain</option>
            <option>Engineer</option>
            <option>Crew</option>
          </select>
        </div>

        {/* {/ Button /} */}
        <button className="bg-[#00A264] px-1 text-white lg:px-2 lg:py-2 rounded-r-full text-sm">
          Find Job
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
