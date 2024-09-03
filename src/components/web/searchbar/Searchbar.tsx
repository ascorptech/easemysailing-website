import { FaSearch } from "react-icons/fa";
const Searchbar = () => {
  return (
    <div className="flex items-center justify-center lg:mt-[66px] mb-3  mt-[80px] ">
      <div className="flex border  rounded-full overflow-hidden shadow-md w-full max-w-xl">
        {/* Search Icon */}
        <div className="flex items-center justify-center px-4 ">
          <FaSearch className="text-[#00A264]" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter Ship Type"
          className="flex-grow py-2 lg:px-4 px-2 text-sm text-gray-700 outline-none "
        />

        {/* Divider */}
        <div className="w-1  h-full ">|</div>

        {/* Dropdown */}
        <div className="lg:w-60 md:w-32 ">
          <select className="lg:px-4 px-2 text-sm ">
            <option>Rank Type</option>
            <option>Captain</option>
            <option>Engineer</option>
            <option>Crew</option>
          </select>
        </div>

        {/* Button */}
        <button className="bg-[#00A264] text-white px-5 py-2 rounded-r-full text-sm">
          Find Job
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
