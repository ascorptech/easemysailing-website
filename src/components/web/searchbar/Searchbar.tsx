import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="flex items-center justify-center mt-[80px] lg:mt-[67px] mb-3   ">
      <div className="flex border  rounded-full overflow-hidden shadow-md w-full max-w-xl">
        {/* {/ Search Icon /} */}
        <div className="flex items-center justify-center px-4 ">
          <FaSearch className="text-[#00A264]" />
        </div>

        {/* {/ Input Field /} */}
        <input
          type="text"
          placeholder="Enter Ship Type"
          className="flex-grow py-2 px-4 text-sm text-gray-700 outline-none "
        />

        {/* {/ Divider /} */}
        <div className="w-1 pt-3 h-full lg:py-1 ">|</div>

        {/* {/ Dropdown /} */}
        <div className="w-60 pt-3 lg:py-1 h-full ">
          <select className="px-4 text-sm ">
            <option>Rank Type</option>
            <option>Captain</option>
            <option>Engineer</option>
            <option>Crew</option>
          </select>
        </div>

        {/* {/ Button /} */}
        <button className="bg-[#00A264] text-white px-2 py-2 rounded-r-full text-sm">
          Find Job
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
