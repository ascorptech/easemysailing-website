import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="flex items-center justify-center ml-0 lg:ml-0 w-full">
      <div className="flex border-2  bg-white rounded-full overflow-hidden h-[50px] lg:max-w-[970px] w-full">
        {/* Search Icon */}
        <div className="flex items-center justify-center px-4">
          <FaSearch className="text-[#00A264]" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter Ship Type"
          className="flex-grow py-2 text-xs sm:md:text-sm text-gray-700 outline-none md:w-[200px] lg:w-[250px] sm:md:w-[110px] w-[90px] transition-all duration-300"
        />

        {/* Divider */}
        <div className="lg:pt-3 pt-3 lg:ml-0 ml-1 text-black h-full lg:py-2">|</div>

        {/* Dropdown */}
        <div className="lg:w-[300px] lg:pt-0 sm:md:pt-1 pt-[7px]  text-black h-full">
          <select className="lg:px-4 px-2 lg:py-[7px] my-[7px] sm:md:text-sm text-xs outline-none">
            <option>Rank Type</option>
            <option>Captain</option>
            <option>Engineer</option>
            <option>Crew</option>
          </select>
        </div>

        {/* Button */}
        <button className="bg-[#00A264] mt-[2px] lg:mt-0 sm:md:mt-0 px-3 lg:px-5 lg:h-[47px] h-[44px] rounded-full text-xs lg:text-base text-white w-[120px] lg:w-[147px]">
          Find A Job
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
